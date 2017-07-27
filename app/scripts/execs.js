import * as d3 from "d3";

const Vue = require("./vue.js");

window.Vue = Vue;
const nytData = require("../assets/nyt.json");

nytData.sort(function(a,b){
  return d3.ascending(a.ethnicity, b.ethnicity);
});

console.log(nytData);

const nyt = new Vue({
  el: '#nyt',
  data: {
    people: nytData
  },
  methods: {
    isPoc: function(person){
      if (person.ethnicity != "white"){
        return true;
      }
    },
    notConfirmed: function(person){
      if (person.confirmed == "no"){
        return true;
      }else {
        return false;
      }
    }
  }
});

window.nyt = nyt;

export { nyt };
