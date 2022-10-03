"use strict";

console.log("==== APP is running ====");

var app = {
  title: "Task Randomizer",
  subtitle: "Put your life in the hands of chance",
  options: ["Wash car", "clean room"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options:" : "No options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.forEach(function (option) {
        console.log(option);
        React.createElement(
          "li",
          null,
          option
        );
      })
    )
  )
);

var root = document.getElementById("app");

ReactDOM.render(template, root);
