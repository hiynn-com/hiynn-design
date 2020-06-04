"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/carousel/style");

var _carousel = _interopRequireDefault(require("antd/lib/carousel"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var returnName = "label";
var settings = {
  arrows: true,
  centerMode: false,
  className: "slider variable-width",
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true
};

var HdCheckboxBar = function (_React$Component) {
  (0, _inheritsLoose2.default)(HdCheckboxBar, _React$Component);

  function HdCheckboxBar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.fetchOptions = function (url) {
      _axios.default.get(url).then(function (res) {
        if (res.data.code != 200) return;

        _this.setState({
          options: res.data.data.options
        }, function () {
          _this.refs.carousel.goTo(0);

          _this.props.onChange && _this.props.onChange(_this.state.options.filter(function (item) {
            return item.checked;
          }).map(function (item) {
            return {
              name: returnName,
              value: item.value
            };
          }));
        });
      }).catch(function (err) {
        console.log(err);
      });
    };

    _this.onChange = function (item) {
      item.checked = !item.checked;

      _this.setState({
        options: [].concat(_this.state.options)
      }, function () {
        _this.props.onChange && _this.props.onChange(_this.state.options.filter(function (item) {
          return item.checked;
        }).map(function (item) {
          return {
            name: returnName,
            value: item.value
          };
        }));
      });
    };

    _this.state = {
      options: _this.props.options || []
    };
    return _this;
  }

  var _proto = HdCheckboxBar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.url) {
      this.fetchOptions(this.props.url);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (this.props.url !== nextProps.url) {
      this.fetchOptions(nextProps.url);
    } else if (this.props.options !== nextProps.options) {
      var options = nextProps.options || [];
      this.setState({
        options: options
      }, function () {
        _this2.refs.carousel.goTo(0);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    return _react.default.createElement("div", {
      className: "hd-checkbox-bar",
      style: _objectSpread(_objectSpread({}, this.props.style), {}, {
        width: this.props.width,
        height: this.props.height
      })
    }, _react.default.createElement(_carousel.default, (0, _extends2.default)({
      ref: "carousel"
    }, settings), this.state.options.map(function (item) {
      return _react.default.createElement("div", {
        key: item.value
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)("hd-checkbox", {
          "hd-checkbox-checked": item.checked
        }),
        onClick: function onClick() {
          return _this3.onChange(item);
        }
      }, _react.default.createElement("i", {
        className: "hd-checkbox-icon",
        style: {
          backgroundColor: item.icon || "transparent"
        }
      }), _react.default.createElement("span", null, item.name)));
    })));
  };

  return HdCheckboxBar;
}(_react.default.Component);

var _default = HdCheckboxBar;
exports.default = _default;
//# sourceMappingURL=index.js.map