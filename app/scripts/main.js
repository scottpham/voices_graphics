import { Chart } from "./chart.js";
import { demoChart } from "./demo.js";
import { wapoChart } from "./wapo.js";

window.Chart = Chart;
window.demoChart = demoChart;

const app = {
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
  }
}


app.init()
