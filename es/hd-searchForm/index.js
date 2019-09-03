import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/date-picker/style/css";
import _DatePicker from "antd/es/date-picker";
import "antd/es/radio/style/css";
import _Radio from "antd/es/radio";
import "antd/es/checkbox/style/css";
import _Checkbox from "antd/es/checkbox";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import "antd/es/input/style/css";
import _Input from "antd/es/input";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/es/form/style/css";
import _Form from "antd/es/form";
import React, { Component } from 'react';
var FormItem = _Form.Item;
import locale from 'antd/lib/date-picker/locale/zh_CN';
import './style';

var HdTreeEdit =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdTreeEdit, _Component);

  function HdTreeEdit() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.renderFormDom = function (item) {
      var domEl = null;
      var form = _this.props.form;
      var getFieldDecorator = form.getFieldDecorator;

      switch (item.type) {
        case "input":
          domEl = React.createElement(_Input, {
            placeholder: "\u8BF7\u8F93\u5165" + item.label,
            style: {
              width: item.width
            }
          });
          break;

        case "select":
          domEl = React.createElement(_Select, {
            onChange: _this[item.key + "Change"],
            placeholder: "\u8BF7\u9009\u62E9",
            optionFilterProp: "children",
            style: {
              width: item.width
            },
            showSearch: item.showSearch
          }, item.children.map(function (opt, index) {
            return React.createElement(_Select.Option, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "checkbox":
          domEl = React.createElement(_Checkbox.Group, {
            options: item.children,
            onChange: _this[item.key + "Change"]
          });
          break;

        case "radio":
          domEl = React.createElement(_Radio.Group, {
            onChange: _this[item.key + "Change"]
          }, item.children.map(function (opt, index) {
            return React.createElement(_Radio, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "datePicker":
          domEl = React.createElement(_DatePicker, {
            onChange: _this[item.key + "Change"],
            locale: locale,
            style: {
              width: item.width
            },
            format: item.format
          });
          break;

        case "rangePickerTime":
          domEl = React.createElement(_DatePicker.RangePicker, {
            onChange: _this[item.key + "Change"],
            locale: locale,
            showTime: {
              format: item.format
            },
            format: item.format
          });
          break;

        default:
          break;
      }

      var initialValue = item.initialValue ? item.initialValue : "";
      return getFieldDecorator(item.key, {
        initialValue: initialValue
      })(domEl);
    };

    return _this;
  }

  var _proto = HdTreeEdit.prototype;

  /**
   * 渲染搜索栏
   *
   * @returns ReactElement
   * @memberof SearchForm
   */
  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        searchFormOption = _this$props.searchFormOption,
        layout = _this$props.layout,
        disabled = _this$props.disabled;
    return React.createElement("div", {
      className: "hd-searchForm-box"
    }, React.createElement(_Form, {
      layout: layout
    }, searchFormOption.forms && searchFormOption.forms.map(function (item, index) {
      return React.createElement(FormItem, {
        label: item.label,
        key: item.key
      }, _this2.renderFormDom(item));
    }), searchFormOption.btns && searchFormOption.btns.map(function (btn, index) {
      return React.createElement(FormItem, {
        key: index
      }, React.createElement(_Button, {
        className: btn.className,
        type: btn.type,
        icon: btn.icon,
        disabled: btn.disabled,
        onClick: function onClick() {
          return _this2.props[btn.handleClick](btn.key);
        }
      }, btn.label));
    })));
  };

  return HdTreeEdit;
}(Component);

var SearchForm = _Form.create()(HdTreeEdit);

export default SearchForm;
//# sourceMappingURL=index.js.map