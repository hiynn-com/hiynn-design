"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/zh-cn");

_moment.default.locale("zh-cn");

var MonthPicker = _datePicker.default.MonthPicker,
    RangePicker = _datePicker.default.RangePicker,
    WeekPicker = _datePicker.default.WeekPicker;

var HdDatePicker = function (_Component) {
  (0, _inheritsLoose2.default)(HdDatePicker, _Component);

  function HdDatePicker(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onChange = function (value, strValue) {
      if (strValue.length == 2) {
        _this.props.onChange([{
          name: "startDate",
          value: strValue[0]
        }, {
          name: "endDate",
          value: strValue[1]
        }]);
      } else {
        _this.props.onChange({
          name: "date",
          value: strValue
        });
      }
    };

    _this.state = {};
    return _this;
  }

  var _proto = HdDatePicker.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange,
        size = _this$props.size,
        showTime = _this$props.showTime,
        format = _this$props.format,
        placeholder = _this$props.placeholder,
        onOk = _this$props.onOk,
        defaultValue = _this$props.defaultValue,
        label = _this$props.label,
        width = _this$props.width;
    return _react.default.createElement("div", {
      className: "datePicker"
    }, label ? _react.default.createElement("span", {
      className: "datePicker-title"
    }, label, " \uFF1A ") : "", defaultValue && type == "range" ? _react.default.createElement(RangePicker, {
      defaultValue: defaultValue,
      size: size,
      style: {
        width: width
      },
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "range" ? _react.default.createElement(RangePicker, {
      size: size,
      onChange: this.onChange,
      style: {
        width: width
      },
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : "", defaultValue && type == "month" ? _react.default.createElement(MonthPicker, {
      defaultValue: defaultValue,
      style: {
        width: width
      },
      size: size,
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "month" ? _react.default.createElement(MonthPicker, {
      size: size,
      style: {
        width: width
      },
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : "", defaultValue && type == "date" ? _react.default.createElement(_datePicker.default, {
      defaultValue: defaultValue,
      style: {
        width: width
      },
      size: size,
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "date" ? _react.default.createElement(_datePicker.default, {
      size: size,
      style: {
        width: width
      },
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : "");
  };

  return HdDatePicker;
}(_react.Component);

var _default = HdDatePicker;
exports.default = _default;
//# sourceMappingURL=index.js.map