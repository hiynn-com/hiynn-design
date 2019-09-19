import React, { Component } from "react";
import HdRanking from "../../../components/ranking";
import "../../../components/ranking/style";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

export default class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "北京",
          value: 1000
        },
        {
          name: "上海",
          value: 900
        },
        {
          name: "广州",
          value: 800
        },
        {
          name: "深圳",
          value: 700
        },
        {
          name: "南京",
          value: 600
        },
        {
          name: "苏州",
          value: 500
        },
        {
          name: "常州",
          value: 400
        },
        {
          name: "杭州",
          value: 300
        },
        {
          name: "无锡",
          value: 200
        },
        {
          name: "海云",
          value: 1
        }
      ],
      code1: `
      import { HdRanking } from 'hiynn-design';
      constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              name: "北京",
              value: 1000
            },
            {
              name: "上海",
              value: 900
            },
            {
              name: "广州",
              value: 800
            },
            {
              name: "深圳",
              value: 700
            },
            {
              name: "南京",
              value: 600
            },
            {
              name: "苏州",
              value: 500
            },
            {
              name: "常州",
              value: 400
            },
            {
              name: "杭州",
              value: 300
            },
            {
              name: "无锡",
              value: 200
            },
            {
              name: "海云",
              value: 1
            }
          ]
        };
      }
      const style = {
        height: "300px",
        width: "200px",
        border: "1px solid #9198A7",
        fontSize: "16px"
      };
      <HdRanking data={this.state.data} style={style}></HdRanking>
      `,
      code2: `
      import { HdRanking } from 'hiynn-design';
      constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              name: "北京",
              value: 1000
            },
            {
              name: "上海",
              value: 900
            },
            {
              name: "广州",
              value: 800
            },
            {
              name: "深圳",
              value: 700
            },
            {
              name: "南京",
              value: 600
            },
            {
              name: "苏州",
              value: 500
            },
            {
              name: "常州",
              value: 400
            },
            {
              name: "杭州",
              value: 300
            },
            {
              name: "无锡",
              value: 200
            },
            {
              name: "海云",
              value: 1
            }
          ]
        };
      }
      const style = {
        height: "300px",
        width: "200px",
        border: "1px solid #9198A7",
        fontSize: "16px"
      };
      <HdRanking data={this.state.data} showTop  style={style}></HdRanking>

      `,
      code3: `
      import { HdRanking } from 'hiynn-design';
      constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              name: "北京",
              value: 1000
            },
            {
              name: "上海",
              value: 900
            },
            {
              name: "广州",
              value: 800
            },
            {
              name: "深圳",
              value: 700
            },
            {
              name: "南京",
              value: 600
            },
            {
              name: "苏州",
              value: 500
            },
            {
              name: "常州",
              value: 400
            },
            {
              name: "杭州",
              value: 300
            },
            {
              name: "无锡",
              value: 200
            },
            {
              name: "海云",
              value: 1
            }
          ]
        };
      }
      const style = {
        height: "300px",
        width: "200px",
        border: "1px solid #9198A7",
        fontSize: "16px"
      };
      <HdRanking data={this.state.data} showTop corner style={style}></HdRanking>

      `
    };
  }

  componentDidMount() {}

  render() {
    const style = {
      height: "300px",
      width: "200px",
      border: "1px solid #E8E8E8",
      fontSize: "16px"
    };
    /**
     * data 列表数据
     * corner 四个角样式
     * showTop 控制是否显示top
     */
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code1} showCode={true}>
          <HdRanking data={this.state.data} style={style}></HdRanking>
        </CodePreviewer>
        <CodePreviewer code={this.state.code2} showCode={true}>
          <HdRanking data={this.state.data} showTop style={style}></HdRanking>
        </CodePreviewer>
        <CodePreviewer code={this.state.code3} showCode={true}>
          <HdRanking data={this.state.data} corner showTop style={style}></HdRanking>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
