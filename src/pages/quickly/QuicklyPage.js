import React, { Component } from "react";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import quicklyMd from "./md/quickly.md";

class QuicklyPage extends Component {
  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={quicklyMd} />
      </PreviewLayout>
    );
  }
}

export default QuicklyPage;
