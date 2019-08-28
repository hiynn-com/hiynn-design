import React, { Component } from "react";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import { Button } from "antd";
import layoutMd from "../md/layout.md";

class HdLayoutPage extends Component {
  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <CodePreviewer code={`<Button type="primary">这是按钮</Button>`} showCode={true}>
          <Button type="primary">这是按钮</Button>
        </CodePreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default HdLayoutPage;
