(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./components/ranking/index.js":function(n,e,a){"use strict";var t=a("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=a.n(t),o=a("./node_modules/@babel/runtime/helpers/createClass.js"),r=a.n(o),l=a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),i=a.n(l),d=a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=a.n(d),u=a("./node_modules/@babel/runtime/helpers/inherits.js"),c=a.n(u),p=a("./node_modules/axios/index.js"),h=a.n(p),v=a("./node_modules/react/index.js"),g=a.n(v),k=function(n){function e(n){var a;return s()(this,e),a=i()(this,m()(e).call(this,n)),console.log(n.url),a.state={data:""},a}return c()(e,n),r()(e,[{key:"componentWillMount",value:function(){var n=this;console.log(this.props.url),this.props.url&&h.a.get(this.props.url).then(function(e){n.setState({data:e.data.data},function(){console.log(n.state.data)})}).catch(function(n){console.log(n)})}},{key:"render",value:function(){var n=this.props,e=n.data,a=n.style,t=n.showTop,s=n.corner;n.url;return g.a.createElement("div",{className:"ranking",style:a},e&&!this.state.data?e.map(function(n,e){return g.a.createElement("div",{key:e},g.a.createElement("span",{style:t?{width:"35%"}:{width:"50%"},ref:"rankingname",className:"ranking-name"},n.name," :"," "),g.a.createElement("span",{className:"ranking-value"},n.value),t?g.a.createElement("span",{className:"ranking-top ranking-top".concat(e)},"Top",e+1):"")}):"",this.state.data?this.state.data.map(function(n,e){return g.a.createElement("div",{key:e},g.a.createElement("span",{style:t?{width:"35%"}:{width:"50%"},ref:"rankingname",className:"ranking-name"},n.name," :"," "),g.a.createElement("span",{className:"ranking-value"},n.value),t?g.a.createElement("span",{className:"ranking-top ranking-top".concat(e)},"Top",e+1):"")}):"",s?g.a.createElement("span",{className:"corner-top-left"}):"",s?g.a.createElement("span",{className:"corner-top-right"}):"",s?g.a.createElement("span",{className:"corner-bottom-left"}):"",s?g.a.createElement("span",{className:"corner-bottom-right"}):"")}}]),e}(v.Component);e.a=k},"./components/ranking/style/index.pcss":function(n,e,a){},"./src/pages/ranking/RankingPage.js":function(n,e,a){"use strict";a.r(e);a("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var t=a("./node_modules/react-code-previewer/es/preview-layout/index.js"),s=(a("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),a("./node_modules/react-code-previewer/es/code-previewer/index.js")),o=(a("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),a("./node_modules/react-code-previewer/es/md-previewer/index.js")),r=a("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=a.n(r),i=a("./node_modules/@babel/runtime/helpers/createClass.js"),d=a.n(i),m=a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=a.n(m),c=a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=a.n(c),h=a("./node_modules/@babel/runtime/helpers/inherits.js"),v=a.n(h),g=a("./node_modules/react/index.js"),k=a.n(g),y=a("./components/ranking/index.js");a("./components/styles/index.pcss"),a("./components/ranking/style/index.pcss");a.d(e,"default",function(){return w});var w=function(n){function e(n){var a;return l()(this,e),(a=u()(this,p()(e).call(this,n))).state={data:[{name:"北京",value:1e3},{name:"上海",value:900},{name:"广州",value:800},{name:"深圳",value:700},{name:"南京",value:600},{name:"苏州",value:500},{name:"常州",value:400},{name:"杭州",value:300},{name:"无锡",value:200},{name:"海云",value:1}],code1:'\n      import { HdRanking } from \'hiynn-design\';\n      constructor(props) {\n        super(props);\n        this.state = {\n          data: [\n            {\n              name: "北京",\n              value: 1000\n            },\n            {\n              name: "上海",\n              value: 900\n            },\n            {\n              name: "广州",\n              value: 800\n            },\n            {\n              name: "深圳",\n              value: 700\n            },\n            {\n              name: "南京",\n              value: 600\n            },\n            {\n              name: "苏州",\n              value: 500\n            },\n            {\n              name: "常州",\n              value: 400\n            },\n            {\n              name: "杭州",\n              value: 300\n            },\n            {\n              name: "无锡",\n              value: 200\n            },\n            {\n              name: "海云",\n              value: 1\n            }\n          ]\n        };\n      }\n      const style = {\n        height: "300px",\n        width: "200px",\n        border: "1px solid #9198A7",\n        fontSize: "16px"\n      };\n      <HdRanking data={this.state.data} style={style}></HdRanking>\n      ',code2:'\n      import { HdRanking } from \'hiynn-design\';\n      constructor(props) {\n        super(props);\n        this.state = {\n          data: [\n            {\n              name: "北京",\n              value: 1000\n            },\n            {\n              name: "上海",\n              value: 900\n            },\n            {\n              name: "广州",\n              value: 800\n            },\n            {\n              name: "深圳",\n              value: 700\n            },\n            {\n              name: "南京",\n              value: 600\n            },\n            {\n              name: "苏州",\n              value: 500\n            },\n            {\n              name: "常州",\n              value: 400\n            },\n            {\n              name: "杭州",\n              value: 300\n            },\n            {\n              name: "无锡",\n              value: 200\n            },\n            {\n              name: "海云",\n              value: 1\n            }\n          ]\n        };\n      }\n      const style = {\n        height: "300px",\n        width: "200px",\n        border: "1px solid #9198A7",\n        fontSize: "16px"\n      };\n      <HdRanking data={this.state.data} showTop  style={style}></HdRanking>\n\n      ',code3:'\n      import { HdRanking } from \'hiynn-design\';\n      constructor(props) {\n        super(props);\n        this.state = {\n          data: [\n            {\n              name: "北京",\n              value: 1000\n            },\n            {\n              name: "上海",\n              value: 900\n            },\n            {\n              name: "广州",\n              value: 800\n            },\n            {\n              name: "深圳",\n              value: 700\n            },\n            {\n              name: "南京",\n              value: 600\n            },\n            {\n              name: "苏州",\n              value: 500\n            },\n            {\n              name: "常州",\n              value: 400\n            },\n            {\n              name: "杭州",\n              value: 300\n            },\n            {\n              name: "无锡",\n              value: 200\n            },\n            {\n              name: "海云",\n              value: 1\n            }\n          ]\n        };\n      }\n      const style = {\n        height: "300px",\n        width: "200px",\n        border: "1px solid #9198A7",\n        fontSize: "16px"\n      };\n      <HdRanking data={this.state.data}  url={"http://yapi.demo.qunar.com/mock/93290/xushanpei/test"} showTop corner style={style}></HdRanking>\n\n      '},a}return v()(e,n),d()(e,[{key:"render",value:function(){var n={height:"300px",width:"200px",border:"1px solid #E8E8E8",fontSize:"16px"};return k.a.createElement(t.a,null,k.a.createElement(o.a,{md:'# HdRanking 组件\n- 具有数据收集、展现数据排行情况\n- 采用 flex 布局 数据排列自动适应宽高\n\n\n#\n\n#\n\n## 何时使用\n\n- 多用于可视化项目中数据 top 排行\n\n- 直观表现数据排行情况\n\n## 注意\n\n- 组件内不提供排序方法，如需要对数据排序，请在传入 <a href="#data">data</a> 前进行排序\n\n#\n\n#\n\n## 代码演示 :\n'}),k.a.createElement(s.a,{code:this.state.code1,showCode:!0},k.a.createElement(y.a,{data:this.state.data,style:n})),k.a.createElement(s.a,{code:this.state.code2,showCode:!0},k.a.createElement(y.a,{data:this.state.data,showTop:!0,style:n})),k.a.createElement(s.a,{code:this.state.code3,showCode:!0},k.a.createElement(y.a,{data:this.state.data,url:"http://yapi.demo.qunar.com/mock/93290/xushanpei/test",corner:!0,showTop:!0,style:n})),k.a.createElement(o.a,{md:"## Api :\n\n### HdRanking\n\n| 参数    | 说明                                                  | 类型    | 默认值 | 版本 |\n| ------- | ----------------------------------------------------- | ------- | ------ | ---- |\n| data    | 数据源                                                | Array[] | -      | -    |\n| url     | 传入接口url(同时设置data 和 url 默认显示 url返回的值) | String  | -      | -    |\n| showTop | 控制 top 是否显示                                     | Boolean | false  | -    |\n| corner  | 控制四个角样式是否显示                                | Boolean | false  | -    |\n| style   | 样式调整                                              | Object  | {}     | -    |\n\n### data\n\n| 参数  | 说明  | 类型   | 默认值 | 版本 |\n| ----- | ----- | ------ | ------ | ---- |\n| name  | name  | String | -      | -    |\n| value | value | number | -      | -    |\n\n\n\n\n"}))}}]),e}(g.Component)}}]);
//# sourceMappingURL=30.chunk.js.map