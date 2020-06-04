import "antd/lib/modal/style";
import _Modal from "antd/lib/modal";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import "antd/lib/input-number/style";
import _InputNumber from "antd/lib/input-number";
import "antd/lib/time-picker/style";
import _TimePicker from "antd/lib/time-picker";
import "antd/lib/date-picker/style";
import _DatePicker from "antd/lib/date-picker";
import "antd/lib/radio/style";
import _Radio from "antd/lib/radio";
import "antd/lib/checkbox/style";
import _Checkbox from "antd/lib/checkbox";
import "antd/lib/input/style";
import _Input from "antd/lib/input";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/message/style";
import _message from "antd/lib/message";
import "antd/lib/upload/style";
import _Upload from "antd/lib/upload";
import "antd/lib/select/style";
import _Select from "antd/lib/select";
import "antd/lib/form/style";
import _Form from "antd/lib/form";

var _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from "react";
import moment from "moment";
import locale from 'antd/lib/date-picker/locale/zh_CN';
var FormItem = _Form.Item;
var Option = _Select.Option;
var Dragger = _Upload.Dragger;
var props = {
  name: "file",
  multiple: true,
  action: "http://192.168.8.58:8086/dataManagerSystem/file",
  onChange: function onChange(info) {
    var status = info.file.status;

    if (status === "done") {
      _message.success(info.file.name + " \u4E0A\u4F20\u6210\u529F\uFF01");
    } else if (status === "error") {
      _message.error(info.file.name + " \u4E0A\u4F20\u5931\u8D25\uFF01");
    }
  }
};
var horizontalLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 5
    }
  },
  wrapperCol: {
    xs: {
      span: 22
    },
    sm: {
      span: 18
    }
  }
};

var FormModel = _Form.create()((_temp = function (_Component) {
  _inheritsLoose(_temp, _Component);

  function _temp() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.normFile = function (e) {
      if (Array.isArray(e)) {
        return e;
      }

      var latestFile = e && e.fileList.slice(-1);
      latestFile = latestFile.map(function (file) {
        if (file.response) {
          file.timeStampFileName = file.response.result.timeStampFileName;
          file.originFileName = file.response.result.originFileName;
        }

        return file;
      });
      return latestFile;
    };

    _this.renderDOM = function (record, item) {
      var form = _this.props.form;
      var getFieldDecorator = form.getFieldDecorator;
      var domEl = null;
      var isInitial = true;

      switch (item.type) {
        case "input":
          domEl = React.createElement(_Input, {
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label,
            disabled: item.disabled,
            onBlur: item.onBlur,
            type: item.type,
            style: {
              "width": item.width
            }
          });
          break;

        case "checkbox":
          domEl = React.createElement(_Checkbox.Group, {
            options: item.children,
            disabled: item.disabled,
            onChange: _this[item.key + "Change"]
          });
          break;

        case "radio":
          domEl = React.createElement(_Radio.Group, {
            onChange: _this[item.key + "Change"],
            disabled: item.disabled
          }, item.children.map(function (opt, index) {
            return React.createElement(_Radio, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "select":
          domEl = React.createElement(_Select, {
            mode: item.mode,
            placeholder: item.disabled ? null : "\u8BF7\u9009\u62E9" + item.label,
            disabled: item.disabled,
            onChange: _this[item.key + "Change"],
            style: {
              "width": item.width
            }
          }, item.children.map(function (opt, index) {
            return React.createElement(Option, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "textarea":
          domEl = React.createElement(_Input.TextArea, {
            rows: item.rows,
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label,
            disabled: item.disabled
          });
          break;

        case "datePicker":
          domEl = React.createElement(_DatePicker, {
            showTime: true,
            format: item.format,
            style: {
              "width": item.width
            },
            disabled: item.disabled,
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label
          });
          break;

        case "timePicker":
          domEl = React.createElement(_TimePicker, {
            style: {
              "width": item.width
            },
            format: item.format,
            placeholder: item.disabled ? null : "" + item.label
          });
          break;

        case "rangePickerTime":
          domEl = React.createElement(_DatePicker.RangePicker, {
            onChange: _this[item.key + "Change"],
            locale: locale,
            showTime: {
              format: item.format
            },
            format: item.format,
            style: {
              "width": item.width
            },
            placeholder: item.disabled ? [] : item.placeholder,
            disabled: item.disabled
          });
          break;

        case "inputNumber":
          domEl = React.createElement(_InputNumber, {
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label,
            disabled: item.disabled,
            style: {
              "width": item.width
            }
          });
          break;

        case "inputFile":
          domEl = React.createElement("input", {
            onChange: item.onChange,
            placeholder: item.disabled ? null : "\u4E0A\u4F20",
            disabled: item.disabled,
            type: "file"
          });
          break;

        case "upload":
          domEl = React.createElement("div", {
            className: "no-height"
          });
          domEl = React.createElement(Dragger, _extends({
            name: "files"
          }, props), React.createElement("p", {
            className: "ant-upload-drag-icon"
          }, React.createElement(_Icon, {
            type: "inbox"
          })), React.createElement("p", {
            className: "ant-upload-text"
          }, "\u9009\u62E9\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8FD9\u91CC\u8FDB\u884C\u4E0A\u4F20"), React.createElement("p", {
            className: "ant-upload-hint"
          }, "\u652F\u6301\u591A\u6587\u4EF6\u4E0A\u4F20\uFF0C\u652F\u6301Excel\u3001jpg\u3001png\u7B49\u683C\u5F0F\u7684\u6587\u4EF6"));
          break;

        default:
          break;
      }

      var initialValue = item.type === "upload" ? {
        valuePropName: "fileList",
        getValueFromEvent: _this.normFile
      } : isInitial ? {
        initialValue: record ? item.type === "datePicker" || item.type === "timePicker" ? moment(record[item.key], item.format) : record[item.key] : item.initialValue ? item.initialValue : item.type === "select" ? item.children.length ? item.children[0].value : "" : ""
      } : {};
      var rules = {
        rules: item.rules
      };
      var assign = Object.assign(rules, initialValue);
      return getFieldDecorator(item.key, assign)(domEl);
    };

    return _this;
  }

  var _proto = _temp.prototype;

  _proto.getLayout = function getLayout(layoutFlag, layoutText) {
    var layout;

    if (layoutFlag === "horizontal") {
      layoutText && Object.keys(layoutText).length > 0 ? layout = layoutText : layout = horizontalLayout;
    } else if (layoutFlag === "vertical") {
      layout = null;
    }

    return _objectSpread({}, layout);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        visible = _this$props.visible,
        onCancel = _this$props.onCancel,
        onCreate = _this$props.onCreate,
        record = _this$props.record,
        isEdit = _this$props.isEdit,
        title = _this$props.title,
        destroyOnClose = _this$props.destroyOnClose,
        width = _this$props.width,
        okText = _this$props.okText,
        cancelText = _this$props.cancelText,
        formConfig = _this$props.formConfig;
    return React.createElement(_Modal, {
      visible: visible,
      title: title,
      okText: okText,
      cancelText: cancelText,
      width: width,
      maskClosable: false,
      onCancel: onCancel,
      onOk: onCreate,
      destroyOnClose: destroyOnClose
    }, React.createElement(_Form, _extends({
      layout: formConfig.layout
    }, this.getLayout(formConfig.layout, formConfig.formLayout)), formConfig.forms.map(function (item, index) {
      return React.createElement(FormItem, _extends({
        key: index
      }, item.layout, {
        label: item.label ? item.label + "：" : ""
      }), _this2.renderDOM(record, item));
    })));
  };

  return _temp;
}(Component), _temp));

export default FormModel;
//# sourceMappingURL=index.js.map