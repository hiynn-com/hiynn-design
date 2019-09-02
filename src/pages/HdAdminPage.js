import React, { Component } from "react";
import HdAdmin from "../../components/hd-admin";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import { Tree, Table, Divider, Tag, Input, Button } from "antd";
const { TreeNode, DirectoryTree } = Tree;
const { Search } = Input;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>修改</a>
        <Divider type="vertical" />
        <a>删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

class HdAdminPage extends Component {
  onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  onExpand = () => {
    console.log("Trigger Expand");
  };
  onRightClick = ({ event, node }) => {
    console.log("event : ", event);
    console.log("node : ", node);
  };
  render() {
    return (
      <HdAdmin
        title="组织管理"
        subTitle="组织列表"
        side={
          <div>
            <DirectoryTree onRightClick={this.onRightClick} multiple defaultExpandedKeys={["0-0"]} draggable onSelect={this.onSelect} onExpand={this.onExpand}>
              <TreeNode title="一级组织" key="0-0">
                <TreeNode title="1" key="0-0-0" />
                <TreeNode title="2" key="0-0-1" />
              </TreeNode>
              <TreeNode title="二级组织" key="0-1">
                <TreeNode title="3" key="0-1-0" />
                <TreeNode title="4" key="0-1-1" />
              </TreeNode>
              <TreeNode title="三级组织" key="0-2">
                <TreeNode title="5" key="0-2-0" />
                <TreeNode title="6" key="0-2-1" />
              </TreeNode>
              <TreeNode title="四级组织" key="0-3">
                <TreeNode title="7" key="0-2-0" />
                <TreeNode title="8" key="0-2-1" />
              </TreeNode>
            </DirectoryTree>
          </div>
        }
        search={
          <div>
            <Input placeholder="请输入用户名" style={{ width: 200 }} />
            <Button style={{ marginLeft: "30px" }} type="primary" icon="search">
              查询
            </Button>
            <Button style={{ marginLeft: "30px" }} type="primary" icon="plus">
              添加
            </Button>
          </div>
        }
      >
        <div>
          <Table size={"small"} columns={columns} dataSource={data} />
        </div>
      </HdAdmin>
    );
  }
}

export default HdAdminPage;
