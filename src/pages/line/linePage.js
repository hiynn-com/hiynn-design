import React, { Component } from "react";
import HdLine from "../../../components/echars";
import { PreviewLayout, MdPreviewer, CodePreviewer } from "react-code-previewer";
import install from "./md/install.md";
import apiMd from "./md/api.md";

class HdLinePage extends Component {
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={install}></MdPreviewer>
                <CodePreviewer code={`<HdLine
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
                />`}>
                    <HdLine
                        typeName="line"
                        title="这是测试的标题"
                        titleSubtext="这是副标题"
                        textFontSize="22"
                        titleX="left"
                        titleTop="0"
                        legendOrient="vertical"
                        xAxisData={['1月', '2月', '3月', '4月', '5月', '6月', '7月']}
                        legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']}
                        legendLeft="right"
                        dataZoom={true}
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
                    />
                </CodePreviewer>
                <MdPreviewer md={apiMd}></MdPreviewer>
            </PreviewLayout>
        );
    }
}

export default HdLinePage;
