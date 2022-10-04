// console.log("+++ APP IS RUNNING +++");

const root = document.getElementById("app");
// let visible = "hidden";

// const onShowDetailsClick = () => {
//   visible = visible === "hidden" ? "visible" : "hidden";
//   console.log(visible);
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility toggle</h1>
//       <button onClick={onShowDetailsClick}>Toggle details</button>
//       <div style={{ visibility: visible }}>Some details here</div>
//     </div>
//   );

//   ReactDOM.render(template, root);
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.onShowDetailsClick = this.onShowDetailsClick.bind(this);
  }

  onShowDetailsClick() {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.onShowDetailsClick}>Toggle details</button>
        {visible && <div>Some details here</div>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, root);
