"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/lib/form/style");

var _form = _interopRequireDefault(require("antd/lib/form"));

require("antd/lib/input/style");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Option = _select.default.Option;

var HdFormValidation = function (_Component) {
  (0, _inheritsLoose2.default)(HdFormValidation, _Component);

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
    return _react.default.createElement("div", null, _react.default.createElement(_form.default, {
      layout: layout,
      onSubmit: this.handleSubmit
    }, Hddata.map(function (item, index) {
      return _react.default.createElement(_form.default.Item, {
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
      })(item.type == "password" ? _react.default.createElement(_input.default.Password, {
        type: "" + item.type,
        placeholder: item.placeholder
      }) : item.type == "select" ? _react.default.createElement(_select.default, {
        placeholder: "\u8BF7\u9009\u62E9"
      }, item.selectData.map(function (selItem, index) {
        return _react.default.createElement(Option, {
          key: index,
          value: selItem.value
        }, selItem.text);
      })) : _react.default.createElement(_input.default, {
        type: "" + item.type,
        placeholder: item.placeholder
      })));
    }), Hdbtn ? _react.default.createElement(_button.default, {
      style: _objectSpread({}, Hdbtn.style),
      block: Hdbtn.block,
      type: Hdbtn.type,
      htmlType: "submit"
    }, Hdbtn.text) : ""));
  };

  return HdFormValidation;
}(_react.Component);

HdFormValidation = _form.default.create({
  name: "",
  onValuesChange: function onValuesChange(props, changedValues, allValues) {
    props.Hdchange(allValues);
  }
})(HdFormValidation);
var _default = HdFormValidation;
exports.default = _default;
//# sourceMappingURL=index.js.map