import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message, Select, DatePicker } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class HdDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (value, strValue) => {
    // console.log("4564564", value, strValue);
    if (strValue.length == 2) {
      this.props.onChange([
        {
          name: "startDate",
          value: strValue[0]
        },
        {
          name: "endDate",
          value: strValue[1]
        }
      ]);
    } else {
      this.props.onChange({
        name: "date",
        value: strValue
      });
    }
  };

  render() {
    const { type, onChange, size, showTime, format, placeholder, onOk, defaultValue, label, width } = this.props;
    return (
      <div className="datePicker">
        {label ? <span className="datePicker-title">{label} ： </span> : ""}
        {defaultValue && type == "range" ? (
          <RangePicker defaultValue={defaultValue} size={size} style={{ width: width }} onChange={this.onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "range" ? (
          <RangePicker size={size} onChange={this.onChange} style={{ width: width }} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}
        {defaultValue && type == "month" ? (
          <MonthPicker defaultValue={defaultValue} style={{ width: width }} size={size} onChange={this.onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "month" ? (
          <MonthPicker size={size} style={{ width: width }} onChange={this.onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}

        {/* DatePicker  */}
        {defaultValue && type == "date" ? (
          <DatePicker defaultValue={defaultValue} style={{ width: width }} size={size} onChange={this.onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : type == "date" ? (
          <DatePicker size={size} style={{ width: width }} onChange={this.onChange} showTime={showTime} format={format} onOk={onOk} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default HdDatePicker;
