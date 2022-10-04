console.log("==== APP is running ====");

const app = {
  title: "Task Randomizer",
  subtitle: "Put your life in the hands of chance",
  options: ["Wash car", "clean room"],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  const option = app.options[index];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>

      <div>
        <p>
          {app.options.length > 0
            ? `You have ${app.options.length} options:`
            : "No options"}
        </p>
        <button disabled={!app.options.length} onClick={onMakeDecision}>
          Make a decision
        </button>
        <ol>
          {app.options.map((option, i) => (
            <li key={i}>{option.toLowerCase()}</li>
          ))}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
          <button onClick={onRemoveAll}>Remove all</button>
        </form>
      </div>
    </div>
  );
  ReactDOM.render(template, root);
};

let count = 0;
const addOne = () => {
  count++;
  render();
};
const subtractOne = () => {
  count--;
  render();
};

const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subtractOne}>-1</button>
  </div>
);

const root = document.getElementById("app");

render();
