import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  Icon,
  Select,
  Upload,
  DatePicker,
  TimePicker,
  InputNumber,
  message,
  Checkbox,
  Radio
} from "antd";
import moment from "moment";
import locale from 'antd/lib/date-picker/locale/zh_CN';
const FormItem = Form.Item;
const Option = Select.Option;
const Dragger = Upload.Dragger;
// 单独上传文件

const horizontalLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 5 } },
  wrapperCol: { xs: { span: 22 }, sm: { span: 18 } }
};
const FormModel = Form.create()(
  class extends Component {
    normFile = e => {
      if (Array.isArray(e)) {
        return e;
      }
      let latestFile = e && e.fileList.slice(-1);
      latestFile = latestFile.map(file => {
        if (file.response) {
          file.timeStampFileName = file.response.result.timeStampFileName;
          file.originFileName = file.response.result.originFileName;
        }
        return file;
      });
      return latestFile;
    };
    renderDOM = (record, item) => {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      let domEl = null;
      let isInitial = true;
      switch (item.type) {
        case "input":
          domEl = (
            <Input
              placeholder={item.disabled ? null : `请输入${item.label}`}
              disabled={item.disabled}
              onBlur={item.onBlur}
              type={item.type}
              style={{"width":item.width}}
            />
          );
          break;
          case "checkbox":
            domEl = (
                <Checkbox.Group
                    options={item.children}
                    disabled={item.disabled}
                    onChange = {this[`${item.key}Change`]}/>
                );
            break;
            case "radio":
            domEl =<Radio.Group onChange = {this[`${item.key}Change`]}   disabled={item.disabled}>
                    {item.children.map((opt,index)=>(
                    <Radio key = {index} value = {opt.value} >
                        {opt.label}
                    </Radio>
                ))} 
            </Radio.Group>
            break;
        case "select":
          domEl = (
            <Select
              mode={item.mode}
              placeholder={item.disabled ? null : `请选择${item.label}`}
              disabled={item.disabled}
              onChange = {this[`${item.key}Change`]}
              style={{"width":item.width}}
            >
              {item.children.map((opt, index) => (
                <Option key={index} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          );
          break;
        case "textarea":
          domEl = (
            <Input.TextArea
              rows={item.rows}
              placeholder={item.disabled ? null : `请输入${item.label}`}
              disabled={item.disabled}
            />
          );
          break;
        case "datePicker":
          domEl = (
            <DatePicker
              showTime
              format={item.format}
              style={{"width":item.width}}
              disabled={item.disabled}
              placeholder={item.disabled ? null : `请输入${item.label}`}
            />
          );
          break;
        case "timePicker":
          domEl = <TimePicker style={{"width":item.width}} format={item.format}  placeholder={item.disabled ? null : `${item.label}`}/>;
          break;
        case "rangePickerTime":
          domEl = <DatePicker.RangePicker  onChange = {this[`${item.key}Change`]} locale={locale} showTime={{ format: item.format }}
            format={item.format}  style={{"width":item.width}} placeholder={item.disabled ? []: item.placeholder} disabled={item.disabled} />;
            break;
        case "inputNumber":
          domEl = (
            <InputNumber
            placeholder={item.disabled ? null : `请输入${item.label}`}
            disabled={item.disabled}
            style={{"width":item.width}}
          />
          );
          break;
        case "inputFile":
                domEl = (
                  <input
                    onChange={item.onChange}
                    placeholder={item.disabled ? null : `上传`}
                    disabled={item.disabled}
                    type="file"
                  />
                );
                break;
        case "upload":
          domEl = <div className="no-height" />;
            domEl = (
              <Dragger name="files" {...item.uploadProps}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">选择或拖动文件到这里进行上传</p>
                <p className="ant-upload-hint">
                  {item.tips}
                </p>
              </Dragger>
            );
          break;
        default:
          break;
      }
      let initialValue =
        item.type === "upload"
          ? {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            }
          : isInitial
          ? {
              initialValue: record
                ? item.type === "datePicker" || item.type === "timePicker"
                  ? moment(record[item.key], item.format)
                  : record[item.key]
                : item.initialValue
                ? item.initialValue
                : item.type === "select"
                ? item.children.length
                  ? item.children[0].value
                  : ""
                : ""
            }
          : {};
      let rules ={rules:item.rules}
      let assign = Object.assign(rules,initialValue)
      return getFieldDecorator(item.key, assign)(domEl);
    };
    getLayout(layoutFlag,layoutText) {
      let layout;
      if (layoutFlag === "horizontal") {
        layoutText&&Object.keys(layoutText).length>0?layout = layoutText:layout = horizontalLayout
      } else if (layoutFlag === "vertical") {
        layout = null;
      }
      return { ...layout };
    }
    render() {
      const { visible, onCancel, onCreate, record, isEdit,title,destroyOnClose,width,okText,cancelText,formConfig} = this.props;
      return (
        <Modal
          visible={visible}
          title={title}
          okText={okText}
          cancelText={cancelText}
          width={width}
          maskClosable={false}
          onCancel={onCancel}
          onOk={onCreate}
          destroyOnClose = {destroyOnClose}
        >
          <Form layout={formConfig.layout}  {...this.getLayout(formConfig.layout,formConfig.formLayout)} >
            {formConfig.forms
              .map((item, index) => {
                return (
                    <FormItem
                      key={index}
                      {...item.layout}
                      label={item.label?item.label+"：":""}
                    >
                      {this.renderDOM(record, item)}
                    </FormItem>
                  )
              })}
          </Form>
        </Modal>
      );
    }
  }
);

export default FormModel;
