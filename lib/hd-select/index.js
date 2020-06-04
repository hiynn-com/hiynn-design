"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var Option = _select.default.Option;

var HdSelect = function (_Component) {
  (0, _inheritsLoose2.default)(HdSelect, _Component);

  function HdSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onChange = function (value) {
      _this.props.onChange({
        name: "value",
        value: value
      });
    };

    _this.state = {
      data: _this.props.data
    };
    return _this;
  }

  var _proto = HdSelect.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;

    console.log(this.props.url);

    if (this.props.url) {
      _axios.default.get(this.props.url).then(function (response) {
        _this2.setState({
          data: response.data.data.options
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (nextProps.url) {
      _axios.default.get(nextProps.url).then(function (response) {
        _this3.setState({
          data: response.data.data.options
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      if (nextProps.data) {
        this.setState({
          data: nextProps.data
        });
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        size = _this$props.size,
        loading = _this$props.loading,
        onChange = _this$props.onChange,
        style = _this$props.style,
        mode = _this$props.mode,
        defaultValue = _this$props.defaultValue,
        placeholder = _this$props.placeholder,
        label = _this$props.label,
        data = _this$props.data,
        url = _this$props.url,
        width = _this$props.width;
    return _react.default.createElement("div", {
      className: "select"
    }, label ? _react.default.createElement("span", {
      className: "select-label"
    }, label, " :") : "", _react.default.createElement(_select.default, {
      placeholder: placeholder,
      defaultValue: defaultValue,
      mode: mode,
      size: size,
      loading: loading,
      onChange: this.onChange,
      style: {
        width: width,
        minWidth: 120
      }
    }, this.state.data ? this.state.data.map(function (item, index) {
      return _react.default.createElement(Option, {
        key: index,
        value: item.value
      }, item.name);
    }) : ""));
  };

  return HdSelect;
}(_react.Component);

var _default = HdSelect;
exports.default = _default;
//# sourceMappingURL=index.js.map