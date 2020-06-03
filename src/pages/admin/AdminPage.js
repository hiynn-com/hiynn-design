import React, { Component } from "react";
import HdAdmin from "../../../components/admin";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import { Tree, Table, Divider, Tag, Input, Button, Form } from "antd";
import "../../../components/admin/style";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";
const { TreeNode, DirectoryTree } = Tree;
const { Search } = Input;

class HdAdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      content: "",
      title: "",
      searchCode: `
      import { HdAdmin } from "hiynn-design";
      constructor(props) {
        super(props);
        this.state = {
          visible: false,
          content: "",
          title: "",
          
        };
      }
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
          <Button onClick={this.showModal.bind(this, "添加")} style={{ marginLeft: "30px" }} type="primary" icon="plus">
            添加
          </Button>
        </div>
      }
      modal={{
        visible: this.state.visible,
        title: this.state.title,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        content: this.state.content
      }}
    >
      <div>
        <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
      </div>
    </HdAdmin>
  
      `,

      searchCode1: `
      import { HdAdmin } from "hiynn-design";
      constructor(props) {
        super(props);
        this.state = {
          visible: false,
          content: "",
          title: "",
          
        };
      }
      <HdAdmin
      title="组织管理"
      subTitle="组织列表"
      search={
        <div>
          <Input placeholder="请输入用户名" style={{ width: 200 }} />
          <Button style={{ marginLeft: "30px" }} type="primary" icon="search">
            查询
          </Button>
          <Button onClick={this.showModal.bind(this, "添加")} style={{ marginLeft: "30px" }} type="primary" icon="plus">
            添加
          </Button>
        </div>
      }
      modal={{
        visible: this.state.visible,
        title: this.state.title,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        content: this.state.content
      }}
    >
      <div>
        <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
      </div>
    </HdAdmin>
      `,

      searchCode2: `
      import { HdAdmin } from "hiynn-design";
      constructor(props) {
        super(props);
        this.state = {
          visible: false,
          content: "",
          title: "",
          
        };
      }
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
      modal={{
        visible: this.state.visible,
        title: this.state.title,
        handleOk: this.handleOk,
        handleCancel: this.handleCancel,
        content: this.state.content
      }}
    >
      <div>
        <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
      </div>
    </HdAdmin>
      `,
      columns: [
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
              <a onClick={this.showModal.bind(this, "修改")}>修改</a>
              <Divider type="vertical" />
              <a onClick={this.showModal.bind(this, "删除")}>删除</a>
            </span>
          )
        }
      ],

      data: [
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
      ]
    };
  }

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

  showModal = data => {
    this.setState({
      visible: true,
      title: data,
      content: <div>自定义内容</div>
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.searchCode} showCode={true}>
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
                <Button onClick={this.showModal.bind(this, "添加")} style={{ marginLeft: "30px" }} type="primary" icon="plus">
                  添加
                </Button>
              </div>
            }
            modal={{
              visible: this.state.visible,
              title: this.state.title,
              handleOk: this.handleOk,
              handleCancel: this.handleCancel,
              content: this.state.content
            }}
          >
            <div>
              <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
            </div>
          </HdAdmin>
        </CodePreviewer>
        <CodePreviewer code={this.state.searchCode1} showCode={true}>
          <HdAdmin
            title="组织管理"
            subTitle="组织列表"
            search={
              <div>
                <Input placeholder="请输入用户名" style={{ width: 200 }} />
                <Button style={{ marginLeft: "30px" }} type="primary" icon="search">
                  查询
                </Button>
                <Button onClick={this.showModal.bind(this, "添加")} style={{ marginLeft: "30px" }} type="primary" icon="plus">
                  添加
                </Button>
              </div>
            }
            modal={{
              visible: this.state.visible,
              title: this.state.title,
              handleOk: this.handleOk,
              handleCancel: this.handleCancel,
              content: this.state.content
            }}
          >
            <div>
              <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
            </div>
          </HdAdmin>
        </CodePreviewer>

        <CodePreviewer code={this.state.searchCode2} showCode={true}>
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
            modal={{
              visible: this.state.visible,
              title: this.state.title,
              handleOk: this.handleOk,
              handleCancel: this.handleCancel,
              content: this.state.content
            }}
          >
            <div>
              <Table size={"small"} columns={this.state.columns} dataSource={this.state.data} />
            </div>
          </HdAdmin>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
export default HdAdminPage;
