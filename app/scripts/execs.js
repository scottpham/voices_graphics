import * as d3 from "d3";

const Vue = require("./vue.js");

window.Vue = Vue;
const nytData = require("../assets/nyt.json");
const wapoData = require("../assets/wapo.json");
const chicagoData = require("../assets/chicago.json");
const latData = require("../assets/lat.json");

const allData = [nytData, wapoData, chicagoData, latData];

allData.forEach( function(each){
   each.sort(function(a,b){
    return d3.ascending(a.name, b.name);
  });
});

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

const chicago = new BaseForm({
  el: "#chicago",
  data: {
    people: chicagoData
  }
});

const lat = new BaseForm({
  el: "#lat",
  data: {
    people: latData
  }
});

window.nyt = nyt;

export { nyt };
