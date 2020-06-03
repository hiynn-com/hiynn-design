import React, { Component } from "react";
import { EcharsTitle } from 'hiynn-design';
import 'hiynn-design/dist/hiynn-design.css';

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleContent: '测试标题',
      titleStyle: {
        color: '#14f1e9',
      },
    };
  }
   
  render() {
    return (
          <EcharsTitle
            titleContent={this.state.titleContent} //要展示的标题内容
            titleStyle={this.state.titleStyle} //要展示的标题颜色
          />
    );
  }
}
export default DemoPage;
