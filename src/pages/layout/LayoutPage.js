import React, { Component } from "react";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import { Button } from "antd";
import layoutMd from "./md/layout.md";

class HdLayoutPage extends Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      console.log("hashParts", hashParts);

      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        console.log("hash=", hash);

        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }
  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <CodePreviewer code={`<Button type="primary">这是按钮</Button>`} showCode={true}>
          <Button type="primary">这是按钮</Button>
        </CodePreviewer>
        <MdPreviewer md={layoutMd}></MdPreviewer>
        <CodePreviewer code={`<Button type="primary">这是按钮</Button>`} showCode={true}>
          <Button type="primary">这是按钮</Button>
        </CodePreviewer>
      </PreviewLayout>
    );
  }
}

export default HdLayoutPage;
