import React, { Component } from "react";
import quicklyMd from "../../md/quickly/quickly.md";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";

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
