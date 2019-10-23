import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdButton from "../../../components/hd-button";
import "../../../components/hd-button/style";

export default class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdButton } from "hiynn-design";

<HdButton title="明细"/>
<HdButton title="导出"/>`
    };
  }

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdButton title="明细"/>
          <HdButton title="导出"/>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
