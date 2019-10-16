import React, { Component } from "react";
import EcharsTitle from "../../../components/echarsTitle";
import "../../../components/echarsTitle/style";

import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import echarsTitleMd from "./md/echarsTitle.md";
import exampleMd from "./md/example.md";
import apiMd from "./md/api.md";

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '测试标题',
      titleStyle: {
        color: '#14f1e9',
      },
    };
  }

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={echarsTitleMd}></MdPreviewer>
        <CodePreviewer code={exampleMd} showCode={true}>
          <EcharsTitle
            titleContent={this.state.titleContent} //要展示的标题内容
            titleStyle={this.state.titleStyle} //要展示的标题颜色
          />
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default DemoPage;
