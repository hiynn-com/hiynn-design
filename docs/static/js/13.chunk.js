(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./components/article/demo/index.js":function(e,t,n){"use strict";n("./node_modules/antd/es/divider/style/css.js");var a=n("./node_modules/antd/es/divider/index.js"),s=(n("./node_modules/antd/es/icon/style/css.js"),n("./node_modules/antd/es/icon/index.js")),o=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=n.n(o),r=n("./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),u=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=n.n(u),p=n("./node_modules/@babel/runtime/helpers/inherits.js"),v=n.n(p),h=n("./node_modules/react/index.js"),f=n.n(h),b=function(e){function t(e){var n;return l()(this,t),(n=d()(this,m()(t).call(this,e))).entGoog=function(){n.setState(function(e){return{voteStatus:!e.voteStatus}},function(){n.props.giveLike(n.state.voteStatus)})},n.state={voteStatus:!1,data:{title:null,blockName:null,ownerName:null,viewCount:null,replyCount:null,voteCount:null,creationDate:null,content:null}},n}return v()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.setState({voteStatus:this.props.voteStatus,data:this.props.data})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props!=e&&this.setState({voteStatus:e.voteStatus,data:e.data})}},{key:"render",value:function(){var e=this.props.data,t=this.state.voteStatus;return f.a.createElement("div",{className:"article-container"},f.a.createElement("h1",null,e.title?e.title:""),f.a.createElement("div",{className:"subheader"},e.blockName?f.a.createElement("span",null,"板块: ",e.blockName):"",e.ownerName?f.a.createElement("span",null,"作者: ",e.ownerName):"",e.viewCount?f.a.createElement("span",null,f.a.createElement(s.a,{type:"eye"}),f.a.createElement("span",null,e.viewCount)):"",e.replyCount?f.a.createElement("span",null,f.a.createElement(s.a,{type:"message"}),f.a.createElement("span",null,e.replyCount)):"",e.voteCount?f.a.createElement("span",null,f.a.createElement(s.a,{type:"like"}),f.a.createElement("span",null,e.voteCount)):"",e.creationDate?f.a.createElement("span",null,"发表于: ",e.creationDate):""),f.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.content}}),f.a.createElement(a.a,{style:{height:"2px"}}),f.a.createElement("div",{className:"ent-good"},f.a.createElement("div",null,f.a.createElement("div",{onClick:this.entGoog.bind(this)},f.a.createElement(s.a,{type:"like",theme:t?"filled":"outlined"}),f.a.createElement("p",null,t?"已点赞":"点赞")),f.a.createElement("p",null,e.voteCount,"人已赞"))))}}]),t}(h.Component);t.a=b},"./components/article/demo/style/index.pcss":function(e,t,n){},"./node_modules/antd/es/divider/index.js":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),s=n("./node_modules/classnames/index.js"),o=n.n(s),l=n("./node_modules/antd/es/config-provider/index.js");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n};t.a=function(e){return a.createElement(l.a,null,function(t){var n,s=t.getPrefixCls,l=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,m=e.orientation,p=void 0===m?"center":m,v=e.className,h=e.children,f=e.dashed,b=c(e,["prefixCls","type","orientation","className","children","dashed"]),y=s("divider",l),C=p.length>0?"-".concat(p):p,j=o()(v,y,"".concat(y,"-").concat(u),(i(n={},"".concat(y,"-with-text").concat(C),h),i(n,"".concat(y,"-dashed"),!!f),n));return a.createElement("div",r({className:j},b,{role:"separator"}),h&&a.createElement("span",{className:"".concat(y,"-inner-text")},h))})}},"./node_modules/antd/es/divider/style/css.js":function(e,t,n){"use strict";n("./node_modules/antd/es/style/index.css"),n("./node_modules/antd/es/divider/style/index.css")},"./node_modules/antd/es/divider/style/index.css":function(e,t,n){},"./src/pages/article/ArticlePage.js":function(e,t,n){"use strict";n.r(t);n("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var a=n("./node_modules/react-code-previewer/es/preview-layout/index.js"),s=(n("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),n("./node_modules/react-code-previewer/es/code-previewer/index.js")),o=(n("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),n("./node_modules/react-code-previewer/es/md-previewer/index.js")),l=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=n.n(l),i=n("./node_modules/@babel/runtime/helpers/createClass.js"),c=n.n(i),d=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=n.n(d),m=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=n.n(m),v=n("./node_modules/@babel/runtime/helpers/inherits.js"),h=n.n(v),f=n("./node_modules/react/index.js"),b=n.n(f),y=n("./components/article/demo/index.js"),C=(n("./components/article/demo/style/index.pcss"),function(e){function t(e){var n;return r()(this,t),(n=u()(this,p()(t).call(this,e))).giveLike=function(e){var t=n.state.data;!0===e?t.voteCount+=1:t.voteCount-=1,n.setState({data:t,voteStatus:e})},n.state={voteStatus:!1,data:{title:"海云标准化平台",blockName:"标准化",ownerName:"cxd",viewCount:100,replyCount:30,voteCount:50,creationDate:"2019-01-01",content:"测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容试内容测试内容测试内容"}},n}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.voteStatus;return b.a.createElement(a.a,null,b.a.createElement(o.a,{md:'# Article\n\n\x3c!-- <h2 id="Usage"><span>Usage</span> <a href="#Usage">#</a></h2> --\x3e\n'}),b.a.createElement(s.a,{code:"import React, { Component } from \"react\";\nconst { HdArticle } from \"hiynn-design\";\nimport 'hiynn-design/dist/hiynn-design.css';\n\nclass HdArticle extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      voteStatus: false,\n      data: {\n        title: '海云标准化平台',\n        blockName: '标准化',\n        ownerName: 'cxd',\n        viewCount: 100,\n        replyCount: 30,\n        voteCount: 50,\n        creationDate: '2019-01-01',\n        content: '测试内容测试内容测试内容'\n      }\n    };\n  }\n  giveLike = (vote) => {\n    let data = this.state.data;\n    if (vote === true) {\n      data.voteCount += 1;\n    } else {\n      data.voteCount -= 1;\n    }\n    this.setState({ data, voteStatus: vote });\n  }\n  render() {\n    const { data, voteStatus } = this.state;\n    return (\n          <HdArticle\n            data={data}\n            voteStatus={voteStatus}\n            giveLike={this.giveLike}\n          />\n    );\n  }\n}\n\nexport default HdArticle;\n",showCode:!0},b.a.createElement(y.a,{data:t,voteStatus:n,giveLike:this.giveLike})),b.a.createElement(o.a,{md:"# Api\n\n| 参数     |          | 说明     | 类型 | 默认值 | 版本 |\n| --------|----       | ------- | ------- | ------- | ------- |\n| data    |           | 需要传入的JSON数据 | object  | null     | v0.24  |\n|         |title      | 文章标题 | string    | null       | v0.24       |\n|         |blockName  | 板块名称 | string | null       | v0.24        |\n|         |ownerName  | 作者名字 | string | null       | v0.24        |\n|         |viewCount  | 浏览量 | number   | null       | v0.24        |\n|         |replyCount  | 回复量 | number  | null       | v0.24        |\n|         |voteCount   | 点赞数 | number   | null       | v0.24       |\n|         |creationDate| 文章创建时间 | string    | null       | v0.24 |\n|         |content     | 文章内容 | html     | null       | v0.24      |\n| voteStatus|         | 文章当前的点赞状态      | boolean     | false   | v0.24      |\n| giveLike  |          | 点赞后的回调函数,返回值ture表示点赞，false表示取消点赞|function|(vote) => {}| v0.24|\n"}))}}]),t}(f.Component));t.default=C}}]);
//# sourceMappingURL=13.chunk.js.map