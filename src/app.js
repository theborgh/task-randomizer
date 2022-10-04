class TaskRandomizerApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["Wash car", "Clean room", "Feed hamster"],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handlePick() {
    const { options } = this.state;

    alert(options[Math.floor(Math.random() * options.length)]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid value";
    }

    if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => {
      return { options: [...prevState.options, option] };
    });
  }

  render() {
    return (
      <div>
        <Header
          title="Task Randomizer"
          subtitle="Put your life in the hands of chance"
        />
        <Action
          hasOptions={!!this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Default title",
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  const { options } = props;

  return (
    <div>
      <p>Here are your options:</p>
      {options.map((option) => (
        <Option text={option} key={option} />
      ))}
      <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
  );
};

const Option = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    const text = e.target.elements.option.value.trim();
    let error = "";

    e.preventDefault();
    error = this.props.handleAddOption(text);
    e.target.elements.option.value = "";

    this.setState(() => {
      return { errorMessage: error };
    });
  }

  render() {
    return (
      <div>
        <p>Add another option</p>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
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
