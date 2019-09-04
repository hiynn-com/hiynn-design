import React, { Component } from "react";
import { Input } from "antd";
import EditableTable from "../../../components/editableTable";
import "../../../components/editableTable/style/index";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";

// import introMd from "./md/intro.md";
// import exampleMd from "./md/examples.md";
// import example1 from "./md/example1.md";
// import example2 from "./md/example2.md";
// import api from "./md/api.md";

export default class EditableTablePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    const demo1 = `editableTable`;

    return (
      <div style={{ padding: "2em" }}>
        <PreviewLayout>
          {/* 介绍 */}
          {/* <MdPreviewer md={introMd}></MdPreviewer> */}

          {/* 示例说明 */}
          {/* <MdPreviewer md={exampleMd}></MdPreviewer> */}

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>

          </CodePreviewer>
          {/* <MdPreviewer md={example1}></MdPreviewer> */}

          {/* API说明 */}
          {/* <MdPreviewer md={api}></MdPreviewer> */}
        </PreviewLayout>
      </div>
    );
  }
}
