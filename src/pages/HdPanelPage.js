import React, { Component } from 'react';
import Panel from '../../components/hd-panel/index';
import '../../components/hd-panel/style/index';
import HGroup from '../../components/hd-hGroup/index';
import '../../components/hd-hGroup/style/index';

export default class HdPanelPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return [

      <HGroup horizontal-align='justify'
        vertical-align='top'
      >
        <Panel width='400'
          height='300'
          title='我是标题栏'
          text-align='middle'
          title-background='#ff4400'
          font-size='18'
          title-height='40'
        >
          <p>Lorem ipsum dolor sit.</p>
          <p>Natus voluptates facilis at.</p>
          <p>Eligendi tempore quod porro?</p>
          <p>Maiores distinctio necessitatibus omnis.</p>
          <p>Laudantium, ullam. Voluptatibus, dolore?</p>
          <div style={{ background: 'orange' }}>
            dfaggaegeg这是div
                    </div>
        </Panel>

        <Panel width='400'
          height='auto'
          title='第二个panel'
          text-align='left'
          title-background='#4400ff'
          font-size='18'
          title-height='40'
        >
          <p>Lorem ipsum dolor sit.</p>
          <p>Natus voluptates facilis at.</p>
          <p>Eligendi tempore quod porro?</p>
          <p>Maiores distinctio necessitatibus omnis.</p>
          <p>Laudantium, ullam. Voluptatibus, dolore?</p>
          <div style={{ background: 'orange' }}>
            dfaggaegeg这是div
                    </div>
        </Panel>
      </HGroup>
    ];
  }
}