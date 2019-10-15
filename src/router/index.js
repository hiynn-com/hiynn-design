import React from "react";
import loadable from "@loadable/component";
import RouteViewer from "../layout/RouteViewer";
import LayoutContainer from "../layout/LayoutContainer";
import Loading from "../layout/Loading";
const HomePage = loadable(() => import("../pages/home/index"), { fallback: <Loading /> });
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
const Ranking = loadable(() => import("../pages/ranking/RankingPage"), { fallback: <Loading></Loading> });
const DatePicker = loadable(() => import("../pages/datePicker/DatePickerPage"), { fallback: <Loading></Loading> });
const Tab = loadable(() => import("../pages/tab/TabPage"), { fallback: <Loading></Loading> });
const DropDown = loadable(() => import("../pages/dropDown/DropDown"), { fallback: <Loading></Loading> });
const Select = loadable(() => import("../pages/select/Select"), { fallback: <Loading /> });

const PiePage = loadable(() => import("../pages/pie/PiePage"), { fallback: <Loading></Loading> });
const LinePage = loadable(() => import("../pages/line/linePage"), { fallback: <Loading></Loading> });
const BarPage = loadable(() => import("../pages/bar/barPage"), { fallback: <Loading></Loading> });
const StackPage = loadable(() => import("../pages/stack/stackPage"), { fallback: <Loading></Loading> });

const ButtonPage = loadable(() => import("../pages/button/ButtonPage"), { fallback: <Loading/> });
const RadioPage = loadable(() => import("../pages/radio/RadioPage"), { fallback: <Loading/> });

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
          },
          // 饼图
          {
            key: "256",
            name: "HdPie",
            path: "/docs/components/Pie",
            component: PiePage
          },
          // 折线图
          {
            key: "257",
            name: "HdLine",
            path: "/docs/components/Line",
            component: LinePage
          },
          // 柱状图
          {
            key: "258",
            name: "HdLine",
            path: "/docs/components/Bar",
            component: BarPage
          },
          // 堆叠图
          {
            key: "259",
            name: "HdLine",
            path: "/docs/components/Stack",
            component: StackPage
          },
          {
            key: "260",
            name: "RankingPage",
            path: "/docs/components/ranking",
            component: Ranking
          },
          {
            key: "261",
            name: "DatePickerPage",
            path: "/docs/components/datePicker",
            component: DatePicker
          },
          {
            key: "262",
            name: "TabPage",
            path: "/docs/components/Tab",
            component: Tab
          },
          {
            key: "263",
            name: "DropDown",
            path: "/docs/components/dropdown",
            component: DropDown
          },
          {
            key: "264",
            name: "Select",
            path: "/docs/components/select",
            component: Select
          },
          {
            key: "265",
            name: "HdButtonPage",
            path: "/docs/components/button",
            component: ButtonPage
          },
          {
            key: "266",
            name: "HdRadioPage",
            path: "/docs/components/radio",
            component: RadioPage
          }
        ]
      }
    ]
  }
];

export default routes;
