import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdButton from "../../../components/button";
import "../../../components/button/style";

export default class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdButton } from "hiynn-design";

<HdButton>明细</HdButton>
<HdButton>导出</HdButton>`
    };
  }

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdButton>明细</HdButton>
          <HdButton>导出</HdButton>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
