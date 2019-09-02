import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../components/RouteViewer";
import Loading from "../components/Loading";

const IndexPage = loadable(() => import("../pages/IndexPage"), { fallback: <Loading /> });
const IntroductionPage = loadable(() => import("../pages/IntroductionPage"), { fallback: <Loading /> });
const QuicklyPage = loadable(() => import("../pages/QuicklyPage"), { fallback: <Loading /> });
const ThemePage = loadable(() => import("../pages/ThemePage"), { fallback: <Loading /> });
const HdLayoutPage = loadable(() => import("../pages/HdLayoutPage"), { fallback: <Loading /> });
const HdMasterPage = loadable(() => import("../pages/HdMasterPage"), { fallback: <Loading /> });

const routes = [
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
          }
        ]
      }
    ]
  }
];

export default routes;
