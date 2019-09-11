import React, { Component } from "react";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import EditableTable from "../../../components/editableTable";
import "../../../components/editableTable/style/index";
import { PreviewLayout, CodePreviewer, MdPreviewer } from "react-code-previewer";
import introMd from "./md/intro.md";
import exampleMd from "./md/examples.md";
import example1 from "./md/example1.md";
import api from "./md/api.md";

export default class EditableTablePage extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      }
    ];

    this.dataSource = [
      {
        // key: '00',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      },
      {
        // key: '11',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      },
    ];
  }

  componentDidMount() {

  }

  handleSave(arr) {
    console.log(arr);
  }

  render() {
    const demo1 = `export default class EditableTablePage extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
      }
    ];

    this.dataSource = [
      {
        // key: '00',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      },
      {
        // key: '11',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      },
    ];
  }

  componentDidMount() {

  }

  handleSave(arr) {
    console.log(arr);
  }

  render() {
    return (
      <div style={{ padding: "2em" }}>
        <EditableTable columns={this.columns}
          dataSource={this.dataSource}
          onSave={this.handleSave}
          enableAdd={true} />              
      </div>
    );
  }
}`;

    return (
      <div style={{ padding: "2em" }}>
        <PreviewLayout>
          {/* 介绍 */}
          <MdPreviewer md={introMd}></MdPreviewer>

          {/* 示例说明 */}
          <MdPreviewer md={exampleMd}></MdPreviewer>

          {/* 示例 1 */}
          <CodePreviewer code={demo1} showCode={true}>
            <EditableTable columns={this.columns}
              dataSource={this.dataSource}
              onSave={this.handleSave}
              enableAdd={true} />
          </CodePreviewer>
          <MdPreviewer md={example1}></MdPreviewer>

          {/* API说明 */}
          <MdPreviewer md={api}></MdPreviewer>
        </PreviewLayout>
      </div>
    );
  }
}
