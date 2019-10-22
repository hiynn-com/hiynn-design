(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./components/vGroup/index.js":function(e,n,t){"use strict";t.d(n,"a",function(){return B});var s,r,o=t("./node_modules/@babel/runtime/helpers/extends.js"),a=t.n(o),i=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),l=t.n(i),u=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=t.n(u),d=t("./node_modules/@babel/runtime/helpers/createClass.js"),p=t.n(d),m=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),h=t.n(m),v=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=t.n(v),g=t("./node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(g),f=t("./node_modules/react/index.js"),j=t.n(f),w=t("./node_modules/prop-types/index.js"),k=t.n(w),E=t("./node_modules/classnames/index.js"),x=t.n(E),_=t("./components/context/style-context.js"),C=function(e,n,t){var s=e[n];if("auto"!==s){return/[0-9]+%?/g.test(s)?void 0:new Error("传给组件".concat(t,"的属性").concat(n,"的值不合法，校验失败"))}},F={left:"flex-start",top:"flex-start",right:"flex-end",bottom:"flex-end",center:"center",justify:"space-around",between:"space-between"},B=function(e){function n(e){return c()(this,n),h()(this,y()(n).call(this,e))}return b()(n,e),p()(n,[{key:"componentDidMount",value:function(){this.setCssVar()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){var e=this;this.setState({},function(){e.setCssVar()})}},{key:"setCssVar",value:function(){var e=this.instance,n=this.extraAttr;if(e&&n)for(var t in n)e.style.setProperty(t,n[t])}},{key:"setClassName",value:function(){var e=this.props.className;return x()("".concat(_.b.prefixCls,"-").concat("vgroup"),e)}},{key:"setAttributes",value:function(e){var n,t=F[e["vertical-align"]],s=F[e["horizontal-align"]],r=this.unitConvertor(e.width),o=this.unitConvertor(e.height);this.extraAttr=(n={},l()(n,"--width",r),l()(n,"--height",o),l()(n,"--vertical-align",t),l()(n,"--horizontal-align",s),n)}},{key:"unitConvertor",value:function(e){return String(e).includes("%")?e:e+"px"}},{key:"render",value:function(){var e=this;this.setAttributes(this.props);var n=this.setClassName();return j.a.createElement("div",a()({className:n,ref:function(n){e.instance=n}},this.props),this.props.children)}}]),n}(f.Component);B.propTypes=(s={},l()(s,"horizontal-align",k.a.oneOf(["left","center","right"])),l()(s,"vertical-align",k.a.oneOf(["top","center","bottom","justify","between"])),l()(s,"width",C),l()(s,"height",C),s),B.defaultProps=(r={},l()(r,"vertical-align","justify"),l()(r,"horizontal-align","center"),l()(r,"width","100%"),l()(r,"height","auto"),r)},"./components/vGroup/style/index.js":function(e,n,t){"use strict";t("./components/styles/index.pcss"),t("./components/vGroup/style/index.pcss")},"./components/vGroup/style/index.pcss":function(e,n,t){},"./src/pages/vgroup/VGroupPage.js":function(e,n,t){"use strict";t.r(n);t("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var s=t("./node_modules/react-code-previewer/es/preview-layout/index.js"),r=(t("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),t("./node_modules/react-code-previewer/es/code-previewer/index.js")),o=(t("./node_modules/antd/es/input/style/css.js"),t("./node_modules/antd/es/input/index.js")),a=(t("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),t("./node_modules/react-code-previewer/es/md-previewer/index.js")),i=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),l=t.n(i),u=t("./node_modules/@babel/runtime/helpers/createClass.js"),c=t.n(u),d=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),p=t.n(d),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),h=t.n(m),v=t("./node_modules/@babel/runtime/helpers/inherits.js"),y=t.n(v),g=t("./node_modules/react/index.js"),b=t.n(g),f=t("./components/vGroup/index.js");t("./components/vGroup/style/index.js");t.d(n,"default",function(){return j});var j=function(e){function n(e){return l()(this,n),p()(this,h()(n).call(this,e))}return y()(n,e),c()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return b.a.createElement("div",{style:{padding:"2em"}},b.a.createElement(s.a,null,b.a.createElement(a.a,{md:"## **VGroup 容器**\n\n自带垂直布局的容器。\n\n## 何时使用\n\n在构建一个网页的布局结构时，有大量需要多个元素水平、垂直对齐排列的地方。一般此类需求通过css设置弹性布局实现。VGroup容器提供了子元素垂直排列对齐的功能，可以嵌套使用。"}),b.a.createElement(a.a,{md:"## 代码演示\n\n下面通过代码演示VGroup容器的使用方式。"}),b.a.createElement(r.a,{code:"<VGroup style={{ background: 'lightblue' }} key={1}>\n  <div style={{background: '#FFBB55'}}>i'm a div</div>\n  <p style={{background: '#99BB33'}}>this is a p</p>\n  <Input placeholder=\"small size\" style={{width: '200px'}}/>\n  <span style={{background: '#FF4444'}}>span span...</span>\n</VGroup>",showCode:!0},b.a.createElement(f.a,{style:{background:"#108EE9"},key:1},b.a.createElement("div",{style:{background:"#FFBB55"}},"i'm a div"),b.a.createElement("p",{style:{background:"#99BB33"}},"this is a p"),b.a.createElement(o.a,{placeholder:"small size",style:{width:"200px"}}),b.a.createElement("span",{style:{background:"#FF4444"}},"span span..."))),b.a.createElement(a.a,{md:"未设置任何属性时，VGroup的所有子元素默认在垂直方向分散排列（高度为'auto'，默认由子元素撑开）。"}),b.a.createElement(r.a,{code:"<VGroup width='900'\n  height='200'\n  horizontal-align='right'\n  vertical-align='justify'\n  style={{ background: '#108EE9' }}\n  key={2}\n>\n  <div style={{ background: '#FFBB55' }}>i'm a div</div>\n  <p style={{ background: '#99BB33' }}>this is a p</p>\n  <span style={{ background: '#FF4444' }}>span span...</span>\n</VGroup>",showCode:!0},b.a.createElement(f.a,{width:"900",height:"200","horizontal-align":"right","vertical-align":"justify",style:{background:"#108EE9"},key:2},b.a.createElement("div",{style:{background:"#FFBB55"}},"i'm a div"),b.a.createElement("p",{style:{background:"#99BB33"}},"this is a p"),b.a.createElement("span",{style:{background:"#FF4444"}},"span span..."))),b.a.createElement(a.a,{md:"可以通过设置width、height、vertical-align和horizontal-align属性，分别改变VGroup容器的宽高和子元素在水平、竖直方向上的对齐方式。属性值的类型及范围见下方API部分。"}),b.a.createElement(a.a,{md:"\n\n## API\n\n|参数|说明|类型|默认值|版本|\n|:--|:--|:--|:--|:--|\n|width|容器宽度| `string. 数字型字符串，或者百分数` |100%|-|\n|height|容器高度| `string. 数字型字符串，或者百分数` |auto|-|\n|horizontal-align|容器内子元素的水平对齐方式| `Enum {'left', 'center', 'right'}` |center|-|\n|vertical-align|容器内子元素的垂直对齐方式| `Enum {'top', 'center', 'bottom', 'justify', 'between'}` |justify|-|\n\n"})))}}]),n}(g.Component)}}]);
//# sourceMappingURL=27.chunk.js.map