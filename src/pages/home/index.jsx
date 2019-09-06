/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Nav0 from "./Nav0";
import Banner3 from "./Banner3";
import Content0 from "./Content0";
import Content11 from "./Content11";
import Footer0 from "./Footer0";

import { Nav00DataSource, Banner30DataSource, Content00DataSource, Content110DataSource, Footer00DataSource } from "./data.source";
import "./less/antMotionStyle.less";
import layoutAction from "../../redux/layout/layoutAction";
import { connect } from "react-redux";

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const { location } = window;

@connect(
  null,
  { saveMenuIndex: layoutAction.saveMenuIndex }
)
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }
  gotoDocs = () => {
    //跳转到文档
    this.props.saveMenuIndex(["1", "4"]);
  };
  render() {
    const children = [
      <Nav0 id="Nav0_0" key="Nav0_0" dataSource={Nav00DataSource} isMobile={this.state.isMobile} docs={() => this.gotoDocs()} />,
      <Banner3 id="Banner3_0" key="Banner3_0" dataSource={Banner30DataSource} isMobile={this.state.isMobile} docs={() => this.gotoDocs()} />,
      <Content0 id="Content0_0" key="Content0_0" dataSource={Content00DataSource} isMobile={this.state.isMobile} />,
      <Content11 id="Content11_0" key="Content11_0" dataSource={Content110DataSource} isMobile={this.state.isMobile} />,
      <Footer0 id="Footer0_0" key="Footer0_0" dataSource={Footer00DataSource} isMobile={this.state.isMobile} />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
