import * as d3 from "d3";
import * as _ from 'lodash';

console.log(_);

const demoData = require("../assets/newsroom_demo.json");

window.demoData = demoData;
window.d3 = d3;

// fix the data
//demoData.forEach( function(each){
//});

const demoChart = {
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
    left: 110,
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
    const yDomain = d3.keys(demoData.us);
     
    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain(xDomain);

    this.yScale = d3.scaleBand()
      .range([this.height, 0])
      .domain(yDomain)
      .padding(0.1);
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
//    const us = demoData.filter( each => each.geography == "us");
    const us = demoData.us;
    
    console.log(us);
    
    const usArray = [];

    Object.keys(us).forEach( each => {
      const obj = {
        key: each,
        value: us[each]
      }
      usArray.push(obj); 
    });

    console.log(usArray);
    
    const group = this.plot.append("g")
      .attr("class", "demoBars");

    group.selectAll("rect")
      .data(usArray)
      .enter()
      .append('rect')
      .attr("class", "usBar")
      .attr('height', 20)
      .attr('x', 0)
      .attr('y', function(d, i) { 
        return that.yScale(d.key); 
      })
      .attr('width', function(d, i){ 
        return that.xScale(d.value) 
      })
      .style('fill', 'black');
  },
  drawAxes(){
    this.yAxis = d3.axisLeft()
      .scale(this.yScale);

    this.xAxis = d3.axisBottom()
      .scale(this.xScale);
    
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


export { demoChart };
