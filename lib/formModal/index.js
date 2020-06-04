"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/modal/style");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/lib/icon/style");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

require("antd/lib/time-picker/style");

var _timePicker = _interopRequireDefault(require("antd/lib/time-picker"));

require("antd/lib/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

require("antd/lib/radio/style");

var _radio = _interopRequireDefault(require("antd/lib/radio"));

require("antd/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/lib/checkbox"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

require("antd/lib/upload/style");

var _upload = _interopRequireDefault(require("antd/lib/upload"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _zh_CN = _interopRequireDefault(require("antd/lib/date-picker/locale/zh_CN"));

var _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FormItem = _form.default.Item;
var Option = _select.default.Option;
var Dragger = _upload.default.Dragger;
var props = {
  name: "file",
  multiple: true,
  action: "http://192.168.8.58:8086/dataManagerSystem/file",
  onChange: function onChange(info) {
    var status = info.file.status;

    if (status === "done") {
      _message2.default.success(info.file.name + " \u4E0A\u4F20\u6210\u529F\uFF01");
    } else if (status === "error") {
      _message2.default.error(info.file.name + " \u4E0A\u4F20\u5931\u8D25\uFF01");
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

var FormModel = _form.default.create()((_temp = function (_Component) {
  (0, _inheritsLoose2.default)(_temp, _Component);

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
          domEl = _react.default.createElement(_input.default, {
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
          domEl = _react.default.createElement(_checkbox.default.Group, {
            options: item.children,
            disabled: item.disabled,
            onChange: _this[item.key + "Change"]
          });
          break;

        case "radio":
          domEl = _react.default.createElement(_radio.default.Group, {
            onChange: _this[item.key + "Change"],
            disabled: item.disabled
          }, item.children.map(function (opt, index) {
            return _react.default.createElement(_radio.default, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "select":
          domEl = _react.default.createElement(_select.default, {
            mode: item.mode,
            placeholder: item.disabled ? null : "\u8BF7\u9009\u62E9" + item.label,
            disabled: item.disabled,
            onChange: _this[item.key + "Change"],
            style: {
              "width": item.width
            }
          }, item.children.map(function (opt, index) {
            return _react.default.createElement(Option, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "textarea":
          domEl = _react.default.createElement(_input.default.TextArea, {
            rows: item.rows,
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label,
            disabled: item.disabled
          });
          break;

        case "datePicker":
          domEl = _react.default.createElement(_datePicker.default, {
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
          domEl = _react.default.createElement(_timePicker.default, {
            style: {
              "width": item.width
            },
            format: item.format,
            placeholder: item.disabled ? null : "" + item.label
          });
          break;

        case "rangePickerTime":
          domEl = _react.default.createElement(_datePicker.default.RangePicker, {
            onChange: _this[item.key + "Change"],
            locale: _zh_CN.default,
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
          domEl = _react.default.createElement(_inputNumber.default, {
            placeholder: item.disabled ? null : "\u8BF7\u8F93\u5165" + item.label,
            disabled: item.disabled,
            style: {
              "width": item.width
            }
          });
          break;

        case "inputFile":
          domEl = _react.default.createElement("input", {
            onChange: item.onChange,
            placeholder: item.disabled ? null : "\u4E0A\u4F20",
            disabled: item.disabled,
            type: "file"
          });
          break;

        case "upload":
          domEl = _react.default.createElement("div", {
            className: "no-height"
          });
          domEl = _react.default.createElement(Dragger, (0, _extends2.default)({
            name: "files"
          }, props), _react.default.createElement("p", {
            className: "ant-upload-drag-icon"
          }, _react.default.createElement(_icon.default, {
            type: "inbox"
          })), _react.default.createElement("p", {
            className: "ant-upload-text"
          }, "\u9009\u62E9\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u8FD9\u91CC\u8FDB\u884C\u4E0A\u4F20"), _react.default.createElement("p", {
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
        initialValue: record ? item.type === "datePicker" || item.type === "timePicker" ? (0, _moment.default)(record[item.key], item.format) : record[item.key] : item.initialValue ? item.initialValue : item.type === "select" ? item.children.length ? item.children[0].value : "" : ""
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
    return _react.default.createElement(_modal.default, {
      visible: visible,
      title: title,
      okText: okText,
      cancelText: cancelText,
      width: width,
      maskClosable: false,
      onCancel: onCancel,
      onOk: onCreate,
      destroyOnClose: destroyOnClose
    }, _react.default.createElement(_form.default, (0, _extends2.default)({
      layout: formConfig.layout
    }, this.getLayout(formConfig.layout, formConfig.formLayout)), formConfig.forms.map(function (item, index) {
      return _react.default.createElement(FormItem, (0, _extends2.default)({
        key: index
      }, item.layout, {
        label: item.label ? item.label + "：" : ""
      }), _this2.renderDOM(record, item));
    })));
  };

  return _temp;
}(_react.Component), _temp));

var _default = FormModel;
exports.default = _default;
//# sourceMappingURL=index.js.map