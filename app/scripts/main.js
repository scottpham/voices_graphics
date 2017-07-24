import { Chart } from "./chart.js";
console.log(Chart);
window.Chart = Chart;
console.log("this message is from main.js");


const app = {

  init(){
    const myChart = Chart.create({});
    myChart.draw();
    window.myChart = myChart;
  }
}


app.init()
