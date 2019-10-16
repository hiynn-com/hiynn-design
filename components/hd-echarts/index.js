import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import PropTypes from "prop-types";
import "./style";

// 存储
let seriesFetchData = [];
class HdEcharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      dataArray: [],
      /**
             * seriesData    
               通过json或者初始化静态数据
               apiData
               通过接口获取
             */
      seriesData: [{ value: 335, name: "直接访问" }, { value: 320, name: "邮件营销" }, { value: 234, name: "联盟广告" }, { value: 125, name: "视频广告" }, { value: 1548, name: "搜索引擎" }],
      apiData: [],
      // 小图例
      legendData: [],
      //xAxisData 用于折线图 横坐标(x轴)
      xAxisData: [],
      option: {}
    };
  }

  componentWillMount() {
    // 需要传输的值。
    // title
    const { title_text, option, urlParams } = this.props;
    const { value, precision, data } = this.props;
    // 测试用的值
    this.setState({
      // value: this.setPrecision(value, precision),
      option
    });
  }

  async shouldComponentUpdate(nextProps, nextState) {
    // 接受url参数
    // if (nextProps.fetchUrl != undefined && nextProps.fetchUrl != "") {
    if (JSON.stringify(nextProps.fetchUrl) != JSON.stringify(this.props.fetchUrl)) {
      await this.axiosData("get", nextProps.fetchUrl);
    } else {
      console.log("没有请求方法");
    }

    if (JSON.stringify(this.state.apiData) != JSON.stringify(nextState.apiData)) {
      return true;
    }

    //JSON 传入的数据
    if (JSON.stringify(nextProps.seriesData) != JSON.stringify(this.props.seriesData)) {
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
      return true;
    }
    return false;
  }

  //简单的一个axios封装
  axiosData = (type, url) => {
    return axios({
      method: type,
      url: url
    })
      .then(res => {
        if (res.data.code == 200) {
          // 判断是否饼图还是折线图or饼图
          // xAxisData  存在就是折线图，否则就是饼图
          if (res.data.data.xAxisData == undefined) {
            this.setState({
              apiData: res.data.data.seriesData,
              legendData: res.data.data.legendData
            });
          } else {
            this.setState({
              xAxisData: res.data.data.xAxisData,
              apiData: res.data.data.seriesData,
              legendData: res.data.data.legendData
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      title,
      titleSubtext,
      titleTop,
      titleX,
      width,
      height,
      legendData,
      legendOrient,
      legendLeft,
      seriesName,
      seriesRadius,
      seriesColor,
      seriesData,
      typeName,
      xAxisData,
      urlParams,
      dataZoom,
      textTitleColor,
      backgroundColor,
      textFontSize
    } = this.props;
    const { value, dataArray, option } = this.state;
    // 判断什么类型的echars,组装不同的option
    let type = typeName ? typeName : "pie";
    console.log("renderlimian de seriesData", seriesData);
    let optionProp;
    if (type == "pie") {
      // 重新组合option 这是饼图
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
          // 图例过多,可以自动收缩
          type: "scroll",
          //默认横向布局，纵向布局值为'vertical'
          orient: legendOrient ? legendOrient : "vertical",
          // 小图例所在位置
          left: legendLeft ? legendLeft : "left",
          // 小图例具体显示名称---数组格式
          data: this.state.legendData.length > 0 ? this.state.legendData : ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: seriesName ? seriesName : "",
            type: "pie",
            // 圆的大小 或者是否是空心圆
            radius: seriesRadius ? seriesRadius : "55%",
            // radius: seriesRadius,
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
            // 是否切换南丁格尔图
            // roseType: 'area',
            // 自定义颜色
            color: seriesColor
              ? seriesColor
              : ["#3aa1ff", "#36cbcb", "#4ecb73", "#fbd437", "#f2637b", "#975fe5", "#ff8352", "#8fc31f", "#3d71f1", "#e067b7", "#f4aa22", "#d3dd34", "#6fce40", "#b365d3"],
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
          }
        ],
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
          data: this.state.legendData.length > 0 ? this.state.legendData : ["蒸发量", "降水量", "平均温度"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: this.state.xAxisData.length > 0 ? this.state.xAxisData : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        dataZoom: [
          {
            type: "slider", //图表下方的伸缩条
            show: dataZoom ? true : false //是否显示
            // start: 0,  //伸缩条开始位置（1-100），可以随时更改
            // end: 100,  //伸缩条结束位置（1-100），可以随时更改
          },
          {
            type: "inside", //鼠标滚轮
            realtime: true
            //还有很多属性可以设置，详见文档
          }
        ],
        grid: {
          left: "1%",
          right: "1%",
          bottom: "20px",
          containLabel: true
        },
        series:
          this.state.apiData.length > 0
            ? this.state.apiData
            : seriesData
            ? seriesData.data.seriesData
            : [
                {
                  name: "蒸发量",
                  type: type,
                  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                  name: "降水量",
                  type: type,
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                  name: "平均温度",
                  type: type,
                  data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
              ],
        backgroundColor: backgroundColor ? backgroundColor : "rgb(0, 0, 0,0)"
      };
    }
    return <ReactEcharts option={optionProp} notMerge={true} lazyUpdate={true} style={{ width: width ? width + "px" : "100%", height: height ? height + "px" : "100%" }} />;
  }
}
HdEchars.defaultProps = {
  data: [],
  title: "",
  value: 0
};
HdEchars.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default HdEcharts;
