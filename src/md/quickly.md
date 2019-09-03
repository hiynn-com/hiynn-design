## 安装

## 使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```javascript
$ npm install hiynn-design --save
```

```javsscript
$ yarn add hiynn-design
```

## 浏览器引入

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 antd。

我们在 npm 发布包内的 hiynn-design/dist 目录下提供了 hiynn-design.min.js hiynn-design.min.css。你也可以通过 CDNJS， 或 UNPKG 进行下载。

> 强烈不推荐使用已构建文件，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。
> 注意：3.0 之后引入 antd.js 前你需要自行引入 moment。

## 示例

```jsx
import { HdLayout } from "hiynn-design";
ReactDOM.render(<HdLayout />, mountNode);
```

引入样式：

```jsx
import "hiynn-design/dist/hiynn-design.css";
```

## 按需加载

> 注意：hiynn.design 默认支持基于 ES module 的 tree shaking，不使用以下插件也会有按需加载的效果。

下面两种方式都可以只加载用到的组件。

- 使用 babel-plugin-import（推荐）。

```javascript
// .babelrc or babel-loader option
{
"plugins": [
  ["import", {
    "libraryName": "hiynn-design",
    "libraryDirectory": "es",
    "style": "css" // `style: true` 会加载 less 文件
   }]
  ]
}
```

然后只需从 hiynn.design 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { HdLayout } from "hiynn-design";
```

手动引入

```jsx
import HdLayout from "hiynn-sign/es/hd-layout"; // 加载 JS
import "hiynn-design/es/hd-layout/style/css"; // 加载 CSS
// import 'hiynn-design/es/hd-layout/style'; // 加载 LESS
```
