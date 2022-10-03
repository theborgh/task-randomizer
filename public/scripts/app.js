"use strict";

console.log("==== APP is running ====");

var template = React.createElement(
  "h1",
  null,
  "Task Randomizer"
);
var root = document.getElementById("app");

ReactDOM.render(template, root);
