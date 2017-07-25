import { Chart } from "./chart.js";
import { demoChart } from "./demo.js";
window.Chart = Chart;
window.demoChart = demoChart;

const app = {
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
  }
}


app.init()
