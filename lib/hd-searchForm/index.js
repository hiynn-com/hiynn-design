"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

require("antd/es/radio/style/css");

var _radio = _interopRequireDefault(require("antd/es/radio"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _zh_CN = _interopRequireDefault(require("antd/lib/date-picker/locale/zh_CN"));

require("./style");

var FormItem = _form["default"].Item;

var HdTreeEdit =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdTreeEdit, _Component);

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
          domEl = _react["default"].createElement(_input["default"], {
            placeholder: "\u8BF7\u8F93\u5165" + item.label,
            style: {
              width: item.width
            }
          });
          break;

        case "select":
          domEl = _react["default"].createElement(_select["default"], {
            onChange: _this[item.key + "Change"],
            placeholder: "\u8BF7\u9009\u62E9",
            optionFilterProp: "children",
            style: {
              width: item.width
            },
            showSearch: item.showSearch
          }, item.children.map(function (opt, index) {
            return _react["default"].createElement(_select["default"].Option, {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "checkbox":
          domEl = _react["default"].createElement(_checkbox["default"].Group, {
            options: item.children,
            onChange: _this[item.key + "Change"]
          });
          break;

        case "radio":
          domEl = _react["default"].createElement(_radio["default"].Group, {
            onChange: _this[item.key + "Change"]
          }, item.children.map(function (opt, index) {
            return _react["default"].createElement(_radio["default"], {
              key: index,
              value: opt.value
            }, opt.label);
          }));
          break;

        case "datePicker":
          domEl = _react["default"].createElement(_datePicker["default"], {
            onChange: _this[item.key + "Change"],
            locale: _zh_CN["default"],
            style: {
              width: item.width
            },
            format: item.format
          });
          break;

        case "rangePickerTime":
          domEl = _react["default"].createElement(_datePicker["default"].RangePicker, {
            onChange: _this[item.key + "Change"],
            locale: _zh_CN["default"],
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
    return _react["default"].createElement("div", {
      className: "hd-searchForm-box"
    }, _react["default"].createElement(_form["default"], {
      layout: layout
    }, searchFormOption.forms && searchFormOption.forms.map(function (item, index) {
      return _react["default"].createElement(FormItem, {
        label: item.label,
        key: item.key
      }, _this2.renderFormDom(item));
    }), searchFormOption.btns && searchFormOption.btns.map(function (btn, index) {
      return _react["default"].createElement(FormItem, {
        key: index
      }, _react["default"].createElement(_button["default"], {
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
}(_react.Component);

var SearchForm = _form["default"].create()(HdTreeEdit);

var _default = SearchForm;
exports["default"] = _default;
//# sourceMappingURL=index.js.map