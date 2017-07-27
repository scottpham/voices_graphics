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
      colorRange: ["#D1B815", "#333333", "#B3B3B3"]

    });

    myChart.draw();
    
    window.latChart = myChart;
  },
  makeWSJChart(){
    const myChart = wapoChart.create({
      el: "#graphic6",
      paper: "wsj",
      msa: "new_york_msa",
      colorRange: ["#004D36", "#333333", "#B3B3B3"]
    });  

    myChart.draw();

    window.wsjChart = myChart;
  },
  makeNYTChart(){
    const myChart = wapoChart.create({
      el: '#graphic3',
      paper: 'nyt',
      msa: 'new_york_msa',
      colorRange: ["#7D251C", "#333333", "#B3B3B3"]
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
      colorRange: ["#AA5C09", "#333333", "#B3B3B3"]
    });

     myChart.draw();

     window.wapoChart = myChart;
  },
  makeDemoChart(){
    const myChart = demoChart.create({
      el: "#graphic2",
      color: "#004D80"
    });

    myChart.draw();
    window.chart2 = myChart;
  },
  makeMinorityChart(){
   const myChart = Chart.create({
     el: "#graphic1",
     usColor: "#004D80",
     newsroomColor: "#F38C21"
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
