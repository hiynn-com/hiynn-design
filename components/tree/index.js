import React, { Component } from 'react'
import { Button, Tree } from 'antd'
import DescribeNodeModal from './treeNode'
import IconOperate from './iconOperate'
const { TreeNode } = Tree
import './style'

export default class HdTree extends Component {
  /**
   * treeData--树结构的data
   * showNode--节点modal
   * treeCount--作为新增节点的treeId
   * type--新增根节点=1,新增子节点=2,编辑节点=3,
   * pId--新增子节点的父类id
   * treeId--编辑节点的id
   * editFlag--标识新增还是编辑节点
   * nodeObjOld--编辑节点时，节点旧数据
   * @type {Object}
   */
  state={
    treeData:[],
    showNode: false,
    treeCount: 0,
    type: 1,
    pId:null,
    treeId:null,
    editFlag:false,
    nodeObjOld:null,
  }
  /*增加根节点node*/
  saveNode = (nodeData) => {
    const { type,treeCount,treeData,pId,nodeObjOld,treeId } = this.state
    let treeObj = [...treeData];
    switch(type){
      case 1: {
        let nodeObj = {
          name: nodeData.name,
          treeId: `-${treeCount+1}`,
          children:[],
          pId:null
        };
        treeObj.push(nodeObj);
        this.setState({
          treeData:[...treeObj],
          treeCount:treeCount + 1,
        })
        break;
      }
      case 2: {
        let nodeObj = {
          name:nodeData.name,
          treeId: `-${treeCount+1}`,
          children:[],
          pId,
        };
        this.addTreeNode(treeObj,nodeObj,pId)
        this.setState({
          treeData:[...treeObj],
          treeCount:treeCount + 1,
        })
        break;
      }
      case 3: {
        let nodeObjNew = JSON.stringify(nodeObjOld);
        let nodeObj = JSON.parse(nodeObjNew)
        nodeObj.name = nodeData.name;
        this.editTreeNode(treeData,nodeObj,treeId)
        break;
      }
    }
  }
  /*新增子节点遍历方法*/
  addTreeNode = (treeData,nodeObj,pId) => {
    treeData.map((item)=>{
      if(item.treeId == pId){
        item.children.push(nodeObj)
        return false;
      }else if(item.children && item.children.length > 0){
        this.addTreeNode(item.children,nodeObj,pId)
      }
    })
  }
  /*编辑节点保存方法*/
  editTreeNode = (treeData,nodeObj,treeId) => {
    treeData.map((item,index)=>{
      if(item.treeId == treeId){
        treeData.splice(index,1,nodeObj)
        return false;
      }else if(item.children && item.children.length > 0){
        this.editTreeNode(item.children,nodeObj,treeId)
      }
    })
  }
  /*添加树节点modal*/
  handleAddNode = (type,pId = null) => {
    this.setState({
      showNode: true,
      type,
      pId,
    })
  }
  /*关闭添加树节点modal*/
  handleCloseNode = () => {
    this.setState({
      showNode: false,
      editFlag:false,
    })
  }
  /*编辑树节点*/
  handleEditNode = (type,treeId = null,item={}) => {
    this.setState({
      showNode: true,
      type,
      treeId,
      editFlag:true,
      nodeObjOld:item,
    })
  }
  /*删除节点*/
  handleDelNode = (treeId,pId) => {
      const { treeCount,treeData } = this.state
      let treeObj = [...treeData];
      this.delTreeNode(treeObj,treeId)
      this.setState({
        treeData:[...treeObj],
        treeCount:treeCount - 1,
      })
  }
  /*删除节点遍历方法*/
  delTreeNode = (treeData,treeId) =>{
    treeData.map((item,index)=>{
      if(item.treeId == treeId){
        treeData.splice(index,1)
        return false;
      }else if(item.children && item.children.length > 0){
        this.delTreeNode(item.children,treeId)
      }
    })
  }
  /*树节点渲染*/
  renderTreeNodes = data => data.map((item) => {
    if(item.children && item.children.length > 0){
      return(
        <TreeNode title={<IconOperate item={item}
          onAdd={()=>this.handleAddNode(2,item.treeId)}
          onEdit={()=>this.handleEditNode(3,item.treeId,item)}
          onDel={()=>this.handleDelNode(item.treeId,item.pId)}
          />}
          key={item.treeId}
        >
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      )
    }
    return (
      <TreeNode title={<IconOperate item={item}
        onAdd={()=>this.handleAddNode(2,item.treeId)}
        onEdit={()=>this.handleEditNode(3,item.treeId,item)}
        onDel={()=>this.handleDelNode(item.treeId)}
        />}
        key={item.treeId}
      />
    )
  })
  render(){
    const { treeData=[], showNode, treeCount, editFlag, nodeObjOld } = this.state
    return(
      <React.Fragment>
        <Button onClick={() =>this.handleAddNode(1)} type='primary'>添加根节点</Button>
        <Tree>
          {this.renderTreeNodes(treeData)}
        </Tree>
        <DescribeNodeModal showNode={showNode}
          closeNode={this.handleCloseNode}
          saveNode={this.saveNode}
          editFlag={editFlag}
          nodeObjOld={nodeObjOld}
        />
      </React.Fragment>
    )
  }
}

