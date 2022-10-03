console.log("==== APP is running ====");

const app = {
  title: "Task Randomizer",
  subtitle: "Put your life in the hands of chance",
  options: ["Wash car", "clean room"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>

    <div>
      <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
      <ol>
        {app.options.forEach((option) => {
          console.log(option);
          <li>{option}</li>;
        })}
      </ol>
    </div>
  </div>
);

const root = document.getElementById("app");

ReactDOM.render(template, root);
