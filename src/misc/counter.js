"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskRandomizerApp = function (_React$Component) {
  _inherits(TaskRandomizerApp, _React$Component);

  function TaskRandomizerApp() {
    _classCallCheck(this, TaskRandomizerApp);

    return _possibleConstructorReturn(this, (TaskRandomizerApp.__proto__ || Object.getPrototypeOf(TaskRandomizerApp)).apply(this, arguments));
  }

  _createClass(TaskRandomizerApp, [{
    key: "render",
    value: function render() {
      var options = ["Wash car", "Clean room", "Feed hamster"];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, {
          title: "Task Randomizer",
          subtitle: "Put your life in the hands of chance"
        }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return TaskRandomizerApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle;


      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          title
        ),
        React.createElement(
          "h2",
          null,
          subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      alert("handlePick");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
    return _this4;
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      alert(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options;


      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Here are your options:"
        ),
        options.map(function (option) {
          return React.createElement(Option, { text: option, key: option });
        }),
        React.createElement(
          "button",
          { onClick: this.handleRemoveAll },
          "Remove all"
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var text = this.props.text;

      return React.createElement(
        "p",
        null,
        text
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      var text = e.target.elements.option.value.trim();

      e.preventDefault();
      if (text) alert(text);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Add another option"
        ),
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            { type: "submit" },
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var jsx = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Title"
  ),
  React.createElement(Header, null),
  React.createElement(Action, null),
  React.createElement(Options, null),
  React.createElement(AddOption, null)
);

ReactDOM.render(React.createElement(TaskRandomizerApp, null), document.getElementById("app"));
