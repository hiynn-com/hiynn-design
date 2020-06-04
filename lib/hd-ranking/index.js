"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

var HdRanking = function (_Component) {
  (0, _inheritsLoose2.default)(HdRanking, _Component);

  function HdRanking(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    console.log(props.url);
    _this.state = {
      data: _this.props.data,
      showTop: _this.props.showTop,
      corner: _this.props.corner
    };
    return _this;
  }

  var _proto = HdRanking.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;

    console.log(this.props.url);

    if (this.props.url) {
      _axios.default.get(this.props.url).then(function (response) {
        _this2.setState({
          data: response.data.data.data
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (nextProps.url) {
      _axios.default.get(nextProps.url).then(function (response) {
        _this3.setState({
          data: response.data.data.data
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      if (nextProps.data) {
        this.setState({
          data: nextProps.data
        });
      }
    }

    if (nextProps.showTop) {
      this.setState({
        showTop: nextProps.showTop
      });
    }

    if (nextProps.corner) {
      this.setState({
        corner: nextProps.corner
      });
    }
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        data = _this$props.data,
        style = _this$props.style,
        showTop = _this$props.showTop,
        corner = _this$props.corner,
        url = _this$props.url;
    return _react.default.createElement("div", {
      className: "ranking",
      style: style
    }, this.state.data && this.state.data.constructor == Array && this.state.data != [] ? this.state.data.map(function (item, index) {
      return _react.default.createElement("div", {
        key: index
      }, _react.default.createElement("span", {
        style: showTop ? {
          width: "35%"
        } : {
          width: "50%"
        },
        ref: "rankingname",
        className: "ranking-name"
      }, item.name, " :", " "), _react.default.createElement("span", {
        className: "ranking-value"
      }, item.value), _this4.state.showTop ? _react.default.createElement("span", {
        className: "ranking-top ranking-top" + index
      }, "Top", index + 1) : "");
    }) : "", this.state.corner ? _react.default.createElement("span", {
      className: "corner-top-left"
    }) : "", this.state.corner ? _react.default.createElement("span", {
      className: "corner-top-right"
    }) : "", this.state.corner ? _react.default.createElement("span", {
      className: "corner-bottom-left"
    }) : "", this.state.corner ? _react.default.createElement("span", {
      className: "corner-bottom-right"
    }) : "");
  };

  return HdRanking;
}(_react.Component);

var _default = HdRanking;
exports.default = _default;
//# sourceMappingURL=index.js.map