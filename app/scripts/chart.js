import * as d3 from "d3";
const workforceData = require("../assets/workforce.json");

const parseDate = d3.timeParse("%Y");

// fix the data
workforceData.forEach( function(each){
  each.percent_minority_workforce = +each.percent_minority_workforce;
  each.percent_minority_us = +each.percent_minority_us;
  each.year = parseDate(each.year);
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
    left: 35,
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
    this.yGrid = d3.axisLeft()
      .scale(this.yScale)
      .tickSize(-this.width)
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


export { Chart };
