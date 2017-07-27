import { Chart } from "./chart.js";
import { demoChart } from "./demo.js";
import { wapoChart } from "./wapo.js";
import { nyt } from "./execs.js"; 

window.Chart = Chart;
window.demoChart = demoChart;

const app = {
  makeLATChart(){
    const myChart = wapoChart.create({
      el: "#graphic5",
      paper: 'lat',
      msa: 'la_msa',
      // dark-yellow, dark gray, light gray
      colorRange: ["#7F5E00", "#333333", "#7F7F7F"]
    });

    myChart.draw();
    
    window.latChart = myChart;
  },
  makeWSJChart(){
    const myChart = wapoChart.create({
      el: "#graphic6",
      paper: "wsj",
      msa: "new_york_msa",
      // dark green, dark gray, light gray
      colorRange: ["#627F08", "#333333", "#7F7F7F"]
    });  

    myChart.draw();

    window.wsjChart = myChart;
  },
  makeNYTChart(){
    const myChart = wapoChart.create({
      el: '#graphic3',
      paper: 'nyt',
      msa: 'new_york_msa',
      // purple, dark gray, light gray
      colorRange: ["#35337F", "#333333", "#7F7F7F"]
    });

    myChart.draw();
    window.nytChart = myChart;
  },
  makeWapoChart(){
    const myChart = wapoChart.create({
      el: "#graphic4",
      paper: "wapo",
      msa: 'washington_msa',
      // red, gray, light gray
      colorRange: ["#7F180D", "#333333", "#7F7F7F"]
    });

     myChart.draw();

     window.wapoChart = myChart;
  },
  makeDemoChart(){
    const myChart = demoChart.create({
      el: "#graphic2",
      // dark blue
      color: "#00347F"
    });

    myChart.draw();
    window.chart2 = myChart;
  },
  makeMinorityChart(){
   const myChart = Chart.create({
     el: "#graphic1",
     // dark blue
     usColor: "#00347F",
     // light blue
     newsroomColor: "#005EFF"
   });
   myChart.draw();
   window.chart1 = myChart;
  },
  init(){
    this.makeMinorityChart();
    this.makeDemoChart();
    this.makeWapoChart();
    this.makeNYTChart();
    this.makeLATChart();
    this.makeWSJChart();
  }
}


app.init()
