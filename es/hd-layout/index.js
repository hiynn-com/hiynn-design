import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import { Button } from "antd";

var HdLayout =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdLayout, _Component);

  function HdLayout() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HdLayout.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "demo-container"
    }, React.createElement("div", {
      className: "demo-wrapper"
    }, "this is my demo wrapper"), React.createElement(Button, {
      type: "primary"
    }, "this is demo component"));
  };

  return HdLayout;
}(Component);

export default HdLayout;
//# sourceMappingURL=index.js.map