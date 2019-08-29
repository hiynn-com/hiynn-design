import React, { Component } from 'react';
import CodeArea from '../../components/hd-codeArea/index';
import '../../components/hd-codeArea/style/index';

export default class HdCodeAreaPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <CodeArea width='400' height='300' />
    );
  }
}