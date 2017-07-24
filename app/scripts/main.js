import { Chart } from "./chart.js";
console.log(Chart);


const app = {

  init(){
    const myChart = Chart.create({ message: "I created you" })
    myChart.draw();
  }
}


app.init()
