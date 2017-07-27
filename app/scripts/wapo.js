import * as d3 from "d3";
import * as _ from 'lodash';
import { dData } from './demo.js';
import { wrap } from './wrap.js';

// use this
window.dData = dData;
window.demoData = demoData;
window.d3 = d3;

// useful link https://bl.ocks.org/mbostock/3887051

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
  paper: 'wapo',
  msa: 'washington_msa',
  colorRange: ["#004D80", "#CCEBFF", "black"],
  margin: {
    left: 90,
    right: 20,
    top: 15,
    bottom: 35
  },
  el: "#graphic",
  ratio: "0.7", //width-height ratio
  parameters(){
    this.outerWidth = document.querySelector(this.el).clientWidth;
    this.width = this.outerWidth - this.margin.left - this.margin.right;
    this.outerHeight = this.outerWidth * this.ratio;
    this.height = this.outerHeight - this.margin.top - this.margin.bottom;
  },
  createScales(){
    const that = this;
    const xDomain = [0, 100];
    
    // bar width
    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain(xDomain);

    // scale for location groupings (define range based on y1)
    this.y0Scale = d3.scaleBand()
      .domain([this.paper, "us", this.msa])
      .paddingInner(0.15);

    // sc'le for race groupings (whole chart up to down) 
    this.y1Scale = d3.scaleBand()
      .padding(0.2)
      .rangeRound([this.height, 0])
      .domain(["White", "Black", "Hispanic", "Asian", "Native American", "Other"].reverse());
    
    // the range is a small group
    this.y0Scale
      .range([0, this.y1Scale.bandwidth()]);

    this.colorScale = d3.scaleOrdinal()
      .domain([this.paper, "us", this.msa])
      .range(this.colorRange);
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
  drawData(place){
    const that = this;
    
    const barHeight = this.y0Scale.bandwidth();

    const wapoBars = this.plot.selectAll("bars")
      .data(dData[place])
      .enter().append("rect")
        .attr("class", "rect")
      .attr("transform", function( d,i ) { 
        return `translate(0, ${that.y0Scale(place)} )`; 
      })
      .attr("height", barHeight)
      .attr("fill", function( d, i ) { return that.colorScale(place); })
      .attr("y", function( d, i ) { return  that.y1Scale(d.key) })
      .attr("width", function( d, i ) { return that.xScale(d.value) });
     
  },
  drawAxes(){
    this.yAxis = d3.axisLeft()
      .scale(this.y1Scale);

    this.xAxis = d3.axisBottom()
      .scale(this.xScale)
      .ticks(4);
    
    this.plot.append("g")
      .attr("class", "axis yaxis")
      .attr("transform", "translate(0,0)")
      .call(this.yAxis)
    .selectAll('.axis text')
      .call(wrap, 70);

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
  colorText(){
    // text box
    const el = `span#${this.paper}`;
    console.log(document.querySelector(el));
    // color
    const color = this.colorScale(this.paper);
    document.querySelector(el).style.backgroundColor = color;
  },
  draw(){
    this.parameters();
    this.createScales();
    this.drawPlot();
    this.drawAxes();
    this.drawData(this.paper);
    this.drawData("us");
    this.drawData(this.msa);
    this.colorText();
  }
}


export { wapoChart };
