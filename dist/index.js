function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var InputBar = function InputBar() {
  return React__default.createElement("input", {
    type: "file"
  });
};

var DropDown = function DropDown() {
  return React__default.createElement("div", null, "DropDown");
};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", null, React.createElement(InputBar, {
    someprop: "data"
  }), React.createElement(DropDown, {
    someprop: 'wcw'
  }));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
