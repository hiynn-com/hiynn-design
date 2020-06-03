import React, { Component } from "react";
import HdSelect from "../../../components/hd-select";
import "../../../components/hd-select/style";

import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import moment from "moment";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

export default class DropDownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "测试1",
          value: 1
        },
        {
          name: "测试2",
          value: 2
        },
        {
          name: "测试3",
          value: 3
        }
      ],
      code: `
      import { HdSelect } from 'hiynn-design';

      this.state = {
        data: [
          {
            name: "测试1",
            value: 1
          },
          {
            name: "测试2",
            value: 2
          },
          {
            name: "测试3",
            value: 3
          }
        ]
      }

      onChange = value => {
        console.log("select回调的数据：", value);
      };

      <HdSelect label={"加载"} data={this.state.data} placeholder={"请选择"} size={"small"} loading={true} onChange={this.onChange} style={{ width: 120 }}></HdSelect>
      <br />
      <HdSelect label={"单选"} data={this.state.data} placeholder={"请选择"} onChange={this.onChange} style={{ width: 120 }}></HdSelect>
      <br />
      <HdSelect label={"多选"} data={this.state.data} placeholder={"请选择"} mode={"multiple"} onChange={this.onChange} style={{ width: 300 }}></HdSelect>
      `
    };
  }

  componentDidMount() {}
  onChange = value => {
    console.log("select回调的数据：", value);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code} showCode={true}>
          <HdSelect label={"加载"} data={this.state.data} placeholder={"请选择"} size={"small"} loading={true} onChange={this.onChange}></HdSelect>
          <br />
          <HdSelect
            label={"单选"}
            url={"http://10.0.91.189:19101/verse-service/ping/_api/select"}
            data={this.state.data}
            placeholder={"请选择"}
            onChange={this.onChange}
            style={{ width: 120 }}
            width={200}
          ></HdSelect>
          <br />
          <HdSelect label={"多选"} data={this.state.data} placeholder={"请选择"} mode={"multiple"} onChange={this.onChange}></HdSelect>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
