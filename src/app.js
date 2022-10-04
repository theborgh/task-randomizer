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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const { options } = this.props;

    return (
      <div>
        <p>Here are your options:</p>
        {options.map((option) => (
          <Option text={option} />
        ))}
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
  render() {
    return <p>Add another option</p>;
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
