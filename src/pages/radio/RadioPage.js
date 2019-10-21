import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdRadio from "../../../components/hd-radio";
import "../../../components/hd-radio/style";

export default class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdRadio } from "hiynn-design";

const options = [
  {name: '同比', value: '0'},
  {name: '环比', value: '1'},
];

onChange = checkedItem => {
  console.log(checkedItem);
};

<HdRadio options={this.state.options} buttonStyle="solid"/>
<HdRadio url={this.state.url} onChange={this.onChange}/>`,
      options: [
        {name: '同比', value: '0'},
        {name: '环比', value: '1'},
      ],
      url: 'http://yapi.demo.qunar.com/mock/11526/getRadioOptions',
    };
  }

  onChange = checkedItem => {
    console.log(checkedItem);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdRadio options={this.state.options} buttonStyle="solid"/>
          <br/><br/>
          <button onClick={() => {
            this.setState({
              options: [...this.state.options, {name: `测试`, value: `${Math.random()}`}],
            });
          }}
          >Change Options
          </button>
          <br/><br/>
          <HdRadio url={this.state.url} onChange={this.onChange}/>
          <br/><br/>
          <button onClick={() => {
            this.setState({
              url: `${this.state.url}?t=${Date.now()}`,
            });
          }}
          >Change Url
          </button>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
