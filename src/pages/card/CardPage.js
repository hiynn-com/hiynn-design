import React, { Component } from "react";
import { HdCard } from "../../../components";
import { PreviewLayout, MdPreviewer, CodePreviewer } from "react-code-previewer";
import install from "./md/install.md";
import apiMd from "./md/api.md";

class HdCardPage extends Component {
  render() {
    let data = [
      {
        label: "同比：",
        content: "12%"
      },
      {
        label: "环比：",
        content: "10%"
      },
      {
        label: "同比历史均值：",
        content: "10%"
      }
    ];
    const mdCode = `
    let data = [{
      label: "同比：",
      content: '12%',
    }, {
      label: "环比：",
      content: '10%',
    }, {
      label: "同比历史均值：",
      content: '10%',
    }] 
     <HdCard 
        title="近7日立案(2019-08-23~2019-08-29)"
        value={12222}
        description="描述"
     ></HdCard>
    `;
    return (
      <PreviewLayout>
        <MdPreviewer md={install}></MdPreviewer>
        <CodePreviewer code={mdCode} showCode={true}>
          <HdCard title="近7日立案(2019-08-23~2019-08-29)" data={data} value={12222} description="描述" />
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default HdCardPage;
