(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/pages/line/linePage.js":function(e,n,t){"use strict";t.r(n);t("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var r=t("./node_modules/react-code-previewer/es/preview-layout/index.js"),a=(t("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),t("./node_modules/react-code-previewer/es/code-previewer/index.js")),i=(t("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),t("./node_modules/react-code-previewer/es/md-previewer/index.js")),l=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=t.n(l),d=t("./node_modules/@babel/runtime/helpers/createClass.js"),o=t.n(d),c=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=t.n(c),p=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=t.n(p),g=t("./node_modules/@babel/runtime/helpers/inherits.js"),h=t.n(g),y=t("./node_modules/react/index.js"),w=t.n(y),b=t("./components/echars/index.js"),v=function(e){function n(){return s()(this,n),m()(this,u()(n).apply(this,arguments))}return h()(n,e),o()(n,[{key:"render",value:function(){return w.a.createElement(r.a,null,w.a.createElement(i.a,{md:'# hd-line\n\n提供折线图基础组件的封装,以及自定义配置\n\n## 安装\n\n```javascript\nimport { HdLine } from "hiynn-design";\n```\n\n## 使用\n\n使用者需传入对应的属性,用于图形的可视化渲染\n'}),w.a.createElement(a.a,{code:"<HdLine\n                    typeName=\"line\"\n                    title=\"这是测试的标题\"\n                    titleSubtext=\"这是副标题\"\n                    titleX=\"left\"\n                    titleTop=\"0\"\n                    legendOrient=\"vertical\"\n                    xAxisData={['1月', '2月', '3月', '4月', '5月', '6月', '7月']}\n                    legendData={['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']}\n                    legendLeft=\"right\"\n                    seriesData={[\n                        {\n                            name: '直接访问',\n                            type: 'line',\n                            data: [320, 332, 301, 334, 390, 330, 320]\n                        },\n                        {\n                            name: '邮件营销',\n                            type: 'line',\n                            data: [120, 132, 101, 134, 90, 230, 210]\n                        },\n                        {\n                            name: '联盟广告',\n                            type: 'line',\n                            data: [220, 182, 191, 234, 290, 330, 310]\n                        },\n                        {\n                            name: '视频广告',\n                            type: 'line',\n                            data: [150, 232, 201, 154, 190, 330, 410]\n                        },\n                    ]}\n                    width={\"100%\"}\n                    height={\"300\"}\n                />"},w.a.createElement(b.a,{typeName:"line",title:"这是测试的标题",titleSubtext:"这是副标题",textFontSize:"22",titleX:"left",titleTop:"0",legendOrient:"vertical",xAxisData:["1月","2月","3月","4月","5月","6月","7月"],legendData:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"],legendLeft:"right",dataZoom:!0,seriesData:[{name:"直接访问",type:"line",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"line",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",data:[150,232,201,154,190,330,410]}],width:"100%",height:"300"})),w.a.createElement(i.a,{md:"## Api\n\n| 参数     | 说明                                   | 类型          | 默认值   | 可选值 |\n| :------- | :-------------------------------------| :-----------: | :------: |   :------:     |\n| width    | 设置图表宽度                           | String/Number |  100%      |     |\n| height   | 设置图表高度                           | String/Number |  100%      |     |\n| title    | 图表的标题                             | String        |  -     |         |\n| titleSubtext     | 图表的副标题                   | String        |  -  |            |\n| titleX     | 标题的横轴位置                        | String        |  -      | left\\|center\\|right       |\n| legendData | 图例数据                       | Array        |  -      |              |   \n| xAxisData | 图例X轴横坐标数据                       | Array        |  -      |              |   \n| legendOrient | 图例布局分格                       | String        |  vertical      |      vertical\\|horizontal       |   \n| legendLeft | 图例布局位置                       | String        |  left     |    left\\|center\\|right          |   \n| seriesName | 浮动提示标题                       | String        |  -      |              |       \n| seriesData | 图表渲染所需数据                       | Array        |  -      |              |   \n| fetchUrl | 图表api形式请求数据                       | String        |  -      |              |   \n| dataZoom | 是否支持区域拖拽                       | Boolean        |  false     |              |   \n| textTitleColor | 图表主标题颜色                       | String        |  -      |              |  \n| backgroundColor | 图表背景颜色                       | RGB        |  -      |              |  \n| textFontSize | 图表主标题字体大小                       | Number        |  18      |              |  \n\n\n\n\n\n\n\n"}))}}]),n}(y.Component);n.default=v}}]);
//# sourceMappingURL=36.chunk.js.map