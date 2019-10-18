import React, { Component } from "react";
import HdTab from "../../../components/tab";
import "../../../components/tab/style";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    name: i + 1,
    render: () => {
      return <div>{`第${i + 1}个tab`}</div>;
    }
  });
}

export default class TabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code1: `
      import { HdTab } from 'hiynn-design';
      const data = [];
        for (let i = 0; i < 15; i++) {
          data.push({
            name: i + 1,
            render: () => {
              return <div>{第$ {i + 1}个tab}</div>;
            }
          });
        }
      
      callback = key => {
        console.log("点击回调对应的值", key);
      };
      onTabClick = e => {
        console.log("点击tab回调", e);
      };
      onNextClick = e => {
        console.log("Next回调", e);
      };
      onPrevClick = e => {
        console.log("Prev回调", e);
      };

      <HdTab 
        data={data} 
        forceRender={true} 
        onTabClick={this.onTabClick} 
        onNextClick={this.onNextClick} 
        onChange={this.callback}
        onPrevClick={this.onPrevClick}>
      </HdTab>
      `,
      code2: `
      import { HdTab } from 'hiynn-design';
      const data = [];
        for (let i = 0; i < 15; i++) {
          data.push({
            name: i + 1,
            render: () => {
              return <div>{第$ {i + 1}个tab}</div>;
            }
          });
        }

      callback = key => {
        console.log("点击回调对应的值", key);
      };
      onTabClick = e => {
        console.log("点击tab回调", e);
      };
      onNextClick = e => {
        console.log("Next回调", e);
      };
      onPrevClick = e => {
        console.log("Prev回调", e);
      };
      
      <HdTab 
        animated={false}
        size={"large"}
        data={data} 
        forceRender={true} 
        onTabClick={this.onTabClick} 
        onNextClick={this.onNextClick} 
        onChange={this.callback}
        onPrevClick={this.onPrevClick}>
      </HdTab>

      `
    };
  }
  callback = key => {
    console.log("点击回调对应的值", key);
  };
  onTabClick = e => {
    console.log("点击tab回调", e);
  };
  onNextClick = e => {
    console.log("Next回调", e);
  };
  onPrevClick = e => {
    console.log("Prev回调", e);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code1} showCode={true}>
          <HdTab data={data} forceRender={true} onTabClick={this.onTabClick} onNextClick={this.onNextClick} onChange={this.callback} onPrevClick={this.onPrevClick}></HdTab>
        </CodePreviewer>
        <CodePreviewer code={this.state.code2} showCode={true}>
          <HdTab
            animated={false}
            size={"large"}
            data={data}
            forceRender={true}
            onTabClick={this.onTabClick}
            onNextClick={this.onNextClick}
            callback={this.callback}
            onPrevClick={this.onPrevClick}
          ></HdTab>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
