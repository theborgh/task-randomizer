console.log("==== APP is running ====");

let template = React.createElement(
  "p",
  null,
  "This is JSX from the app.js file"
);
let root = document.getElementById("app");

ReactDOM.render(template, root);
