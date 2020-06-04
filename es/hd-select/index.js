import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/select/style";
import _Select from "antd/lib/select";
import React, { Component } from "react";
import axios from "axios";
var Option = _Select.Option;

var HdSelect = function (_Component) {
  _inheritsLoose(HdSelect, _Component);

  function HdSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.onChange = function (value) {
      _this.props.onChange({
        name: "value",
        value: value
      });
    };

    _this.state = {
      data: _this.props.data
    };
    return _this;
  }

  var _proto = HdSelect.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;

    console.log(this.props.url);

    if (this.props.url) {
      axios.get(this.props.url).then(function (response) {
        _this2.setState({
          data: response.data.data.options
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (nextProps.url) {
      axios.get(nextProps.url).then(function (response) {
        _this3.setState({
          data: response.data.data.options
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
  };

  _proto.render = function render() {
    var _this$props = this.props,
        size = _this$props.size,
        loading = _this$props.loading,
        onChange = _this$props.onChange,
        style = _this$props.style,
        mode = _this$props.mode,
        defaultValue = _this$props.defaultValue,
        placeholder = _this$props.placeholder,
        label = _this$props.label,
        data = _this$props.data,
        url = _this$props.url,
        width = _this$props.width;
    return React.createElement("div", {
      className: "select"
    }, label ? React.createElement("span", {
      className: "select-label"
    }, label, " :") : "", React.createElement(_Select, {
      placeholder: placeholder,
      defaultValue: defaultValue,
      mode: mode,
      size: size,
      loading: loading,
      onChange: this.onChange,
      style: {
        width: width,
        minWidth: 120
      }
    }, this.state.data ? this.state.data.map(function (item, index) {
      return React.createElement(Option, {
        key: index,
        value: item.value
      }, item.name);
    }) : ""));
  };

  return HdSelect;
}(Component);

export default HdSelect;
//# sourceMappingURL=index.js.map