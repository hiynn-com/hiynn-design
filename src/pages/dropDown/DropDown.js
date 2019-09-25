import React, { Component } from "react";
import HdDropDown from "../../../components/dropDown";
import "../../../components/dropDown/style";
import data from "./data";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import moment from "moment";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

export default class DropDownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `
      import { HdDropDown } from 'hiynn-design';
      
      `
    };
  }

  componentDidMount() {}
  onChange = data => {
    console.log("回调的数据：", data);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code} showCode={true}>
          <HdDropDown data={data} onChange={this.onChange}></HdDropDown>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
