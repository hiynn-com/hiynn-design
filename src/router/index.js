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
const HdSearchForm = loadable(() => import("../pages/HdSearchFormPage"), { fallback: <Loading /> });
const HdFormModalPage = loadable(() => import("../pages/HdFormModalPage"), { fallback: <Loading /> });
const HdCardPage = loadable(() => import("../pages/HdCardPage"), { fallback: <Loading /> });
const HdHGroupPage = loadable(() => import("../pages/HdHGroupPage"), { fallback: <Loading /> });
const HdVGroupPage = loadable(() => import("../pages/HdVGroupPage"), { fallback: <Loading /> });
const HdCodeAreaPage = loadable(() => import("../pages/HdCodeAreaPage"), { fallback: <Loading /> });
const HdPanelPage = loadable(() => import("../pages/HdPanelPage"), { fallback: <Loading /> });

const ArticlePage = loadable(() => import("../pages/articlePage"), { fallback: <Loading /> });
const CommentPage = loadable(() => import("../pages/commentPage"), { fallback: <Loading /> });

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
            key: "243",
            name: "HdFilterPage",
            path: "/docs/components/hd-filter",
            component: HdFilterPage
          },
          {
            key: "244",
            name: "HdSearchForm",
            path: "/docs/components/hd-searchForm",
            component: HdSearchForm
          },
          {
            key: "245",
            name: "HdFormModalPage",
            path: "/docs/components/hd-FormModal",
            component: HdFormModalPage
          },
          {
            key: "246",
            name: "HdCardPage",
            path: "/docs/components/hd-card",
            component: HdCardPage
          },

          {
            key: "247",
            name: "HdHGroupPage",
            path: "/docs/components/hd-hgroup",
            component: HdCardPage
          },
          {
            key: "248",
            name: "HdVGroupPage",
            path: "/docs/components/hd-vgroup",
            component: HdCardPage
          },
          {
            key: "249",
            name: "HdCodeAreaPage",
            path: "/docs/components/hd-codearea",
            component: HdCardPage
          },
          {
            key: "250",
            name: "HdPanelPage",
            path: "/docs/components/hd-panel",
            component: HdCardPage
          },
          {
            key: "251",
            name: "ArticlePage",
            path: "/components/hd-article",
            component: ArticlePage
          },
          {
            key: "252",
            name: "CommentPage",
            path: "/components/hd-comment",
            component: CommentPage
          }
        ]
      }
    ]
  }
];

export default routes;
