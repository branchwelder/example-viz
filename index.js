import * as d3 from "d3";

function plotSandwiches(data) {
  // Add <svg> element (drawing space)
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);

  // Add a rectangle for each data point
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", "blue")
    .attr("width", 25)
    // Make the height of the rect depend on the price of the data entry
    .attr("height", (d) => d.price * 50)
    .attr("y", 0)
    .attr("x", (d, index) => index * 60);
}

// Load the data
d3.csv("data/sandwiches.csv")
  .then((data) => {
    console.log(data);
    plotSandwiches(data);
  })
  .catch((error) => {
    console.error("Error loading the data");
  });
