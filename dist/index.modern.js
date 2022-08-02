import React__default, { createElement } from 'react';

var InputBar = function InputBar() {
  return React__default.createElement("input", {
    type: "file"
  });
};

var DropDown = function DropDown() {
  return React__default.createElement("div", null, "DropDown");
};

var ExampleComponent = function ExampleComponent() {
  return createElement("div", null, createElement(InputBar, {
    someprop: "data"
  }), createElement(DropDown, {
    someprop: 'wcw'
  }));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
