import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../layout/RouteViewer";
import LayoutContainer from "../layout/LayoutContainer";

import Loading from "../layout/Loading";
const HomePage = loadable(() => import("../pages/HomePage"), { fallback: <Loading /> });
const IntroductionPage = loadable(() => import("../pages/IntroductionPage"), { fallback: <Loading /> });
const QuicklyPage = loadable(() => import("../pages/QuicklyPage"), { fallback: <Loading /> });
const ThemePage = loadable(() => import("../pages/ThemePage"), { fallback: <Loading /> });
const HdLayoutPage = loadable(() => import("../pages/HdLayoutPage"), { fallback: <Loading /> });
const HdMasterPage = loadable(() => import("../pages/HdMasterPage"), { fallback: <Loading /> });
const HdFilterPage = loadable(() => import("../pages/HdFilterPage"), { fallback: <Loading /> });

const routes = [
  {
    key: "1",
    name: "首页",
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    key: "2",
    name: "文档",
    path: "/docs",
    component: RouteViewer,
    routes: [
      {
        key: "21",
        name: "介绍",
        path: "/docs/introduction",
        component: IntroductionPage
      },
      {
        key: "22",
        name: "快速上手",
        path: "/docs/quickly",
        component: QuicklyPage
      },
      {
        key: "23",
        name: "主题设置",
        path: "/docs/theme",
        component: ThemePage
      },
      {
        key: "24",
        name: "组件",
        path: "/docs/components",
        component: RouteViewer,
        routes: [
          {
            key: "241",
            name: "HdLayoutPage",
            path: "/docs/components/hd-layout",
            component: HdLayoutPage
          },
          {
            key: "242",
            name: "HdMasterPage",
            path: "/docs/components/hd-master",
            component: HdMasterPage
          },
          {
            key: "4-3",
            name: "HdFilterPage",
            path: "/docs/components/hd-filter",
            exact: true,
            component: HdFilterPage
          }
        ]
      }
    ]
  }
];

export default routes;
