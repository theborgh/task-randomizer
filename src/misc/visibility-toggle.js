console.log("+++ APP IS RUNNING +++");

const root = document.getElementById("app");
let visible = "hidden";

const onShowDetailsClick = () => {
  visible = visible === "hidden" ? "visible" : "hidden";
  console.log(visible);
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={onShowDetailsClick}>Toggle details</button>
      <div style={{ visibility: visible }}>Some details here</div>
    </div>
  );

  ReactDOM.render(template, root);
};

render();
