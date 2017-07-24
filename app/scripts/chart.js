import * as d3 from "d3";
const workforceData = require("../assets/workforce.json");

// fix the data
workforceData.forEach( function(each){
  each.percent_minority_workforce = +each.percent_minority_workforce;
  each.percent_minority_us = +each.percent_minority_us;
  each.year = +each.year;
});

window.workforceData = workforceData;

const Chart = {
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
    left: 25,
    right: 25,
    top: 10,
    bottom: 10
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
    
    const xExtent = d3.extent(workforceData, d => d.year);
    const yExtent = [0, 40];

    this.xScale = d3.scaleTime()
      .range([0, this.width])
      .domain(xExtent);

    this.yScale = d3.scaleLinear()
      .range([this.height, 0])
      .domain(yExtent);
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

    this.line = d3.line()
      .x( function(d) { return that.xScale(d.year) })
      .y( function(d) { return that.yScale(d.percent_minority_workforce) } );

    this.plot.append('path')
      .datum(workforceData)
      .style("fill", "none")
      .style("stroke-linecap", "round")
      .attr("class", "percent_workforce")
      .attr("d", this.line);
  },
  message: "What it is",
  draw(){
    this.parameters();
    this.createScales();
    this.drawPlot();
    this.drawData();
  }
}


export { Chart };
