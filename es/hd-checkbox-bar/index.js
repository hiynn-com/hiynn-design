import "antd/lib/carousel/style";
import _Carousel from "antd/lib/carousel";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import axios from "axios";
import classNames from "classnames";
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
  _inheritsLoose(HdCheckboxBar, _React$Component);

  function HdCheckboxBar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.fetchOptions = function (url) {
      axios.get(url).then(function (res) {
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

    return React.createElement("div", {
      className: "hd-checkbox-bar",
      style: _objectSpread(_objectSpread({}, this.props.style), {}, {
        width: this.props.width,
        height: this.props.height
      })
    }, React.createElement(_Carousel, _extends({
      ref: "carousel"
    }, settings), this.state.options.map(function (item) {
      return React.createElement("div", {
        key: item.value
      }, React.createElement("div", {
        className: classNames("hd-checkbox", {
          "hd-checkbox-checked": item.checked
        }),
        onClick: function onClick() {
          return _this3.onChange(item);
        }
      }, React.createElement("i", {
        className: "hd-checkbox-icon",
        style: {
          backgroundColor: item.icon || "transparent"
        }
      }), React.createElement("span", null, item.name)));
    })));
  };

  return HdCheckboxBar;
}(React.Component);

export default HdCheckboxBar;
//# sourceMappingURL=index.js.map