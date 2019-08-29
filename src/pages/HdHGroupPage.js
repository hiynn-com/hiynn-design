import React, { Component } from 'react';
import HGroup from '../../components/hd-hGroup';
import '../../components/hd-hGroup/style/index';
import { PreviewLayout, CodePreviewer, MdPreviewer } from 'react-code-previewer';
// import 'react-code-previewer/es/code-previewer/style/css';
// import 'react-code-previewer/es/preview-layout/style/css';
// import 'react-code-previewer/es/markdown-previewer/style/css';

import introMd from '../md/hd-hGroup/intro.md';
import exampleMd from '../md/hd-hGroup/examples.md';

export default class HdHGroupPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const demo1 = `<HGroup style={{ background: 'lightblue' }} key={1}>
  <div>i'm a div</div>
  <p>this is a p</p>
  <span>span span...</span>
</HGroup>`;

    return (
      <div style={{ padding: '2em' }}>
        <PreviewLayout>
          <MdPreviewer md={introMd}></MdPreviewer>

          <MdPreviewer md={exampleMd}></MdPreviewer>

          <CodePreviewer code={demo1} showCode={true}>
            <HGroup style={{ background: 'lightblue' }} key={1}>
              <div>i'm a div</div>
              <p>this is a p</p>
              <span>span span...</span>
            </HGroup>
          </CodePreviewer>

        </PreviewLayout>
      </div>
    );
  }
}