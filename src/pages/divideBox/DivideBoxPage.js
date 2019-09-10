import React, { Component } from "react";
import DivideBox from "../../../components/divideBox";
import "../../../components/divideBox/style/index";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";

// import introMd from "./md/intro.md";
// import exampleMd from "./md/examples.md";
// import example1 from "./md/example1.md";
// import example2 from "./md/example2.md";
// import api from "./md/api.md";

export default class DivideBoxPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    const demo1 = ``;

    return (
      <div style={{ padding: "2em" }}>
        <PreviewLayout>
          {/* 介绍 */}
          {/* <MdPreviewer md={introMd}></MdPreviewer> */}

          {/* 示例说明 */}
          {/* <MdPreviewer md={exampleMd}></MdPreviewer> */}

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>
            <DivideBox width='400'
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
          {/* <MdPreviewer md={example1}></MdPreviewer> */}

          {/* API说明 */}
          {/* <MdPreviewer md={api}></MdPreviewer> */}
        </PreviewLayout>
      </div>
    );
  }
}
