import React, { Component } from "react";
import HdLine from "../../../components/hd-echarts";
import { PreviewLayout, MdPreviewer, CodePreviewer } from "react-code-previewer";
import install from "./md/install.md";
import apiMd from "./md/api.md";

class HdLinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchUrl: ""
    };
  }

  // apiBtn = () => {
  //     console.log("前端url传方法");
  //     this.setState({
  //         // fetchUrl: "http://10.0.91.189:19101/verse-service/ping/_api/pie"
  //         fetchUrl: "http://10.0.91.189:19101/verse-service/ping/_api/lineBar"
  //     })
  // }

  // jsonBtn = () => {
  //     console.log("前端传JSON");
  //     this.setState({
  //         seriesData: {
  //             "data": {
  //                 "xAxisData": [
  //                     "一月",
  //                     "二月",
  //                     "三月"
  //                 ],
  //                 "legendData": [
  //                     "直接访问",
  //                     "联盟广告",
  //                     "电视广告",
  //                     "百度",
  //                     "谷歌2"
  //                 ],
  //                 "seriesData": [
  //                     {
  //                         "name": "直接访问",
  //                         "type": "line",
  //                         "stack": "",
  //                         "data": [
  //                             1,
  //                             2,
  //                             3
  //                         ]
  //                     },
  //                     {
  //                         "name": "联盟广告",
  //                         "type": "bar",
  //                         "stack": "广告",
  //                         "data": [
  //                             1,
  //                             2,
  //                             3
  //                         ]
  //                     },
  //                     {
  //                         "name": "电视广告",
  //                         "type": "bar",
  //                         "stack": "广告",
  //                         "data": [
  //                             1,
  //                             2,
  //                             3
  //                         ]
  //                     },
  //                     {
  //                         "name": "百度",
  //                         "type": "bar",
  //                         "stack": "搜索引擎",
  //                         "data": [
  //                             1,
  //                             2,
  //                             3
  //                         ]
  //                     },
  //                     {
  //                         "name": "谷歌2",
  //                         "type": "bar",
  //                         "stack": "搜索引擎",
  //                         "data": [
  //                             1,
  //                             2,
  //                             3
  //                         ]
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
          code={`<HdLine
                    typeName="line"
                    title="这是测试的标题"
                    titleSubtext="这是副标题"
                    titleX="left"
                    titleTop="0"
                    legendOrient="vertical"
                    xAxisData={['1月', '2月', '3月', '4月', '5月', '6月', '7月']}
                    legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']}
                    legendLeft="right"
                    seriesData={[
                        {
                            name: '直接访问',
                            type: 'line',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'line',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                    ]}
                    width={"100%"}
                    height={"300"}
                />`}
        >
          <HdLine
            typeName="line"
            title="这是测试的标题"
            titleSubtext="这是副标题"
            textFontSize="22"
            titleX="left"
            titleTop="0"
            legendOrient="vertical"
            xAxisData={["1月", "2月", "3月", "4月", "5月", "6月", "7月"]}
            legendData={["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎", "百度", "谷歌", "必应", "其他"]}
            legendLeft="right"
            dataZoom={true}
            fetchUrl={this.state.fetchUrl}
            seriesData={this.state.seriesData}
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

export default HdLinePage;
