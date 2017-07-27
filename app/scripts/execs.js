import * as d3 from "d3";

const Vue = require("./vue.js");

window.Vue = Vue;
const nytData = require("../assets/nyt.json");
const wapoData = require("../assets/wapo.json");

nytData.sort(function(a,b){
  return d3.ascending(a.ethnicity, b.ethnicity);
});

console.log(nytData);

const BaseForm = Vue.extend({
   methods: {
    isPoc: function(person){
      if ( person.ethnicity.toUpperCase() != "WHITE"){
        return true;
      }
    },
    notConfirmed: function(person){
      if (person.confirmed == "no"){
        return true;
      } else {
        return false;
      }
    }
  }
});

const nyt = new BaseForm({
 el: '#nyt',
  data: {
    people: nytData
  }
});

const wapo = new BaseForm({
  el: "#wapo",
  data: {
    people: wapoData
  }
})

window.nyt = nyt;

export { nyt };
