import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select, DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class HdDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, onChange, size, showTime, format, placeholder, onOk, defaultValue, label } = this.props;
    return (
      <div className="datePicker">
        {label ? <span className="datePicker-title">{label} ： </span> : ""}
        {defaultValue && type == "range" ? (
          <RangePicker defaultValue={defaultValue} locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "range" ? (
          <RangePicker locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}
        {defaultValue && type == "month" ? (
          <MonthPicker defaultValue={defaultValue} locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "month" ? (
          <MonthPicker locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}

        {/* DatePicker  */}
        {defaultValue && type == "date" ? (
          <DatePicker defaultValue={defaultValue} locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "date" ? (
          <DatePicker locale={locale} size={size} onChange={onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default HdDatePicker;
