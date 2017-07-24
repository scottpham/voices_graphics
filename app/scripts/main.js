import { Chart } from "./chart.js";
console.log(Chart);
window.Chart = Chart;


const app = {

  init(){
    const myChart = Chart.create({});
    myChart.draw();
    window.myChart = myChart;
  }
}


app.init()
