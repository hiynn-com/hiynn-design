import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../layout/RouteViewer";
import LayoutContainer from "../layout/LayoutContainer";

import Loading from "../layout/Loading";
const HomePage = loadable(() => import("../pages/home/HomePage"), { fallback: <Loading /> });
const IntroductionPage = loadable(() => import("../pages/introduction/IntroductionPage"), { fallback: <Loading /> });
const QuicklyPage = loadable(() => import("../pages/quickly/QuicklyPage"), { fallback: <Loading /> });
const ThemePage = loadable(() => import("../pages/theme/ThemePage"), { fallback: <Loading /> });
const HdLayoutPage = loadable(() => import("../pages/layout/HdLayoutPage"), { fallback: <Loading /> });
const HdMasterPage = loadable(() => import("../pages/master/HdMasterPage"), { fallback: <Loading /> });
const HdFilterPage = loadable(() => import("../pages/filter/HdFilterPage"), { fallback: <Loading /> });
const HdSearchForm = loadable(() => import("../pages/searchForm/HdSearchFormPage"), { fallback: <Loading /> });
const HdFormModalPage = loadable(() => import("../pages/formModal/HdFormModalPage"), { fallback: <Loading /> });
const HdCardPage = loadable(() => import("../pages/card/HdCardPage"), { fallback: <Loading /> });
const HdHGroupPage = loadable(() => import("../pages/group/HdHGroupPage"), { fallback: <Loading /> });
const HdVGroupPage = loadable(() => import("../pages/group/HdVGroupPage"), { fallback: <Loading /> });
const HdCodeAreaPage = loadable(() => import("../pages/codeArea/HdCodeAreaPage"), { fallback: <Loading /> });
const HdPanelPage = loadable(() => import("../pages/panel/HdPanelPage"), { fallback: <Loading /> });
const HdCodeZonePage = loadable(() => import("../pages/codeZone/HdCodeZonePage"), { fallback: <Loading /> });

const ArticlePage = loadable(() => import("../pages/article/articlePage"), { fallback: <Loading /> });
const CommentPage = loadable(() => import("../pages/comment/commentPage"), { fallback: <Loading /> });

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
            component: HdHGroupPage
          },
          {
            key: "248",
            name: "HdVGroupPage",
            path: "/docs/components/hd-vgroup",
            component: HdVGroupPage
          },
          {
            key: "249",
            name: "HdCodeAreaPage",
            path: "/docs/components/hd-codearea",
            component: HdCodeAreaPage
          },
          {
            key: "250",
            title: "HdCodeZone",
            path: "/docs/components/hd-codeZone",
            component: HdCodeZonePage
          },
          {
            key: "251",
            name: "HdPanelPage",
            path: "/docs/components/hd-panel",
            component: HdCardPage
          },
          {
            key: "252",
            name: "ArticlePage",
            path: "/docs/components/hd-article",
            component: ArticlePage
          },
          {
            key: "253",
            name: "CommentPage",
            path: "/docs/components/hd-comment",
            component: CommentPage
          }
        ]
      }
    ]
  }
];

export default routes;
