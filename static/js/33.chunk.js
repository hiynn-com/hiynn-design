(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/pages/layout/LayoutPage.js":function(e,n,o){"use strict";o.r(n);o("./node_modules/react-code-previewer/es/preview-layout/style/css.js");var r=o("./node_modules/react-code-previewer/es/preview-layout/index.js"),t=(o("./node_modules/react-code-previewer/es/code-previewer/style/css.js"),o("./node_modules/react-code-previewer/es/code-previewer/index.js")),s=(o("./node_modules/antd/es/button/style/css.js"),o("./node_modules/antd/es/button/index.js")),a=(o("./node_modules/react-code-previewer/es/md-previewer/style/css.js"),o("./node_modules/react-code-previewer/es/md-previewer/index.js")),d=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(d),c=o("./node_modules/@babel/runtime/helpers/createClass.js"),l=o.n(c),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),w=o.n(u),p=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=o.n(p),v=o("./node_modules/@babel/runtime/helpers/inherits.js"),h=o.n(v),y=o("./node_modules/react/index.js"),j=o.n(y),b='# react-code-previewer\n\n这是一段文字\n\n## Install\n\n```javascript\nyarn add react-code-previewer\n```\n\n## Usage\n\n```jsx\nimport { CodePreviewer, MarkdownPreviewer, PreviewLayout } from "react-code-previewer";\nReactDOM.render(\n  <PreviewLayout>\n    <MdPreviewer md={installMd}></MdPreviewer>\n    <CodePreviewer code={code} showCode={true}>\n      your-component-here\n    </CodePreviewer>\n    <MdPreviewer md={apiMd}></MdPreviewer>\n  </PreviewLayout>,\n  mountNode\n);\n```\n',P=function(e){function n(){return i()(this,n),w()(this,m()(n).apply(this,arguments))}return h()(n,e),l()(n,[{key:"componentDidMount",value:function(){window.location.hash=window.decodeURIComponent(window.location.hash);var e=function(){var e=window.location.hash.split("#");if(console.log("hashParts",e),e.length>2){var n=e.slice(-1)[0];console.log("hash=",n),document.querySelector("#".concat(n)).scrollIntoView()}};e(),window.onhashchange=e}},{key:"render",value:function(){return j.a.createElement(r.a,null,j.a.createElement(a.a,{md:b}),j.a.createElement(t.a,{code:'<Button type="primary">这是按钮</Button>',showCode:!0},j.a.createElement(s.a,{type:"primary"},"这是按钮")),j.a.createElement(a.a,{md:b}),j.a.createElement(t.a,{code:'<Button type="primary">这是按钮</Button>',showCode:!0},j.a.createElement(s.a,{type:"primary"},"这是按钮")))}}]),n}(y.Component);n.default=P}}]);
//# sourceMappingURL=33.chunk.js.map