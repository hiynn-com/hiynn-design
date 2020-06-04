import "antd/lib/modal/style";
import _Modal from "antd/lib/modal";
import "antd/lib/page-header/style";
import _PageHeader from "antd/lib/page-header";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/layout/style";
import _Layout from "antd/lib/layout";
import React, { Component } from "react";
import { If, Then } from "react-if";
var Header = _Layout.Header,
    Footer = _Layout.Footer,
    Sider = _Layout.Sider,
    Content = _Layout.Content;

var HdAdmin = function (_Component) {
  _inheritsLoose(HdAdmin, _Component);

  function HdAdmin(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      backIcon: false,
      visible: true
    };
    return _this;
  }

  var _proto = HdAdmin.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.backIcon) {
      this.setState({
        backIcon: nextProps.backIcon
      });
    }
  };

  _proto.render = function render() {
    var route = this.props.route;
    console.log("route --- --- ", this.props);
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        title = _this$props.title,
        subTitle = _this$props.subTitle,
        side = _this$props.side,
        search = _this$props.search,
        topRight = _this$props.topRight,
        topFooter = _this$props.topFooter,
        _onBack = _this$props.onBack,
        modal = _this$props.modal,
        visible = _this$props.visible,
        handleOk = _this$props.handleOk,
        handleCancel = _this$props.handleCancel;
    return React.createElement("div", {
      className: "" + (className ? className + " master-page-container" : "master-page-container")
    }, React.createElement(_Layout, {
      className: "mp-layout"
    }, React.createElement(If, {
      condition: title !== null && typeof title !== "undefined" && (side === null || typeof side === "undefined")
    }, React.createElement(Then, null, React.createElement("div", {
      className: "holder-top"
    }, React.createElement(_PageHeader, {
      backIcon: _onBack ? React.createElement(_Icon, {
        type: "arrow-left"
      }) : false,
      onBack: function onBack() {
        return _onBack();
      },
      title: title,
      subTitle: subTitle,
      extra: topRight,
      footer: topFooter
    })))), React.createElement(_Layout, {
      className: "mpl-layout"
    }, React.createElement(If, {
      condition: side !== null && typeof side !== "undefined"
    }, React.createElement(Then, null, React.createElement(Sider, {
      className: "mp-side",
      theme: "light",
      width: "280"
    }, React.createElement(_PageHeader, {
      className: "mp-ph",
      title: title,
      subTitle: subTitle
    }), React.createElement("div", {
      className: "mp-side-content"
    }, side)))), React.createElement(Content, null, React.createElement(If, {
      condition: search !== null && typeof search !== "undefined"
    }, React.createElement(Then, null, React.createElement("div", {
      className: "holder-search"
    }, search))), React.createElement("div", {
      className: [side !== null && typeof side !== "undefined" ? "holder-content-side" : "holder-content"]
    }, children)))), React.createElement(If, {
      condition: modal !== null && typeof modal !== "undefined"
    }, React.createElement(Then, null, React.createElement(_Modal, {
      title: modal.title,
      visible: modal.visible,
      onOk: modal.handleOk,
      onCancel: modal.handleCancel
    }, modal.content))));
  };

  return HdAdmin;
}(Component);

export default HdAdmin;
//# sourceMappingURL=index.js.map