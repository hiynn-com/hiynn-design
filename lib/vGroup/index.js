"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleContext = require("../context/style-context");

var _VGroup$propTypes, _VGroup$defaultProps;

var cmpClsName = 'vgroup';
var defaultH = 'auto';

var sizeValidationFn = function sizeValidationFn(props, propName, componentName) {
  var val = props[propName];

  if (val === defaultH) {
    return;
  }

  var reg = /[0-9]+%?/g;

  if (!reg.test(val)) {
    return new Error("\u4F20\u7ED9\u7EC4\u4EF6" + componentName + "\u7684\u5C5E\u6027" + propName + "\u7684\u503C\u4E0D\u5408\u6CD5\uFF0C\u6821\u9A8C\u5931\u8D25");
  }
};

var flexMapping = {
  left: 'flex-start',
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  center: 'center',
  justify: 'space-around',
  between: 'space-between'
};

var VGroup = function (_Component) {
  (0, _inheritsLoose2.default)(VGroup, _Component);

  function VGroup(props) {
    return _Component.call(this, props) || this;
  }

  var _proto = VGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setCssVar();
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps() {
    var _this = this;

    this.setState({}, function () {
      _this.setCssVar();
    });
  };

  _proto.setCssVar = function setCssVar() {
    var dom = this.instance;
    var attrObj = this.extraAttr;

    if (dom && attrObj) {
      for (var prop in attrObj) {
        dom.style.setProperty(prop, attrObj[prop]);
      }
    }
  };

  _proto.setClassName = function setClassName() {
    var className = this.props.className;
    var cls = (0, _classnames.default)(_styleContext.style.prefixCls + "-" + cmpClsName, className);
    return cls;
  };

  _proto.setAttributes = function setAttributes(props) {
    var _this$extraAttr;

    var vAlign = flexMapping[props['vertical-align']];
    var hAlign = flexMapping[props['horizontal-align']];
    var w = this.unitConvertor(props['width']);
    var h = this.unitConvertor(props['height']);
    this.extraAttr = (_this$extraAttr = {}, _this$extraAttr['--width'] = w, _this$extraAttr['--height'] = h, _this$extraAttr['--vertical-align'] = vAlign, _this$extraAttr['--horizontal-align'] = hAlign, _this$extraAttr);
  };

  _proto.unitConvertor = function unitConvertor(val) {
    if (String(val).includes('%')) {
      return val;
    } else {
      return val + 'px';
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    this.setAttributes(this.props);
    var cls = this.setClassName();
    return _react.default.createElement("div", (0, _extends2.default)({
      className: cls,
      ref: function ref(e) {
        _this2.instance = e;
      }
    }, this.props), this.props.children);
  };

  return VGroup;
}(_react.Component);

exports.default = VGroup;
VGroup.propTypes = (_VGroup$propTypes = {}, _VGroup$propTypes['horizontal-align'] = _propTypes.default.oneOf(['left', 'center', 'right']), _VGroup$propTypes['vertical-align'] = _propTypes.default.oneOf(['top', 'center', 'bottom', 'justify', 'between']), _VGroup$propTypes.width = sizeValidationFn, _VGroup$propTypes.height = sizeValidationFn, _VGroup$propTypes);
VGroup.defaultProps = (_VGroup$defaultProps = {}, _VGroup$defaultProps['vertical-align'] = 'justify', _VGroup$defaultProps['horizontal-align'] = 'center', _VGroup$defaultProps.width = '100%', _VGroup$defaultProps.height = 'auto', _VGroup$defaultProps);
//# sourceMappingURL=index.js.map