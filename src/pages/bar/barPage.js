import React, { Component } from "react";
import HdBar from "../../../components/echars";
import { PreviewLayout, MdPreviewer, CodePreviewer } from "react-code-previewer";
import install from "./md/install.md";
import apiMd from "./md/api.md";

class HdBarPage extends Component {
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={install}></MdPreviewer>
                <CodePreviewer code={`<HdLine
                    typeName="line"
                    title="这是测试的标题"
                    titleSubtext="这是副标题"
                    backgroundColor = "rgb(0, 131, 255,0.8)"
                    titleX="left"
                    titleTop="0"
                    legendOrient="vertical"
                    xAxisData={['1月', '2月', '3月', '4月', '5月', '6月', '7月']}
                    legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']}
                    legendLeft="right"
                    seriesData={[
                        {
                            name: '直接访问',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                        },
                    ]}
                    width={"100%"}
                    height={"300"}
                />`}>
                    <HdBar
                        typeName="line"
                        // title="这是测试的标题"
                        // titleSubtext="这是副标题"
                        backgroundColor="rgb(0, 131, 255,0.8)"
                        titleX="left"
                        titleTop="0"
                        legendOrient="vertical"
                        xAxisData={['1月', '2月', '3月', '4月', '5月', '6月', '7月']}
                        legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']}
                        legendLeft="right"
                        seriesData={[
                            {
                                name: '直接访问',
                                type: 'bar',
                                data: [320, 332, 301, 334, 390, 330, 320]
                            },
                            {
                                name: '邮件营销',
                                type: 'bar',
                                data: [120, 132, 101, 134, 90, 230, 210]
                            },
                            {
                                name: '联盟广告',
                                type: 'bar',
                                data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name: '视频广告',
                                type: 'bar',
                                data: [150, 232, 201, 154, 190, 330, 410]
                            },
                            {
                                name: '搜索引擎',
                                type: 'bar',
                                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                            },
                        ]}
                        width={"100%"}
                        height={"300"}
                    />
                </CodePreviewer>
                <MdPreviewer md={apiMd}></MdPreviewer>
            </PreviewLayout>
        );
    }
}

export default HdBarPage;
