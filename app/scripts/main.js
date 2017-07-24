import { Chart } from "./chart.js";
console.log(Chart);
console.log("this message is from main.js");


const app = {

  init(){
    const myChart = Chart.create({ message: "I created you" })
    myChart.draw();
  }
}


app.init()
