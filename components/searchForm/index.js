import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker, Checkbox, Radio } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
const FormItem = Form.Item;

class HdTreeEdit extends Component {
  renderFormDom = item => {
    let domEl = null;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    switch (item.type) {
      case "input":
        domEl = <Input placeholder={`请输入${item.label}`} style={{ width: item.width }} />;
        break;
      case "select":
        domEl = (
          <Select onChange={this[`${item.key}Change`]} placeholder="请选择" optionFilterProp="children" style={{ width: item.width }} showSearch={item.showSearch}>
            {item.children.map((opt, index) => (
              <Select.Option key={index} value={opt.value}>
                {opt.label}
              </Select.Option>
            ))}
          </Select>
        );
        break;
      case "checkbox":
        domEl = <Checkbox.Group options={item.children} onChange={this[`${item.key}Change`]} />;

        break;
      case "radio":
        domEl = (
          <Radio.Group onChange={this[`${item.key}Change`]}>
            {item.children.map((opt, index) => (
              <Radio key={index} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        );
        break;
      case "datePicker":
        domEl = <DatePicker onChange={this[`${item.key}Change`]} locale={locale} style={{ width: item.width }} format={item.format} />;
        break;
      case "rangePickerTime":
        domEl = <DatePicker.RangePicker onChange={this[`${item.key}Change`]} locale={locale} showTime={{ format: item.format }} format={item.format} />;
        break;
      default:
        break;
    }
    let initialValue = item.initialValue ? item.initialValue : "";
    return getFieldDecorator(item.key, { initialValue: initialValue })(domEl);
  };
  /**
   * 渲染搜索栏
   *
   * @returns ReactElement
   * @memberof SearchForm
   */
  render() {
    const { searchFormOption, layout, disabled } = this.props;
    return (
      <div className="hd-searchForm-box">
        <Form layout={layout}>
          {searchFormOption.forms &&
            searchFormOption.forms.map((item, index) => {
              return (
                <FormItem label={item.label} key={item.key}>
                  {this.renderFormDom(item)}
                </FormItem>
              );
            })}
          {searchFormOption.btns &&
            searchFormOption.btns.map((btn, index) => {
              return (
                <FormItem key={index}>
                  <Button className={btn.className} type={btn.type} icon={btn.icon} disabled={btn.disabled} onClick={() => this.props[btn.handleClick](btn.key)}>
                    {btn.label}
                  </Button>
                </FormItem>
              );
            })}
        </Form>
      </div>
    );
  }
}
const SearchForm = Form.create()(HdTreeEdit);
export default SearchForm;
