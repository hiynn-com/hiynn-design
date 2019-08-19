import React, { Component } from "react";
import { Menu, Icon } from "antd";
import HdLayout from "../../components/hd-layout";
import HdMenus from "../../components/hd-menus";
import "../../components/hd-layout/style";
import logo from "../assets/images/hiy_logo.png";

class HdLayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutData: {
        sider: {
          width: 218,
          theme: "light",
          breakpoint: "lg"
        },
        logos: <Icon type="logout" />,
        title: "海云前端标准平台",
        subTitle: "测试"
      },
      menus: [
        {
          id: 1,
          title: "介绍",
          icon: null,
          url: "/introduction",
          show: true,
          order: 1
        },
        {
          id: 2,
          title: "快速上手",
          icon: null,
          url: "/quickly",
          show: true,
          order: 2
        },
        {
          id: 3,
          title: "主题设置",
          icon: null,
          url: "/theme-setting",
          show: true,
          order: 3
        },
        {
          id: 4,
          title: " 组件",
          icon: null,
          url: "/components",
          show: true,
          order: 4,
          children: [
            {
              id: 41,
              title: "HdLayout",
              icon: null,
              url: "/hd-layout",
              show: true,
              order: 1
            },
            {
              id: 42,
              title: "HdMaster",
              icon: null,
              url: "/hd-master",
              show: true,
              order: 2
            }
          ]
        }
      ]
    };
  }
  render() {
    return <HdLayout initData={this.state.layoutData} menus={<HdMenus menus={this.state.menus} />} />;
  }
}

export default HdLayoutPage;
