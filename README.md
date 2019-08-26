<p align="center"><a href="https://hiynn-com.github.io/hiynn-design/#/" target="_blank" rel="noopener noreferrer"><img width="100" src="http://cdn.awbeci.com/hiyun/WechatIMG224.png" alt="Hiynn Design logo"></a></p>

<div align="center">

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hiynn-com/hiynn-design)
[![npm version](https://img.shields.io/npm/v/hiynn-design.svg)](https://www.npmjs.com/package/hiynn-design)
[![NPM downloads](http://img.shields.io/npm/dm/hiynn-design.svg?style=flat-square)](http://npmjs.com/hiynn-design)

</div>

<h1 align="center">Hiynn Design</h1>

## Introduction

海云标准化平台组件库是制订公司的前端框架标准和规范，目的是为了提升前端开发效率节省开发时间

## Install

```
yarn add hiynn-design
npm install hiynn-design
```

## Usage

```
import {HdLayout, HdMaster} from 'hiynn-design'
ReactDOM.render(<HdLayout />, mountNode);
```

And import style manually:

```
import 'hiynn-design/dist/hiynn-design.css';
```

### Note

文件夹 dist、es 和 lib 是通过 umd、es 和 commonjs 打包的，而 docs 是在线预览文件夹

1. umd -> dist
2. es -> es
3. commonjs -> lib
4. dev -> src(本地预览)
5. prod -> docs(在线预览，需通过 gh-pages 推送到 github)

### Learning

- [教程：使用 umd、commonjs 和 es 三种模式制作自己的 React 组件(库)](https://segmentfault.com/a/1190000020093455)
- [前端 20 个灵魂拷问 彻底搞明白你就是中级前端工程师 【中篇】](https://segmentfault.com/a/1190000020144498)
- [JS 模块化 CommonJS/AMD/CMD/UMD/ES6Module 的区别](https://www.cnblogs.com/weiqinl/p/9940549.html)
- [前端构建工具发展及其比较](https://juejin.im/entry/5ae5c8c9f265da0b9f400d8e)

### License

Hiynn Design is [MIT licensed](./LICENSE).

### Contact me

> zw900808@gmail.com
