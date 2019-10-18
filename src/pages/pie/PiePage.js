import React, { Component } from "react";
import HdPie from "../../../components/hd-echarts";
import { PreviewLayout, MdPreviewer, CodePreviewer } from "react-code-previewer";
import install from "./md/install.md";
import apiMd from "./md/api.md";

class HdPiePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUrl: ""
    };
  }

  // apiBtn = () => {
  //     console.log("前端饼图传方法");
  //     this.setState({
  //         fetchUrl: "http://10.0.91.189:19101/verse-service/ping/_api/pie"
  //         // fetchUrl: "http://10.0.91.189:19101/verse-service/ping/_api/lineBar"
  //     })
  // }

  // jsonBtn = () => {
  //     console.log("前端饼图传JSON");
  //     this.setState({
  //         seriesData: {
  //             "data": {
  //                 "legendData": [
  //                     "事件1",
  //                     "事件2",
  //                     "事件3",
  //                 ],
  //                 "seriesData": [
  //                     {
  //                         "name": "事件1",
  //                         "value": 123
  //                     },
  //                     {
  //                         "name": "事件2",
  //                         "value": 123.3
  //                     },
  //                     {
  //                         "name": "事件3",
  //                         "value": 250.3
  //                     }
  //                 ]
  //             },
  //         }
  //     })
  // }

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={install}></MdPreviewer>
        <CodePreviewer
          code={`<HdPie
                        typeName="pie"
                        title="这是测试的标题"
                        titleSubtext="这是副标题"
                        titleX="center"
                        titleTop="30"
                        legendOrient="vertical"
                        legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']}
                        legendLeft="right"
                        seriesName="访问来源123"
                        seriesRadius="60"
                        fetchUrl={"http://xxxxxxxx:3000/xx"}
                        seriesColor={["#3aa1ff", "#36cbcb", "#4ecb73", "#fbd437", "#f2637b", "#975fe5", "#ff8352", "#8fc31f", "#3d71f1", "#e067b7", "#f4aa22", "#d3dd34", "#6fce40", "#b365d3"]}
                        seriesData={[
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]}
                        width={"100%"}
                        height={"300"}
                    />`}
        >
          <HdPie
            typeName="pie"
            title="这是测试的标题"
            titleSubtext="这是副标题"
            textTitleColor="orange"
            titleX="center"
            titleTop="0"
            legendOrient="vertical"
            legendData={["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]}
            legendLeft="right"
            seriesName="访问来源"
            seriesRadius={["50%", "65%"]}
            // seriesRadius="65%"
            seriesColor={["#3aa1ff", "#36cbcb", "#4ecb73", "#fbd437", "#f2637b", "#975fe5", "#ff8352", "#8fc31f", "#3d71f1", "#e067b7", "#f4aa22", "#d3dd34", "#6fce40", "#b365d3"]}
            seriesData={this.state.seriesData}
            fetchUrl={this.state.fetchUrl}
            width={"100%"}
            height={"300"}
          />

          {/* <div onClick={this.apiBtn}>点击我api</div>
                    <div onClick={this.jsonBtn}>点击我Json</div> */}
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default HdPiePage;
