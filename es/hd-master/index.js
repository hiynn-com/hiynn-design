import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import cls from "classnames";

var HdMaster =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdMaster, _Component);

  function HdMaster() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HdMaster.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "demo-container"
    }, React.createElement(Button, {
      type: "primary"
    }, "this is master component"));
  };

  return HdMaster;
}(Component);

export default HdMaster;
//# sourceMappingURL=index.js.map