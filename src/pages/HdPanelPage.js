import React, { Component } from 'react';
import Panel from '../../components/hd-panel';
import '../../components/hd-panel/style/index';
import { PreviewLayout, CodePreviewer, MdPreviewer } from 'react-code-previewer';

import introMd from '../md/hd-panel/intro.md';
import exampleMd from '../md/hd-panel/examples.md';
import example1 from '../md/hd-panel/example1.md';
import example2 from '../md/hd-panel/example2.md';
import api from '../md/hd-panel/api.md';

export default class HdPanelPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const demo1 = `<VGroup style={{ background: 'lightblue' }} key={1}>
  <div style={{background: '#FFBB55'}}>i'm a div</div>
  <p style={{background: '#99BB33'}}>this is a p</p>
  <input type="text" value='输入框'/>
  <span style={{background: '#FF4444'}}>span span...</span>
</VGroup>`;

    const demo2 = `<VGroup width='900'
  height='200'
  horizontal-align='right'
  vertical-align='justify'
  style={{ background: '#108EE9' }}
  key={2}
>
  <div style={{ background: '#FFBB55' }}>i'm a div</div>
  <p style={{ background: '#99BB33' }}>this is a p</p>
  <span style={{ background: '#FF4444' }}>span span...</span>
</VGroup>`;

    return (
      <div style={{ padding: '2em' }}>
        <PreviewLayout>
          {/* 介绍 */}
          <MdPreviewer md={introMd}></MdPreviewer>

          {/* 示例说明 */}
          <MdPreviewer md={exampleMd}></MdPreviewer>

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>
            <VGroup style={{ background: '#108EE9' }} key={1}>
              <div style={{ background: '#FFBB55' }}>i'm a div</div>
              <p style={{ background: '#99BB33' }}>this is a p</p>
              <input type="text" value='输入框' />
              <span style={{ background: '#FF4444' }}>span span...</span>
            </VGroup>
          </CodePreviewer>
          <MdPreviewer md={example1}></MdPreviewer>

          {/* 示例 2 */}
          <CodePreviewer code={demo2} showCode={true}>
            <VGroup width='900'
              height='200'
              horizontal-align='right'
              vertical-align='justify'
              style={{ background: '#108EE9' }}
              key={2}
            >
              <div style={{ background: '#FFBB55' }}>i'm a div</div>
              <p style={{ background: '#99BB33' }}>this is a p</p>
              <span style={{ background: '#FF4444' }}>span span...</span>
            </VGroup>
          </CodePreviewer>
          <MdPreviewer md={example2}></MdPreviewer>

          {/* API说明 */}
          <MdPreviewer md={api}></MdPreviewer>

        </PreviewLayout>
      </div>
    );
  }
}