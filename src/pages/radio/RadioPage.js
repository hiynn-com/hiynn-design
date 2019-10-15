import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdRadio from "../../../components/radio";
import "../../../components/radio/style";

const options1 = [
  {label: '同比', value: '0'},
  {label: '环比', value: '1'},
];

const options2 = [
  {label: '第四次', value: '2'},
  {label: '第五次', value: '3'},
];

export default class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdRadio } from "hiynn-design";

const options1 = [
  {label: '同比', value: '0'},
  {label: '环比', value: '1'},
];

const options2 = [
  {label: '第四次', value: '2'},
  {label: '第五次', value: '3'},
];

<HdRadio options={options1} defaultValue="0" buttonStyle="solid"/>
<HdRadio options={options2} defaultValue="2"/>`
    };
  }

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdRadio options={options1} defaultValue="0" buttonStyle="solid"/>
          <br/><br/>
          <HdRadio options={options2} defaultValue="2"/>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
