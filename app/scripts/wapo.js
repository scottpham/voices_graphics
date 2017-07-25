import * as d3 from "d3";
import * as _ from 'lodash';
import { dData } from './demo.js';

// use this
window.dData = dData;
window.demoData = demoData;
window.d3 = d3;

// sort by key
const wapo = dData.wapo.sort( function(a, b){
  return d3.ascending(a.key, b.key);
});

const wapoChart = {
  create(opts){
    const instance = Object.create(this);
    // loop over options passed in and attach them to instances 
    Object.keys(opts).forEach( function(key){
      // instance property equals value of the option
      instance[key] = opts[key]; 
    });
    return instance;
  },
  margin: {
    left: 140,
    right: 30,
    top: 10,
    bottom: 35
  },
  el: "#graphic",
  ratio: "0.5", //width-height ratio
  parameters(){
    this.outerWidth = document.querySelector(this.el).clientWidth;
    this.width = this.outerWidth - this.margin.left - this.margin.right;
    this.outerHeight = this.outerWidth * this.ratio;
    this.height = this.outerHeight - this.margin.top - this.margin.bottom;
  },
  createScales(){
    const that = this;
    
    const xDomain = [0, 100];
    
    const yDomain = dData.wapo.map( each => each.key);

    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain(xDomain);

    this.y1Scale = d3.scaleBand()
      .padding(0.2);

    this.y0Scale = d3.scaleBand()
      .range([this.height, 0])
      .domain(yDomain)
      .padding(0.2);
  },
  drawPlot(){
    document.querySelector(this.el).innerHTML = "";
    this.svg = d3.select(this.el)
      .append("svg")
      .attr("width", this.outerWidth) 
      .attr("height", this.outerHeight);

    this.plot = this.svg
      .append("g")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
  },
  drawData(){
    const that = this;
    
    const group = this.plot.append("g")
      .attr("class", "demoBars");
    const barHeight = this.height / 8;

    group.selectAll("rect")
      .data(wapo)
      .enter()
      .append('rect')
      .attr("class", "bar")
      .attr('height', that.yScale.bandwidth())
      .attr('x', 0)
      .attr('y', function(d, i) { 
        return that.yScale(d.key); 
      })
      .attr('width', function(d, i){ 
        return that.xScale(d.value) 
      });
  },
  drawAxes(){
    this.yAxis = d3.axisLeft()
      .scale(this.yScale);

    this.xAxis = d3.axisBottom()
      .scale(this.xScale)
      .ticks(4);
    ;
    
    this.plot.append("g")
      .attr("class", "axis yaxis")
      .attr("transform", "translate(0,0)")
      .call(this.yAxis);

    this.plot.append("g")
      .attr("class", "axis xaxis")
      .attr("transform", `translate(0, ${this.height})`)
      .call(this.xAxis);
    
    //grid lines
    this.yGrid = d3.axisBottom()
      .scale(this.xScale)
      .tickSize(this.height)
      .tickFormat("");

    this.plot.append("g")
      .attr("class", "grid")
      .call(this.yGrid);
  },
  draw(){
    this.parameters();
    this.createScales();
    this.drawPlot();
    this.drawAxes();
    this.drawData();
  }
}


export { wapoChart };
