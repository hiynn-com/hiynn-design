"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/select/style");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireWildcard(require("react"));

var Option = _select.default.Option;

var HdDropDown = function (_Component) {
  (0, _inheritsLoose2.default)(HdDropDown, _Component);

  function HdDropDown(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleAddressData = function () {
      var da = _this.props.data;

      if (da && da.length > 0) {
        _this.setState({
          capitals: da
        }, function () {});
      }
    };

    _this.getCity = function (value) {
      _this.setState({
        city: "",
        areaList: ""
      }, function () {
        var capitals = _this.state.capitals;
        var da = [];
        capitals.map(function (item) {
          if (item.name === value) {
            da = item.firstList;
          }
        });

        _this.setState({
          city: da
        }, function () {
          _this.props.onChange(value, _this.state.city[0].name, _this.state.city[0].secondList[0]);

          _this.setState({
            areaList: _this.state.city[0] ? _this.state.city[0].secondList : "",
            data: {
              province: value,
              city: _this.state.city[0].name,
              county: _this.state.city[0].secondList[0]
            }
          });
        });
      });
    };

    _this.getSreaList = function (value) {
      _this.setState({
        areaList: ""
      }, function () {
        var city = _this.state.city;
        var ci = [];
        city.map(function (item) {
          if (item.name === value) {
            ci = item.secondList;
          }
        });

        _this.setState({
          areaList: ci
        }, function () {
          _this.props.onChange(_this.state.data.province, value, _this.state.areaList[0]);

          _this.setState({
            data: {
              province: _this.state.data.province,
              city: value,
              county: _this.state.areaList[0]
            }
          });
        });
      });
    };

    _this.getData = function (value) {
      _this.props.onChange(_this.state.data.province, _this.state.data.city, value);

      _this.setState({
        data: {
          province: _this.state.data.province,
          city: _this.state.data.city,
          county: value
        }
      });
    };

    _this.state = {
      capitals: [],
      data: {
        province: "",
        city: "",
        county: ""
      }
    };
    return _this;
  }

  var _proto = HdDropDown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleAddressData();
    this.setState({
      capitals: this.props.data
    });
  };

  _proto.handleChange = function handleChange(value) {
    console.log("selected " + value);
  };

  _proto.render = function render() {
    return _react.default.createElement("div", {
      className: "dropdown",
      style: {
        padding: "20px"
      }
    }, _react.default.createElement(_select.default, {
      showSearch: true,
      style: {
        width: 128,
        marginRight: "5px"
      },
      placeholder: "\u8BF7\u9009\u62E9",
      optionFilterProp: "children",
      onChange: this.getCity,
      filterOption: function filterOption(input, option) {
        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }
    }, this.state.capitals.map(function (item, index) {
      return _react.default.createElement(Option, {
        key: index,
        value: item.name
      }, item.name);
    })), typeof this.state.city !== "undefined" && this.state.city != [] ? _react.default.createElement(_select.default, {
      showSearch: true,
      style: {
        width: 128,
        marginRight: "5px"
      },
      placeholder: "\u5E02",
      optionFilterProp: "children",
      onChange: this.getSreaList,
      defaultValue: this.state.city[0] ? this.state.city[0].name : "",
      filterOption: function filterOption(input, option) {
        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }
    }, this.state.city.map(function (item, index) {
      return _react.default.createElement(Option, {
        key: index,
        value: item.name
      }, item.name);
    })) : "", this.state.areaList && this.state.areaList != [] ? _react.default.createElement(_select.default, {
      showSearch: true,
      style: {
        width: 128
      },
      placeholder: "\u533A",
      optionFilterProp: "children",
      defaultValue: this.state.areaList[0] ? this.state.areaList[0] : "",
      onChange: this.getData,
      filterOption: function filterOption(input, option) {
        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      }
    }, this.state.areaList.map(function (item, index) {
      return _react.default.createElement(Option, {
        key: index,
        value: item
      }, item);
    })) : "");
  };

  return HdDropDown;
}(_react.Component);

var _default = HdDropDown;
exports.default = _default;
//# sourceMappingURL=index.js.map