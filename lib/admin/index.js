"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/page-header/style");

var _pageHeader = _interopRequireDefault(require("antd/lib/page-header"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/layout/style");

var _layout = _interopRequireDefault(require("antd/lib/layout"));

var _react = _interopRequireWildcard(require("react"));

var _reactIf = require("react-if");

var Header = _layout.default.Header,
    Footer = _layout.default.Footer,
    Sider = _layout.default.Sider,
    Content = _layout.default.Content;

var HdAdmin = function (_Component) {
  (0, _inheritsLoose2.default)(HdAdmin, _Component);

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
    return _react.default.createElement("div", {
      className: "" + (className ? className + " master-page-container" : "master-page-container")
    }, _react.default.createElement(_layout.default, {
      className: "mp-layout"
    }, _react.default.createElement(_reactIf.If, {
      condition: title !== null && typeof title !== "undefined" && (side === null || typeof side === "undefined")
    }, _react.default.createElement(_reactIf.Then, null, _react.default.createElement("div", {
      className: "holder-top"
    }, _react.default.createElement(_pageHeader.default, {
      backIcon: _onBack ? _react.default.createElement(_icon.default, {
        type: "arrow-left"
      }) : false,
      onBack: function onBack() {
        return _onBack();
      },
      title: title,
      subTitle: subTitle,
      extra: topRight,
      footer: topFooter
    })))), _react.default.createElement(_layout.default, {
      className: "mpl-layout"
    }, _react.default.createElement(_reactIf.If, {
      condition: side !== null && typeof side !== "undefined"
    }, _react.default.createElement(_reactIf.Then, null, _react.default.createElement(Sider, {
      className: "mp-side",
      theme: "light",
      width: "280"
    }, _react.default.createElement(_pageHeader.default, {
      className: "mp-ph",
      title: title,
      subTitle: subTitle
    }), _react.default.createElement("div", {
      className: "mp-side-content"
    }, side)))), _react.default.createElement(Content, null, _react.default.createElement(_reactIf.If, {
      condition: search !== null && typeof search !== "undefined"
    }, _react.default.createElement(_reactIf.Then, null, _react.default.createElement("div", {
      className: "holder-search"
    }, search))), _react.default.createElement("div", {
      className: [side !== null && typeof side !== "undefined" ? "holder-content-side" : "holder-content"]
    }, children)))), _react.default.createElement(_reactIf.If, {
      condition: modal !== null && typeof modal !== "undefined"
    }, _react.default.createElement(_reactIf.Then, null, _react.default.createElement(_modal.default, {
      title: modal.title,
      visible: modal.visible,
      onOk: modal.handleOk,
      onCancel: modal.handleCancel
    }, modal.content))));
  };

  return HdAdmin;
}(_react.Component);

var _default = HdAdmin;
exports.default = _default;
//# sourceMappingURL=index.js.map