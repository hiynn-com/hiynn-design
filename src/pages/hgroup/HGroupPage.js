import React, { Component } from "react";
import { Input } from "antd";
import HGroup from "../../../components/hgroup";
import "../../../components/hgroup/style/index";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";

import introMd from "./md/intro.md";
import exampleMd from "./md/examples.md";
import example1 from "./md/example1.md";
import example2 from "./md/example2.md";
import api from "./md/api.md";

export default class HdHGroupPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const demo1 = `<HGroup style={{ background: 'lightblue' }} key={1}>
  <div style={{background: '#FFBB55'}}>i'm a div</div>
  <p style={{background: '#99BB33'}}>this is a p</p>
  <Input placeholder="small size" style={{width: '200px'}} />
  <span style={{background: '#FF4444'}}>span span...</span>
</HGroup>`;

    const demo2 = `<HGroup width='900'
  height='200'
  horizontal-align='right'
  vertical-align='top'
  style={{ background: '#108EE9' }}
  key={2}
>
  <div style={{ background: '#FFBB55' }}>i'm a div</div>
  <p style={{ background: '#99BB33' }}>this is a p</p>
  <span style={{ background: '#FF4444' }}>span span...</span>
</HGroup>`;

    return (
      <div style={{ padding: "2em" }}>
        <PreviewLayout>
          {/* 介绍 */}
          <MdPreviewer md={introMd}></MdPreviewer>

          {/* 示例说明 */}
          <MdPreviewer md={exampleMd}></MdPreviewer>

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>
            <HGroup style={{ background: "#108EE9" }} key={1}>
              <div style={{ background: "#FFBB55" }}>i'm a div</div>
              <p style={{ background: "#99BB33" }}>this is a p</p>
              <Input placeholder="small size" style={{ width: "200px" }} />
              <span style={{ background: "#FF4444" }}>span span...</span>
            </HGroup>
          </CodePreviewer>
          <MdPreviewer md={example1}></MdPreviewer>

          {/* 示例 2 */}
          <CodePreviewer code={demo2} showCode={true}>
            <HGroup width="900" height="200" horizontal-align="right" vertical-align="top" style={{ background: "#108EE9" }} key={2}>
              <div style={{ background: "#FFBB55" }}>i'm a div</div>
              <p style={{ background: "#99BB33" }}>this is a p</p>
              <span style={{ background: "#FF4444" }}>span span...</span>
            </HGroup>
          </CodePreviewer>
          <MdPreviewer md={example2}></MdPreviewer>

          {/* API说明 */}
          <MdPreviewer md={api}></MdPreviewer>
        </PreviewLayout>
      </div>
    );
  }
}
