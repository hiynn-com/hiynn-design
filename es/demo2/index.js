import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import { Button } from "antd";

var Demo2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Demo2, _Component);

  function Demo2() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo2.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "demo-container"
    }, React.createElement(Button, {
      type: "primary"
    }, "this is demo2 component"));
  };

  return Demo2;
}(Component);

export default Demo2;
//# sourceMappingURL=index.js.map