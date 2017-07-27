// demographics for the us
import * as d3 from "d3";
import * as _ from 'lodash';
import { wrap } from './wrap.js';

const demoData = require("../assets/newsroom_demo.json");

// recast the data as key, value pairs
const dData = {};

_.keys(demoData).forEach( function(key){
    // get the key
    const obj = demoData[key]; 
    // every key will have an array of key/values
    const result = [];
    
    Object.keys(obj).forEach(function(each){
      if (each === "geography"){
        return;
      } else {
        const res = { key: each, value: obj[each] };
        result.push(res);
      }  
  });

  dData[key] = result;

 });

// use this
const us = dData.us.sort( function(a, b){
  return d3.ascending(+a.value, +b.value);
});

window.us = us;
window.dData = dData;
window.demoData = demoData;
window.d3 = d3;

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
  color: ["#000000"],
  margin: {
    left: 140,
    right: 30,
    top: 10,
    bottom: 35
  },
  el: "#graphic",
  ratio: "0.3", //width-height ratio
  parameters(){
    this.outerWidth = document.querySelector(this.el).clientWidth;
    this.width = this.outerWidth - this.margin.left - this.margin.right;
    this.outerHeight = this.outerWidth * this.ratio;
    this.height = this.outerHeight - this.margin.top - this.margin.bottom;
  },
  createScales(){
    const that = this;
    
    const xDomain = [0, 100];
    
    const yDomain = dData.us.map( each => each.key);

    this.xScale = d3.scaleLinear()
      .range([0, this.width])
      .domain(xDomain);

    this.yScale = d3.scaleBand()
      .range([this.height, 0])
      .round(true)
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
      .data(us)
      .enter()
      .append('rect')
      .attr('height', that.yScale.bandwidth())
      .attr('x', 0)
      .attr("fill", this.color)
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


export { demoChart, dData };
