import { Chart } from "./chart.js";
import { demoChart } from "./demo.js";
import { wapoChart } from "./wapo.js";

window.Chart = Chart;
window.demoChart = demoChart;

const app = {
  makeNYTChart(){
    const myChart = wapoChart.create({
      el: '#graphic3',
      paper: 'nyt',
      msa: 'new_york_msa',
      colorRange: ["#AA5C09", "#F38C21"],
    });

    myChart.draw();
    window.nytChart = myChart;
  },
  makeWapoChart(){
    const myChart = wapoChart.create({
      el: "#graphic4"
    });

     myChart.draw();

     window.wapoChart = myChart;
  },
  makeDemoChart(){
    const myChart = demoChart.create({
      el: "#graphic2"
    });

    myChart.draw();
    window.chart2 = myChart;
  },
  makeMinorityChart(){
   const myChart = Chart.create({
     el: "#graphic1"
   });
   myChart.draw();
   window.chart1 = myChart;
  },
  init(){
    this.makeMinorityChart();
    this.makeDemoChart();
    this.makeWapoChart();
    this.makeNYTChart();
  }
}


app.init()
