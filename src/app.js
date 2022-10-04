class TaskRandomizerApp extends React.Component {
  render() {
    const options = ["Wash car", "Clean room", "Feed hamster"];

    return (
      <div>
        <Header
          title="Task Randomizer"
          subtitle="Put your life in the hands of chance"
        />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    alert(this.props.options);
  }

  render() {
    const { options } = this.props;

    return (
      <div>
        <p>Here are your options:</p>
        {options.map((option) => (
          <Option text={option} key={option} />
        ))}
        <button onClick={this.handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { text } = this.props;
    return <p>{text}</p>;
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    const text = e.target.elements.option.value.trim();

    e.preventDefault();
    if (text) alert(text);
  }

  render() {
    return (
      <div>
        <p>Add another option</p>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(<TaskRandomizerApp />, document.getElementById("app"));
