(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./components/codeZone/style/index.pcss":function(e,t,n){},"./src/pages/codeZone/CodeZonePage.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=n.n(o),s=n("./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(s),c=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),a=n.n(c),l=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=n.n(l),p=n("./node_modules/@babel/runtime/helpers/inherits.js"),h=n.n(p),d=n("./node_modules/react/index.js"),m=n.n(d),f=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),v=n.n(f),b=(n("./node_modules/prop-types/index.js"),n("./node_modules/classnames/index.js")),g=n.n(b),y=n("./components/context/style-context.js");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var j=function(e,t,n){var o=e[t];if(!/[0-9]+%?/g.test(o))return new Error("传给组件".concat(n,"的属性").concat(t,"的值不合法，校验失败"))},C=function(e){function t(e){var n;return r()(this,t),(n=a()(this,u()(t).call(this,e))).onTextChange=function(e){var t=(e||window.event).target.value;if(0===t.length)n.showLineNum(0);else{for(var o=/\n/g,r=1;o.exec(t);)r+=1;n.showLineNum(r)}},n.onScroll=function(e){var t=(e||window.event).target,n=t.scrollTop;t.previousSibling.scrollTop=n},n.state={lineNums:""},n}return h()(t,e),i()(t,[{key:"showLineNum",value:function(e){for(var t="",n=1;n<=e;n++)t=t+n+"\n";this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){v()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.state,{lineNums:t}))}},{key:"setClassName",value:function(){var e=this.props.className;return g()("".concat(y.b.prefixCls,"-").concat("codezone"),e)}},{key:"getSize",value:function(){return{width:this.unitConvertor(this.props.width),height:this.unitConvertor(this.props.height)}}},{key:"unitConvertor",value:function(e){return String(e).includes("%")?e:e+"px"}},{key:"render",value:function(){var e=this.getSize(),t=this.setClassName();return m.a.createElement("div",{className:t,style:e},m.a.createElement("p",{className:"".concat(t,"-p")},this.state.lineNums),m.a.createElement("textarea",{className:"".concat(t,"-textarea"),onChange:this.onTextChange,onScroll:this.onScroll}))}}]),t}(d.Component);C.propTypes={width:j,height:j},C.defaultProps={width:"100%",height:"150"};n("./components/styles/index.pcss"),n("./components/codeZone/style/index.pcss");n.d(t,"default",function(){return O});var O=function(e){function t(e){return r()(this,t),a()(this,u()(t).call(this,e))}return h()(t,e),i()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return m.a.createElement(C,{width:"400",height:"300"})}}]),t}(d.Component)}}]);
//# sourceMappingURL=27.chunk.js.map