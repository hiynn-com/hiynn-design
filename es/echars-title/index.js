import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var EcharsTitle = function (_Component) {
  _inheritsLoose(EcharsTitle, _Component);

  function EcharsTitle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EcharsTitle.prototype;

  _proto.render = function render() {
    var props = this.props;
    return React.createElement("div", {
      className: "chartTitle_wrap"
    }, React.createElement("div", {
      className: "chartTitle"
    }, React.createElement("div", {
      className: "title",
      style: props.titleStyle
    }, props.titleContent)));
  };

  return EcharsTitle;
}(Component);

export default EcharsTitle;
//# sourceMappingURL=index.js.map