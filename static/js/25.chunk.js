(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./components/hgroup/index.js":function(e,t,n){"use strict";n.d(t,"a",function(){return z});var s,r,o,a=n("./node_modules/@babel/runtime/helpers/extends.js"),i=n.n(a),l=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),c=n.n(l),u=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),d=n.n(u),p=n("./node_modules/@babel/runtime/helpers/createClass.js"),h=n.n(p),m=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),g=n.n(m),v=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=n.n(v),b=n("./node_modules/@babel/runtime/helpers/inherits.js"),f=n.n(b),w=n("./node_modules/react/index.js"),j=n.n(w),k=n("./node_modules/prop-types/index.js"),E=n.n(k),x=n("./node_modules/classnames/index.js"),_=n.n(x),C=n("./components/context/style-context.js"),F=function(e,t,n){var s=e[t];if("auto"!==s){return/[0-9]+%?/g.test(s)?void 0:new Error("传给组件".concat(n,"的属性").concat(t,"的值不合法，校验失败"))}},B={left:"flex-start",top:"flex-start",right:"flex-end",bottom:"flex-end",center:"center",justify:"space-around",between:"space-between"},z=function(e){function t(e){return d()(this,t),g()(this,y()(t).call(this,e))}return f()(t,e),h()(t,[{key:"componentDidMount",value:function(){this.setCssVar()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){var e=this;this.setState({},function(){e.setCssVar()})}},{key:"setCssVar",value:function(){var e=this.instance,t=this.extraAttr;if(e&&t)for(var n in t)e.style.setProperty(n,t[n])}},{key:"setClassName",value:function(){var e=this.props.className;return _()("".concat(C.b.prefixCls,"-").concat("hgroup"),e)}},{key:"setAttributes",value:function(e){var t,n=B[e["vertical-align"]],s=B[e["horizontal-align"]],r=this.unitConvertor(e.width),o=this.unitConvertor(e.height);this.extraAttr=(t={},c()(t,"--width",r),c()(t,"--height",o),c()(t,"--vertical-align",n),c()(t,"--horizontal-align",s),t)}},{key:"unitConvertor",value:function(e){return String(e).includes("%")?e:e+"px"}},{key:"render",value:function(){var e=this;this.setAttributes(this.props);var t=this.setClassName();return j.a.createElement("div",i()({className:t,ref:function(t){e.instance=t}},this.props),this.props.children)}}]),t}(w.Component);z.propTypes=(s={},c()(s,"vertical-align",E.a.oneOf(["top","center","bottom"])),c()(s,"horizontal-align",E.a.oneOf(["left","center","right","justify","between"])),c()(s,"width",F),c()(s,"height",F),s),z.propTypes=(r={},c()(r,"vertical-align",E.a.oneOf(["top","center","bottom"])),c()(r,"horizontal-align",E.a.oneOf(["left","center","right","justify","between"])),c()(r,"width",F),c()(r,"height",F),r),z.defaultProps=(o={},c()(o,"vertical-align","center"),c()(o,"horizontal-align","justify"),c()(o,"width","100%"),c()(o,"height","auto"),o)},"./components/hgroup/style/index.js":function(e,t,n){"use strict";n("./components/styles/index.pcss"),n("./components/hgroup/style/index.pcss")},"./components/hgroup/style/index.pcss":function(e,t,n){},"./src/pages/hgroup/HGroupPage.js":function(e,t,n){"use strict";n.r(t);n("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var s=n("./node_modules/react-code-previewer/es/preview-layout/index.js"),r=(n("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),n("./node_modules/react-code-previewer/es/code-previewer/index.js")),o=(n("./node_modules/antd/es/input/style/css.js"),n("./node_modules/antd/es/input/index.js")),a=(n("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),n("./node_modules/react-code-previewer/es/md-previewer/index.js")),i=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=n.n(i),c=n("./node_modules/@babel/runtime/helpers/createClass.js"),u=n.n(c),d=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=n.n(d),h=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=n.n(h),g=n("./node_modules/@babel/runtime/helpers/inherits.js"),v=n.n(g),y=n("./node_modules/react/index.js"),b=n.n(y),f=n("./components/hgroup/index.js");n("./components/hgroup/style/index.js");n.d(t,"default",function(){return w});var w=function(e){function t(e){return l()(this,t),p()(this,m()(t).call(this,e))}return v()(t,e),u()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return b.a.createElement("div",{style:{padding:"2em"}},b.a.createElement(s.a,null,b.a.createElement(a.a,{md:"## **HGroup 容器**\n\n自带水平布局的容器。\n\n## 何时使用\n\n在构建一个网页的布局结构时，有大量需要多个元素水平、垂直对齐排列的地方。一般此类需求通过css设置弹性布局实现。HGroup容器提供了子元素水平排列对齐的功能，可以嵌套使用。"}),b.a.createElement(a.a,{md:"## 代码演示\n\n下面通过代码演示HGroup容器的使用方式。"}),b.a.createElement(r.a,{code:"<HGroup style={{ background: 'lightblue' }} key={1}>\n  <div style={{background: '#FFBB55'}}>i'm a div</div>\n  <p style={{background: '#99BB33'}}>this is a p</p>\n  <Input placeholder=\"small size\" style={{width: '200px'}} />\n  <span style={{background: '#FF4444'}}>span span...</span>\n</HGroup>",showCode:!0},b.a.createElement(f.a,{style:{background:"#108EE9"},key:1},b.a.createElement("div",{style:{background:"#FFBB55"}},"i'm a div"),b.a.createElement("p",{style:{background:"#99BB33"}},"this is a p"),b.a.createElement(o.a,{placeholder:"small size",style:{width:"200px"}}),b.a.createElement("span",{style:{background:"#FF4444"}},"span span..."))),b.a.createElement(a.a,{md:"未设置任何属性时，HGroup的所有子元素默认在同一行分散排列。"}),b.a.createElement(r.a,{code:"<HGroup width='900'\n  height='200'\n  horizontal-align='right'\n  vertical-align='top'\n  style={{ background: '#108EE9' }}\n  key={2}\n>\n  <div style={{ background: '#FFBB55' }}>i'm a div</div>\n  <p style={{ background: '#99BB33' }}>this is a p</p>\n  <span style={{ background: '#FF4444' }}>span span...</span>\n</HGroup>",showCode:!0},b.a.createElement(f.a,{width:"900",height:"200","horizontal-align":"right","vertical-align":"top",style:{background:"#108EE9"},key:2},b.a.createElement("div",{style:{background:"#FFBB55"}},"i'm a div"),b.a.createElement("p",{style:{background:"#99BB33"}},"this is a p"),b.a.createElement("span",{style:{background:"#FF4444"}},"span span..."))),b.a.createElement(a.a,{md:"可以通过设置width、height、vertical-align和horizontal-align属性，分别改变HGroup容器的宽高和子元素在水平、竖直方向上的对齐方式。属性值的类型及范围见下方API部分。"}),b.a.createElement(a.a,{md:"\n\n## API\n\n|参数|说明|类型|默认值|版本|\n|:--|:--|:--|:--|:--|\n|width|容器宽度| `string. 数字型字符串，或者百分数` |100%|-|\n|height|容器高度| `string. 数字型字符串，或者百分数` |auto|-|\n|horizontal-align|容器内子元素的水平对齐方式| `Enum {'left', 'center', 'right', 'justify', 'between'}` |justify|-|\n|vertical-align|容器内子元素的垂直对齐方式| `Enum {'top', 'center', 'bottom'}` |center|-|\n\n"})))}}]),t}(y.Component)}}]);
//# sourceMappingURL=25.chunk.js.map