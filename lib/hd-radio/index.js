"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/radio/style");

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var returnName = 'title';

var HdRadio = function (_React$Component) {
  (0, _inheritsLoose2.default)(HdRadio, _React$Component);

  function HdRadio(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.fetchOptions = function (url) {
      _axios.default.get(url).then(function (res) {
        if (res.data.code != 200) return;

        _this.setState({
          options: res.data.data.options,
          value: (res.data.data.options.find(function (item) {
            return item.checked;
          }) || {}).value
        }, function () {
          _this.props.onChange && _this.props.onChange({
            name: returnName,
            value: _this.state.value
          });
        });
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.onChange = function (ev) {
      _this.setState({
        value: ev.target.value
      }, function () {
        _this.props.onChange && _this.props.onChange({
          name: returnName,
          value: _this.state.value
        });
      });
    };

    _this.state = function () {
      var options = _this.props.options || [];
      var value = (options.find(function (item) {
        return item.checked;
      }) || {}).value;
      return {
        options: options,
        value: value
      };
    }();

    return _this;
  }

  var _proto = HdRadio.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (this.props.url) {
      this.fetchOptions(this.props.url);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchOptions(nextProps.url);
    } else if (this.props.options !== nextProps.options) {
      var options = nextProps.options || [];
      var value = (options.find(function (item) {
        return item.checked;
      }) || {}).value;
      this.setState({
        options: options,
        value: value
      });
    }
  };

  _proto.render = function render() {
    var onChange = this.onChange;
    var _this$props = this.props,
        disabled = _this$props.disabled,
        name = _this$props.name,
        buttonStyle = _this$props.buttonStyle;
    var _this$state = this.state,
        options = _this$state.options,
        value = _this$state.value;
    if (!options.length) return null;
    return _react.default.createElement(_radio.default.Group, (0, _extends2.default)({
      className: "hd-radio-group",
      style: _objectSpread(_objectSpread({}, this.props.style), {}, {
        width: this.props.width,
        height: this.props.height
      })
    }, {
      onChange: onChange,
      disabled: disabled,
      name: name,
      buttonStyle: buttonStyle,
      value: value
    }), options.map(function (item) {
      var value = item.value,
          name = item.name;
      return _react.default.createElement(_radio.default.Button, (0, _extends2.default)({
        key: value
      }, {
        value: value
      }), name);
    }));
  };

  return HdRadio;
}(_react.default.Component);

var _default = HdRadio;
exports.default = _default;
//# sourceMappingURL=index.js.map