"use strict";

console.log("==== APP is running ====");

var app = {
  title: "Task Randomizer",
  subtitle: "Put your life in the hands of chance",
  options: ["Wash car", "clean room"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var index = Math.floor(Math.random() * app.options.length);
  var option = app.options[index];
  alert(option);
};

var render = function render() {
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
        app.options.length > 0 ? "You have " + app.options.length + " options:" : "No options"
      ),
      React.createElement(
        "button",
        { disabled: !app.options.length, onClick: onMakeDecision },
        "Make a decision"
      ),
      React.createElement(
        "ol",
        null,
        app.options.map(function (option, i) {
          return React.createElement(
            "li",
            { key: i },
            option.toLowerCase()
          );
        })
      ),
      React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add option"
        ),
        React.createElement(
          "button",
          { onClick: onRemoveAll },
          "Remove all"
        )
      )
    )
  );
  ReactDOM.render(template, root);
};

var count = 0;
var addOne = function addOne() {
  count++;
  render();
};
var subtractOne = function subtractOne() {
  count--;
  render();
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: subtractOne },
    "-1"
  )
);

var root = document.getElementById("app");

render();
