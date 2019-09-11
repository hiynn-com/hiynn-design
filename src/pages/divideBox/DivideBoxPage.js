import React, { Component } from "react";
import { Input, Button } from "antd";
import DivideBox from "../../../components/divideBox";
import "../../../components/divideBox/style/index";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";

import introMd from "./md/intro.md";
import exampleMd from "./md/examples.md";
import example1 from "./md/example1.md";
import example2 from "./md/example2.md";
import example3 from "./md/example3.md";
import api from "./md/api.md";

export default class DivideBoxPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    const demo1 = `<DivideBox width='500'
  height='200'
  direction='column'>
  <div slot='top' style={{background: '#53A4FB', width: '100%', height: '100%'}}>
    我是第一个子元素
  </div>
  <div slot='bottom' style={{background: '#F86464', width: '100%', height: '100%'}}>
    我是第二个子元素
  </div>
</DivideBox>`;

    const demo2 = `<DivideBox width='500'
  height='200'
  direction='row'>
  <div slot='left' style={{width: '100%', height: '100%', margin: '30px'}}>
    我是第一个子元素
    <Input style={{width: '150px', margin: '30px 0 0 20px'}}/>
  </div>
  <div slot='right' style={{width: '100%', height: '100%', margin: '30px'}}>
    我是第二个子元素
    <br/>
    <Button type='primary'>确定</Button>
  </div>
</DivideBox>`;

    const demo3 = `<DivideBox width='500'
  height='300'
  direction='row'>
  <div slot='left' style={{width: '100%', height: '100%'}}>
    <DivideBox width='100%'
      height='100%'
      direction='column'>
      <div slot='top' style={{background: '#53A4FB', width: '100%', height: '100%'}}>
        我是上面的子元素
      </div>
      <div slot='bottom' style={{background: '#F86464', width: '100%', height: '100%'}}>
        我是下面的子元素
      </div>
    </DivideBox>
  </div>
  <div slot='right' style={{width: '100%', height: '100%', margin: '30px'}}>
    我是右边的子元素
    <br/>
    <Button type='primary'>确定</Button>
  </div>
</DivideBox>`;

    return (
      <div style={{ padding: "2em" }}>
        <PreviewLayout>
          {/* 介绍 */}
          <MdPreviewer md={introMd}></MdPreviewer>

          {/* 示例说明 */}
          <MdPreviewer md={exampleMd}></MdPreviewer>

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>
            <DivideBox width='500'
              height='200'
              direction='column'>
              <div slot='top' style={{background: '#53A4FB', width: '100%', height: '100%'}}>
                我是第一个子元素
              </div>
              <div slot='bottom' style={{background: '#F86464', width: '100%', height: '100%'}}>
                我是第二个子元素
              </div>
            </DivideBox>
          </CodePreviewer>
          <MdPreviewer md={example1}></MdPreviewer>

          {/* 示例 2 */}
          <CodePreviewer code={demo2} showCode={true}>
            <DivideBox width='500'
              height='200'
              direction='row'>
              <div slot='left' style={{width: '100%', height: '100%', margin: '30px'}}>
                我是第一个子元素
                <Input style={{width: '150px', margin: '30px 0 0 20px'}}/>
              </div>
              <div slot='right' style={{width: '100%', height: '100%', margin: '30px'}}>
                我是第二个子元素
                <br/>
                <Button type='primary'>确定</Button>
              </div>
            </DivideBox>
          </CodePreviewer>
          <MdPreviewer md={example2}></MdPreviewer>

          {/* 示例 3 */}
          <CodePreviewer code={demo3} showCode={true}>
            <DivideBox width='500'
              height='300'
              direction='row'>
              <div slot='left' style={{width: '100%', height: '100%'}}>
                <DivideBox width='100%'
                height='100%'
                direction='column'>
                  <div slot='top' style={{background: '#53A4FB', width: '100%', height: '100%'}}>
                    我是上面的子元素
                  </div>
                  <div slot='bottom' style={{background: '#F86464', width: '100%', height: '100%'}}>
                    我是下面的子元素
                  </div>
                </DivideBox>
              </div>
              <div slot='right' style={{width: '100%', height: '100%', margin: '30px'}}>
                我是右边的子元素
                <br/>
                <Button type='primary'>确定</Button>
              </div>
            </DivideBox>
          </CodePreviewer>
          <MdPreviewer md={example3}></MdPreviewer>

          {/* API说明 */}
          <MdPreviewer md={api}></MdPreviewer>
        </PreviewLayout>
      </div>
    );
  }
}
