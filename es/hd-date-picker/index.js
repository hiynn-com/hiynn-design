import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/date-picker/style";
import _DatePicker from "antd/lib/date-picker";
import React, { Component } from "react";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
var MonthPicker = _DatePicker.MonthPicker,
    RangePicker = _DatePicker.RangePicker,
    WeekPicker = _DatePicker.WeekPicker;

var HdDatePicker = function (_Component) {
  _inheritsLoose(HdDatePicker, _Component);

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
    return React.createElement("div", {
      className: "datePicker"
    }, label ? React.createElement("span", {
      className: "datePicker-title"
    }, label, " \uFF1A ") : "", defaultValue && type == "range" ? React.createElement(RangePicker, {
      defaultValue: defaultValue,
      size: size,
      style: {
        width: width
      },
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "range" ? React.createElement(RangePicker, {
      size: size,
      onChange: this.onChange,
      style: {
        width: width
      },
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : "", defaultValue && type == "month" ? React.createElement(MonthPicker, {
      defaultValue: defaultValue,
      style: {
        width: width
      },
      size: size,
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "month" ? React.createElement(MonthPicker, {
      size: size,
      style: {
        width: width
      },
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : "", defaultValue && type == "date" ? React.createElement(_DatePicker, {
      defaultValue: defaultValue,
      style: {
        width: width
      },
      size: size,
      onChange: this.onChange,
      showTime: showTime,
      format: format,
      onOk: onOk
    }) : type == "date" ? React.createElement(_DatePicker, {
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
}(Component);

export default HdDatePicker;
//# sourceMappingURL=index.js.map