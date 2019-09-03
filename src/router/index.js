import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../layout/RouteViewer";
import LayoutContainer from "../layout/LayoutContainer";
import Loading from "../layout/Loading";
const HomePage = loadable(() => import("../pages/home/HomePage"), { fallback: <Loading /> });
const IntroductionPage = loadable(() => import("../pages/introduction/IntroductionPage"), { fallback: <Loading /> });
const QuicklyPage = loadable(() => import("../pages/quickly/QuicklyPage"), { fallback: <Loading /> });
const ThemePage = loadable(() => import("../pages/theme/ThemePage"), { fallback: <Loading /> });
const LayoutPage = loadable(() => import("../pages/layout/LayoutPage"), { fallback: <Loading /> });
const MasterPage = loadable(() => import("../pages/master/MasterPage"), { fallback: <Loading /> });
const FilterPage = loadable(() => import("../pages/filter/FilterPage"), { fallback: <Loading /> });
const SearchForm = loadable(() => import("../pages/searchForm/SearchFormPage"), { fallback: <Loading /> });
const FormModalPage = loadable(() => import("../pages/formModal/FormModalPage"), { fallback: <Loading /> });
const CardPage = loadable(() => import("../pages/card/CardPage"), { fallback: <Loading /> });
const HGroupPage = loadable(() => import("../pages/hgroup/HGroupPage"), { fallback: <Loading /> });
const VGroupPage = loadable(() => import("../pages/vgroup/VGroupPage"), { fallback: <Loading /> });
const CodeAreaPage = loadable(() => import("../pages/codeArea/CodeAreaPage"), { fallback: <Loading /> });
const PanelPage = loadable(() => import("../pages/panel/PanelPage"), { fallback: <Loading /> });
const CodeZonePage = loadable(() => import("../pages/codeZone/CodeZonePage"), { fallback: <Loading /> });

const ArticlePage = loadable(() => import("../pages/article/ArticlePage"), { fallback: <Loading /> });
const CommentPage = loadable(() => import("../pages/comment/CommentPage"), { fallback: <Loading /> });

const FormValidationPages = loadable(() => import("../pages/formValidation/FormValidationPages"), { fallback: <Loading /> });
const Admin = loadable(() => import("../pages/admin/AdminPage"), { fallback: <Loading></Loading> });

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
            path: "/docs/components/layout",
            component: LayoutPage
          },
          {
            key: "242",
            name: "HdMasterPage",
            path: "/docs/components/master",
            component: MasterPage
          },
          {
            key: "243",
            name: "HdFilterPage",
            path: "/docs/components/filter",
            component: FilterPage
          },
          {
            key: "244",
            name: "HdSearchForm",
            path: "/docs/components/searchForm",
            component: SearchForm
          },
          {
            key: "245",
            name: "HdFormModalPage",
            path: "/docs/components/formModal",
            component: FormModalPage
          },
          {
            key: "246",
            name: "HdCardPage",
            path: "/docs/components/card",
            component: CardPage
          },

          {
            key: "247",
            name: "HdHGroupPage",
            path: "/docs/components/hgroup",
            component: HGroupPage
          },
          {
            key: "248",
            name: "HdVGroupPage",
            path: "/docs/components/vgroup",
            component: VGroupPage
          },
          {
            key: "249",
            name: "HdCodeAreaPage",
            path: "/docs/components/codearea",
            component: CodeAreaPage
          },
          {
            key: "250",
            title: "HdCodeZone",
            path: "/docs/components/codeZone",
            component: CodeZonePage
          },
          {
            key: "251",
            name: "HdPanelPage",
            path: "/docs/components/panel",
            component: PanelPage
          },
          {
            key: "252",
            name: "ArticlePage",
            path: "/docs/components/article",
            component: ArticlePage
          },
          {
            key: "253",
            name: "CommentPage",
            path: "/docs/components/comment",
            component: CommentPage
          },
          {
            key: "254",
            name: "HdAdmin",
            path: "/docs/components/admin",
            component: Admin
          },
          {
            key: "255",
            name: "HdFormValidation",
            path: "/docs/components/formValidation",
            component: FormValidationPages
          }
        ]
      }
    ]
  }
];

export default routes;
