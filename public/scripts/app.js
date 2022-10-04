"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskRandomizerApp = function (_React$Component) {
  _inherits(TaskRandomizerApp, _React$Component);

  function TaskRandomizerApp(props) {
    _classCallCheck(this, TaskRandomizerApp);

    var _this = _possibleConstructorReturn(this, (TaskRandomizerApp.__proto__ || Object.getPrototypeOf(TaskRandomizerApp)).call(this, props));

    _this.state = {
      options: ["Wash car", "Clean room", "Feed hamster"]
    };

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    return _this;
  }

  _createClass(TaskRandomizerApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      console.log("delete option " + option);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (el) {
            return el !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var options = this.state.options;


      alert(options[Math.floor(Math.random() * options.length)]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter a valid value";
      }

      if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, {
          title: "Task Randomizer",
          subtitle: "Put your life in the hands of chance"
        }),
        React.createElement(Action, {
          hasOptions: !!this.state.options.length,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return TaskRandomizerApp;
}(React.Component);

var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle;


  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      title
    ),
    subtitle && React.createElement(
      "h2",
      null,
      subtitle
    )
  );
};

Header.defaultProps = {
  title: "Default title"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  var options = props.options;


  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Here are your options:"
    ),
    options.map(function (option) {
      return React.createElement(Option, {
        text: option,
        key: option,
        handleDeleteOption: props.handleDeleteOption
      });
    }),
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove all"
    )
  );
};

var Option = function Option(props) {
  var text = props.text,
      handleDeleteOption = props.handleDeleteOption;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      text
    ),
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          return handleDeleteOption(text);
        } },
      "X"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      errorMessage: ""
    };

    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      var text = e.target.elements.option.value.trim();
      var error = "";

      e.preventDefault();
      error = this.props.handleAddOption(text);
      e.target.elements.option.value = "";

      this.setState(function () {
        return { errorMessage: error };
      });
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
          ),
          this.state.errorMessage && React.createElement(
            "p",
            null,
            this.state.errorMessage
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
