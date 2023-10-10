import * as d3 from "d3"
import { data } from "./data";

const DATASET = Object.fromEntries(data)
console.log(DATASET)
d3.select('chart_container')
  .append('h1')
                .attr('id', "title")
                  .text(dataObj.name)
                  .style("color", "red")
                  .style("font-family", " Montserrat, sans-serif")

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataObj.data, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);
const xAxis = d3.axisBottom(xScale)
const yAxis = d3.axisLeft(yScale)

const svg = d3.select("svg")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);

svg.append("g")
   .attr("transform", "translate(" + (padding) + ", 0)")
   .call(yAxis);
