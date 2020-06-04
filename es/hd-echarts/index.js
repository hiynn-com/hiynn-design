import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import PropTypes from "prop-types";
var seriesFetchData = [];

var HdEcharts = function (_Component) {
  _inheritsLoose(HdEcharts, _Component);

  function HdEcharts(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.axiosData = function (type, url) {
      return axios({
        method: type,
        url: url
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.xAxisData == undefined) {
            _this.setState({
              apiData: res.data.data.seriesData,
              legendData: res.data.data.legendData
            });
          } else {
            _this.setState({
              xAxisData: res.data.data.xAxisData,
              apiData: res.data.data.seriesData,
              legendData: res.data.data.legendData
            });
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.onChartClick = function (e) {
      var typeName = _this.props.typeName;

      if (typeName == "pie") {
        _this.props.onChange && _this.props.onChange(e.data);
      } else if (typeName == "bar" || typeName == "line") {
        _this.props.onChange && _this.props.onChange({
          name: e.name,
          value: e.value
        });
      }
    };

    _this.state = {
      value: 0,
      dataArray: [],
      seriesData: [{
        value: 335,
        name: "直接访问"
      }, {
        value: 320,
        name: "邮件营销"
      }, {
        value: 234,
        name: "联盟广告"
      }, {
        value: 125,
        name: "视频广告"
      }, {
        value: 1548,
        name: "搜索引擎"
      }],
      apiData: [],
      legendData: [],
      xAxisData: [],
      option: {}
    };
    return _this;
  }

  var _proto = HdEcharts.prototype;

  _proto.componentWillMount = function componentWillMount() {
    var _this$props = this.props,
        title_text = _this$props.title_text,
        option = _this$props.option,
        urlParams = _this$props.urlParams;
    var _this$props2 = this.props,
        value = _this$props2.value,
        precision = _this$props2.precision,
        data = _this$props2.data;
    this.setState({
      option: option
    });
  };

  _proto.shouldComponentUpdate = function () {
    var _shouldComponentUpdate = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(nextProps, nextState) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(JSON.stringify(nextProps.fetchUrl) != JSON.stringify(this.props.fetchUrl))) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this.axiosData("get", nextProps.fetchUrl);

            case 3:
              _context.next = 6;
              break;

            case 5:
              console.log("没有请求方法");

            case 6:
              if (!(JSON.stringify(this.state.apiData) != JSON.stringify(nextState.apiData))) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", true);

            case 8:
              if (!(JSON.stringify(nextProps.seriesData) != JSON.stringify(this.props.seriesData))) {
                _context.next = 12;
                break;
              }

              console.log("nextProps.seriesData", nextProps.seriesData.data);

              if (nextProps.seriesData.data.xAxisData == undefined) {
                this.setState({
                  apiData: nextProps.seriesData.data.seriesData,
                  legendData: nextProps.seriesData.data.legendData
                });
              } else if (nextProps.seriesData.data.xAxisData != []) {
                console.log("进去了折线图json");
                this.setState({
                  xAxisData: nextProps.seriesData.data.xAxisData,
                  legendData: nextProps.seriesData.data.legendData
                });
              }

              return _context.abrupt("return", true);

            case 12:
              return _context.abrupt("return", false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function shouldComponentUpdate(_x, _x2) {
      return _shouldComponentUpdate.apply(this, arguments);
    }

    return shouldComponentUpdate;
  }();

  _proto.render = function render() {
    var _this$props3 = this.props,
        title = _this$props3.title,
        titleSubtext = _this$props3.titleSubtext,
        titleTop = _this$props3.titleTop,
        titleX = _this$props3.titleX,
        width = _this$props3.width,
        height = _this$props3.height,
        legendData = _this$props3.legendData,
        legendOrient = _this$props3.legendOrient,
        legendLeft = _this$props3.legendLeft,
        seriesName = _this$props3.seriesName,
        seriesRadius = _this$props3.seriesRadius,
        seriesColor = _this$props3.seriesColor,
        seriesData = _this$props3.seriesData,
        typeName = _this$props3.typeName,
        xAxisData = _this$props3.xAxisData,
        urlParams = _this$props3.urlParams,
        dataZoom = _this$props3.dataZoom,
        textTitleColor = _this$props3.textTitleColor,
        backgroundColor = _this$props3.backgroundColor,
        textFontSize = _this$props3.textFontSize;
    var _this$state = this.state,
        value = _this$state.value,
        dataArray = _this$state.dataArray,
        option = _this$state.option;
    var type = typeName ? typeName : "pie";
    console.log("renderlimian de seriesData", seriesData);
    var optionProp;

    if (type == "pie") {
      optionProp = {
        title: {
          text: title ? title : "",
          subtext: titleSubtext ? titleSubtext : "",
          x: titleX ? titleX : "center",
          top: titleTop ? titleTop : 0,
          textStyle: {
            color: textTitleColor ? textTitleColor : "black",
            fontSize: textFontSize ? textFontSize : 18
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: legendOrient ? legendOrient : "vertical",
          left: legendLeft ? legendLeft : "left",
          data: this.state.legendData.length > 0 ? this.state.legendData : ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          textStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        series: [{
          name: seriesName ? seriesName : "",
          type: "pie",
          radius: seriesRadius ? seriesRadius : "55%",
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: Array.isArray(seriesRadius) ? true : false,
              textStyle: {
                fontSize: "20",
                fontWeight: "bold"
              }
            }
          },
          center: ["50%", "60%"],
          color: seriesColor ? seriesColor : ["#3aa1ff", "#36cbcb", "#4ecb73", "#fbd437", "#f2637b", "#975fe5", "#ff8352", "#8fc31f", "#3d71f1", "#e067b7", "#f4aa22", "#d3dd34", "#6fce40", "#b365d3"],
          data: this.state.apiData.length > 0 ? this.state.apiData : this.state.seriesData,
          itemStyle: {
            borderWidth: 2,
            borderColor: "#fff",
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }],
        backgroundColor: backgroundColor ? backgroundColor : "rgb(0, 0, 0,0)"
      };
    } else if (type == "line" || type == "bar") {
      optionProp = {
        title: {
          text: title ? title : "",
          subtext: titleSubtext ? titleSubtext : "",
          x: titleX ? titleX : "center",
          top: titleTop ? titleTop : 0,
          textStyle: {
            color: textTitleColor ? textTitleColor : "black",
            fontSize: textFontSize ? textFontSize : 18
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          top: 15,
          data: this.state.legendData.length > 0 ? this.state.legendData : ["蒸发量", "降水量", "平均温度"],
          textStyle: {
            color: "rgb(255, 255, 255)"
          }
        },
        calculable: true,
        xAxis: [{
          type: "category",
          data: this.state.xAxisData.length > 0 ? this.state.xAxisData : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        }],
        yAxis: [{
          type: "value"
        }],
        dataZoom: [{
          type: "slider",
          show: dataZoom ? true : false
        }, {
          type: "inside",
          realtime: true
        }],
        grid: {
          left: "1%",
          right: "1%",
          bottom: "20px",
          containLabel: true
        },
        series: this.state.apiData.length > 0 ? this.state.apiData : seriesData ? seriesData.data.seriesData : [{
          name: "蒸发量",
          type: type,
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
          name: "降水量",
          type: type,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }, {
          name: "平均温度",
          type: type,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }],
        backgroundColor: backgroundColor ? backgroundColor : "rgb(0, 0, 0,0)"
      };
    }

    return React.createElement(ReactEcharts, {
      onEvents: {
        click: this.onChartClick
      },
      option: optionProp,
      notMerge: true,
      lazyUpdate: true,
      style: {
        width: width ? width + "px" : "100%",
        height: height ? height + "px" : "100%"
      }
    });
  };

  return HdEcharts;
}(Component);

HdEcharts.defaultProps = {
  data: [],
  title: "",
  value: 0
};
HdEcharts.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default HdEcharts;
//# sourceMappingURL=index.js.map