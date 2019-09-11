import React, { Component } from 'react'
import { Modal } from 'antd'
import DescribeNodeForm from './treeNodeForm'

export default class DescribeNodeModal extends Component {
  /*关闭弹窗*/
  handleCancel = () => {
    this.props.closeNode()
  }
  /*确认功能*/
  handleOk = () => {
    //modeData树节点对象
    let nodeData = this.formNode.getItemsValue()
    console.log(nodeData)
    if(nodeData != null){
      this.props.closeNode()
      this.props.saveNode(nodeData)
    }
  }
  render(){
    const { showNode, editFlag, nodeObjOld } = this.props
    return(
      <Modal title='添加树节点'
        width={600}
        destroyOnClose={true}
        visible={showNode}
        cancelText={'取消'}
        okText={'确认'}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
      >
        <DescribeNodeForm wrappedComponentRef = {(form) => this.formNode = form}
          editFlag={editFlag}
          nodeObjOld={nodeObjOld}
        />
      </Modal>
    )
  }
}

