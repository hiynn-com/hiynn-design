import React, { Component } from 'react';
import VGroup from '../../components/hd-vGroup';
import '../../components/hd-vGroup/style/index';

export default class HdVGroupPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return [
      <VGroup style={{ background: 'lightblue' }} key={1}>
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </VGroup>,

      <VGroup width='900'
        height='200'
        horizontal-align='right'
        vertical-align='top'
        style={{ background: 'lightgray' }}
        key={2}
      >
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </VGroup>,

      <VGroup width='1100'
        height='200'
        horizontal-align='left'
        vertical-align='between'
        style={{ background: 'lightblue' }}
        key={3}
      >
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </VGroup>,

      <VGroup width='50%'
        height='200'
        horizontal-align='center'
        vertical-align='justify'
        style={{ background: 'lightgray' }}
        key={4}
      >
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </VGroup>,
    ];
  }
}