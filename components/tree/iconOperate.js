import React, { Component } from 'react'
import { Icon } from 'antd'

export default class IconOperate extends Component {
    render(){
        const { item } = this.props
        return(
            <div className='operate_icon'>
                <span>{item.name}</span>
                <Icon type="plus" onClick={this.props.onAdd} />
                <Icon type="edit" onClick={this.props.onEdit} />
                <Icon type="delete" onClick={this.props.onDel} />
            </div>
        )
    }
}
