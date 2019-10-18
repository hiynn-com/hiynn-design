import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdRadio from "../../../components/hd-radio";
import "../../../components/hd-radio/style";

const options1 = [
  {name: '同比', value: '0'},
  {name: '环比', value: '1'},
];

const options2 = [
  {name: '第四次', value: '2'},
  {name: '第五次', value: '3'},
];

export default class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdRadio } from "hiynn-design";

const options1 = [
  {name: '同比', value: '0'},
  {name: '环比', value: '1'},
];

const options2 = [
  {name: '第四次', value: '2'},
  {name: '第五次', value: '3'},
];

onChange = checkedItem => {
  console.log(checkedItem)
};

<HdRadio options={options1} defaultValue="0" buttonStyle="solid"/>
<HdRadio options={options2} defaultValue="2" onChange={this.onChange}/>`
    };
  }

  onChange = checkedItem => {
    console.log(checkedItem)
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdRadio options={options1} defaultValue="0" buttonStyle="solid"/>
          <br/><br/>
          <HdRadio options={options2} defaultValue="2" onChange={this.onChange}/>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
