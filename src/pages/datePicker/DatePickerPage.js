import React, { Component } from "react";
import HdDatePicker from "../../../components/hd-date-picker";
import "../../../components/hd-date-picker/style";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import moment from "moment";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

export default class DatePickerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `
      import { HdDatePicker } from 'hiynn-design';
      import moment from "moment";

      onChange = value => {
        console.log("选择后的值", value);
      };

      onOk = value => {
        console.log(value[0]);
      };

      <HdDatePicker type="month" label={"日期选择"} onOk={this.onOk} onChange={this.onChange} size={"small"}></HdDatePicker>
          
      <HdDatePicker type="date" label={"日期选择"} onOk={this.onOk} onChange={this.onChange}></HdDatePicker>
      `,
      code1: `
      import { HdDatePicker } from 'hiynn-design';
      import moment from "moment";

      onChange = (date, dateString) => {
        console.log(date, dateString);
      };

      onOk = value => {
        console.log(value[0]);
      };

      <HdDatePicker type="range" label={"日期选择"} onOk={this.onOk} onChange={this.onChange} size={"small"}></HdDatePicker>
          
      <HdDatePicker type="range" label={"日期选择"} onOk={this.onOk} onChange={this.onChange}></HdDatePicker>
      `,
      code2: `
      import { HdDatePicker } from 'hiynn-design';
      import moment from "moment";

      onChange = value => {
        console.log("选择后的值", value);
      };
      
      onOk = value => {
        console.log(value[0]);
      };
          
      <HdDatePicker type="range" label={"日期时间选择"} onOk={this.onOk} showTime={{ format: "HH:mm" }} onChange={this.onChange}></HdDatePicker>
      `,
      code3: `
      import { HdDatePicker } from 'hiynn-design';
      import moment from "moment";

      onChange = value => {
        console.log("选择后的值", value);
      };
      
      onOk = value => {
        console.log(value);
      };
          
      <HdDatePicker
      type="range"
      label={"日期时间更改"}
      defaultValue={[moment("2015-02-20 12:12", "YYYY/MM  HH:mm"), moment("2015-02-30 12:12", "YYYY/MM  HH:mm")]}
      onOk={this.onOk}
      showTime={{ format: "HH:mm" }}
      format="YYYY-MM-DD HH:mm"
      onChange={this.onChange}
    ></HdDatePicker>
      `
    };
  }

  componentDidMount() {}

  onChange = value => {
    console.log("选择后的值", value);
  };
  onOk = value => {
    console.log(value);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code} showCode={true}>
          {/* 基础 */}
          <HdDatePicker type="month" label={"日期选择"} onOk={this.onOk} onChange={this.onChange}></HdDatePicker>
          <p></p>
          <HdDatePicker type="date" label={"日期选择"} onOk={this.onOk} onChange={this.onChange}></HdDatePicker>
        </CodePreviewer>

        <CodePreviewer code={this.state.code1} showCode={true}>
          {/* 基础 */}
          <HdDatePicker type="range" label={"日期选择"} onOk={this.onOk} onChange={this.onChange} size={"small"}></HdDatePicker>
          <p></p>
          <HdDatePicker type="range" label={"日期选择"} onOk={this.onOk} onChange={this.onChange}></HdDatePicker>
        </CodePreviewer>
        <CodePreviewer code={this.state.code2} showCode={true}>
          {/* 带有时间选择的 */}
          <HdDatePicker width={1000} type="range" label={"日期时间选择"} onOk={this.onOk} showTime={{ format: "HH:mm" }} onChange={this.onChange}></HdDatePicker>
        </CodePreviewer>
        <CodePreviewer code={this.state.code3} showCode={true}>
          {/* 可设置默认时间的 */}
          <HdDatePicker
            type="range"
            label={"日期时间更改"}
            defaultValue={[moment("2015-02-20 12:12", "YYYY/MM  HH:mm"), moment("2015-02-30 12:12", "YYYY/MM  HH:mm")]}
            onOk={this.onOk}
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
            onChange={this.onChange}
          ></HdDatePicker>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
