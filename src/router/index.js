import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../components/RouteViewer";
import Loading from "../components/Loading";

const IntroductionPage = loadable(() => import("../pages/IntroductionPage"), { fallback: <Loading /> });
const QuicklyPage = loadable(() => import("../pages/QuicklyPage"), { fallback: <Loading /> });
const ThemePage = loadable(() => import("../pages/ThemePage"), { fallback: <Loading /> });
const HdLayoutPage = loadable(() => import("../pages/HdLayoutPage"), { fallback: <Loading /> });
const HdMasterPage = loadable(() => import("../pages/HdMasterPage"), { fallback: <Loading /> });

const HdHGroupPage = loadable(() => import("../pages/HdHGroupPage"), { fallback: <Loading /> });
const HdVGroupPage = loadable(() => import("../pages/HdVGroupPage"), { fallback: <Loading /> });
const HdPanelPage = loadable(() => import("../pages/HdPanelPage"), { fallback: <Loading /> });
const HdCodeAreaPage = loadable(() => import("../pages/HdCodeAreaPage"), { fallback: <Loading /> });

const routes = [
  {
    key: "1",
    name: "介绍",
    path: "/",
    exact: true,
    component: IntroductionPage
  },
  {
    key: "2",
    name: "快速上手",
    path: "/quickly",
    exact: true,
    component: QuicklyPage
  },
  {
    key: "3",
    name: "主题设置",
    path: "/theme",
    exact: true,
    component: ThemePage
  },
  {
    key: "4",
    name: "组件",
    path: "/components",
    component: RouteViewer,
    routes: [
      {
        key: "4-1",
        name: "HdLayoutPage",
        path: "/components/hd-layout",
        exact: true,
        component: HdLayoutPage
      },
      {
        key: "4-2",
        name: "HdMasterPage",
        path: "/components/hd-master",
        exact: true,
        component: HdMasterPage
      },
      {
        key: "4-3",
        name: "HdHGroupPage",
        path: "/components/hd-hGroup",
        exact: true,
        component: HdHGroupPage
      },
      {
        key: "4-4",
        name: "HdVGroupPage",
        path: "/components/hd-vGroup",
        exact: true,
        component: HdVGroupPage
      },
      {
        key: "4-5",
        name: "HdPanelPage",
        path: "/components/hd-panel",
        exact: true,
        component: HdPanelPage
      },
      {
        key: "4-6",
        name: "HdCodeAreaPage",
        path: "/components/hd-codeArea",
        exact: true,
        component: HdCodeAreaPage
      }
    ]
  }
];

export default routes;
