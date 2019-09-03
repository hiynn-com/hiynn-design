import React, { Component } from "react";
import { Input, Button } from "antd";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";
import Panel from "../../../components/panel";
import "../../../components/panel/style/index";
import HGroup from "../../../components/hgroup";
import "../../../components/hgroup/style/index";
import VGroup from "../../../components/vGroup";
import "../../../components/vGroup/style/index";
import introMd from "./md/intro.md";
import exampleMd from "./md/examples.md";
import example1 from "./md/example1.md";
import api from "./md/api.md";

export default class HdPanelPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const demo1 = `<HGroup horizontal-align='justify'>
    <Panel width='450'
      height='350'
      title='我是标题栏'
      text-align='left'
      title-fontsize='16'
      title-height='35'
    >
      <HGroup width='100%'
        height='100%'
        horizontal-align='center'
        vertical-align='center'>
        <VGroup width='80%'
          height='100%'
          vertical-align='justify'
          horizontal-align='center'>
          <HGroup>
            <span>{'账  号'}</span>
            <Input size="default" placeholder="default size" style={{ width: '250px' }} />
          </HGroup>
          <HGroup>
            <span>{'密  码'}</span>
            <Input size="default" placeholder="default size" style={{ width: '250px' }} />
          </HGroup>
          <HGroup>
            <span>{'邮  箱'}</span>
            <Input size="default" placeholder="default size" style={{ width: '250px' }} />
          </HGroup>
          <HGroup>
            <span>{'网  址'}</span>
            <Input size="default" placeholder="default size" style={{ width: '250px' }} />
          </HGroup>
          <HGroup horizontal-align='right'>
            <Button type="primary">Primary</Button>
          </HGroup>
        </VGroup>
      </HGroup>
    </Panel>

    <Panel width='450'
      height='350'
      title='我是标题栏'
      text-align='right'
      title-fontsize='16'
      title-background='#FF4D4F'
      title-height='35'>
      <HGroup horizontal-align='center'
        vertical-align='center'
        height='100%'>
        This is another HGroup.
      </HGroup>
    </Panel>
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
            <HGroup horizontal-align="justify">
              <Panel width="450" height="350" title="我是标题栏" text-align="left" title-fontsize="16" title-height="35">
                <HGroup width="100%" height="100%" horizontal-align="center" vertical-align="center">
                  <VGroup width="80%" height="100%" vertical-align="justify" horizontal-align="center">
                    <HGroup>
                      <span>{"账  号"}</span>
                      <Input size="default" placeholder="default size" style={{ width: "250px" }} />
                    </HGroup>
                    <HGroup>
                      <span>{"密  码"}</span>
                      <Input size="default" placeholder="default size" style={{ width: "250px" }} />
                    </HGroup>
                    <HGroup>
                      <span>{"邮  箱"}</span>
                      <Input size="default" placeholder="default size" style={{ width: "250px" }} />
                    </HGroup>
                    <HGroup>
                      <span>{"网  址"}</span>
                      <Input size="default" placeholder="default size" style={{ width: "250px" }} />
                    </HGroup>
                    <HGroup horizontal-align="right">
                      <Button type="primary">Primary</Button>
                    </HGroup>
                  </VGroup>
                </HGroup>
              </Panel>

              <Panel width="450" height="350" title="我是标题栏" text-align="right" title-fontsize="16" title-background="#FF4D4F" title-height="35">
                <HGroup horizontal-align="center" vertical-align="center" height="100%">
                  This is another HGroup.
                </HGroup>
              </Panel>
            </HGroup>
          </CodePreviewer>
          <MdPreviewer md={example1}></MdPreviewer>

          {/* API说明 */}
          <MdPreviewer md={api}></MdPreviewer>
        </PreviewLayout>
      </div>
    );
  }
}
