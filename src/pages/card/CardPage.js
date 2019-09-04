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
    import {hd-card} from "hiynn-design"

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

    ReactDOM.render(
      <HdCard 
        title="近7日立案(2019-08-23~2019-08-29)"
        value={122}
        precision={2}
        description="描述"
      ></HdCard>,
      mountNode,
    );
    `;
    return (
      <PreviewLayout>
        <MdPreviewer md={install}></MdPreviewer>
        <CodePreviewer code={mdCode} showCode={true}>
          <div style={{ display: 'flex' }}>
            <HdCard
              title="近7日立案(2019-08-23~2019-08-29)"
              data={data}
              precision={2}
              value={122}
              description="描述"
            />
            <HdCard
              title="近7日立案(2019-08-23~2019-08-29)"
              data={data}
              value={'10%'}
              description="描述"
              type="block" />
          </div>
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default HdCardPage;
