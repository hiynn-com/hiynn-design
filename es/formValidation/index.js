import "antd/lib/button/style";
import _Button from "antd/lib/button";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import "antd/lib/form/style";
import _Form from "antd/lib/form";
import "antd/lib/input/style";
import _Input from "antd/lib/input";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/select/style";
import _Select from "antd/lib/select";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from "react";
var Option = _Select.Option;

var HdFormValidation = function (_Component) {
  _inheritsLoose(HdFormValidation, _Component);

  function HdFormValidation(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this.props.Hdsubmit(values);
        }
      });
    };

    _this.state = {};
    return _this;
  }

  var _proto = HdFormValidation.prototype;

  _proto.render = function render() {
    var getFieldDecorator = this.props.form.getFieldDecorator;
    var _this$props = this.props,
        Hdbtn = _this$props.Hdbtn,
        Hdchange = _this$props.Hdchange,
        Hddata = _this$props.Hddata,
        Hdsubmit = _this$props.Hdsubmit,
        layout = _this$props.layout,
        data = _this$props.data;
    return React.createElement("div", null, React.createElement(_Form, {
      layout: layout,
      onSubmit: this.handleSubmit
    }, Hddata.map(function (item, index) {
      return React.createElement(_Form.Item, {
        key: index,
        label: item.label,
        labelCol: {
          span: item.labelCol
        },
        wrapperCol: {
          span: item.wrapperCol
        }
      }, getFieldDecorator("" + item.key, {
        rules: [{
          required: item.required,
          message: "" + item.placeholder
        }, {
          pattern: item.reg,
          message: item.message
        }]
      })(item.type == "password" ? React.createElement(_Input.Password, {
        type: "" + item.type,
        placeholder: item.placeholder
      }) : item.type == "select" ? React.createElement(_Select, {
        placeholder: "\u8BF7\u9009\u62E9"
      }, item.selectData.map(function (selItem, index) {
        return React.createElement(Option, {
          key: index,
          value: selItem.value
        }, selItem.text);
      })) : React.createElement(_Input, {
        type: "" + item.type,
        placeholder: item.placeholder
      })));
    }), Hdbtn ? React.createElement(_Button, {
      style: _objectSpread({}, Hdbtn.style),
      block: Hdbtn.block,
      type: Hdbtn.type,
      htmlType: "submit"
    }, Hdbtn.text) : ""));
  };

  return HdFormValidation;
}(Component);

HdFormValidation = _Form.create({
  name: "",
  onValuesChange: function onValuesChange(props, changedValues, allValues) {
    props.Hdchange(allValues);
  }
})(HdFormValidation);
export default HdFormValidation;
//# sourceMappingURL=index.js.map