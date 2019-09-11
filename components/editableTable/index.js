import React, { Component } from "react";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import PropTypes from "prop-types";
import classNames from "classnames";
import { style } from "../context/style-context";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
            children
          )}
      </td>
    );
  }
}

// 组件容器的类名，前面需加上前缀‘hd’
const cmpClsName = "editableTable";

export default class EditableTable extends Component {

  // 类型检查
  static propTypes = {
    columns: PropTypes.array,       // 表格的列定义
    dataSource: PropTypes.array,    // 表格的数据源
    enableAdd: PropTypes.bool,      // 是否显示 新增 按钮
    onSave: PropTypes.func,         // 保存的处理函数
  };

  // 默认props
  static defaultProps = {
    columns: [],          // 表格的列定义
    dataSource: null,     // 表格的数据源
    enableAdd: true,      // 是否显示 新增 按钮
    onSave: undefined,    // 保存的处理函数
  };

  constructor(props) {
    super(props);
    this.columns = [];
    this.state = {
      dataSource: null,
      count: 0,
    };
    // 默认操作栏
    this.opColumn = {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
          <a>删除</a>
        </Popconfirm>
    }
    // 新增按钮
    this.addBtn = null;
  }

  componentWillMount() {
    this.setAddButton();
    this.setColumns();
    this.setDataSource();
  }

  componentDidUpdate(prevProps) {
    const isIdentical = this.isObjectIdentical(prevProps, this.props);
    if (!isIdentical) {
      this.setAddButton();
      this.setColumns();
      this.setDataSource();
    }
  }

  isObjectIdentical(prev, next) {
    const toString = Object.prototype.toString;
    for (let prop in prev) {
      if (!next[prop]) {
        return false;
      } else if (next[prop] !== prev[prop]) {
        return false;
      } else if (toString.call(prev[prop]) === '[object Array]' && toString.call(next[prop]) === '[object Array]') {
        if (prev[prop].length !== next[prop].length) {
          return false;
        } else {
          for (let i = 0; i < prev[prop].length; i++) {
            this.isObjectIdentical(prev[prop][i], next[prop][i]);
          }
        }
      } else if (toString.call(prev[prop]) === '[object Object]' && toString.call(next[prop]) === '[object Object]') {
        this.isObjectIdentical(prev[prop], next[prop]);
      }
    }
    return true;
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) }, () => {
      if (this.props.onSave) {
        this.props.onSave([...this.state.dataSource]);
      }
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    let newData = {};
    this.columns.forEach(item => {
      newData[item['dataIndex']] = '请修改此处内容';
    });
    newData['key'] = count;
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    }, () => {
      if (this.props.onSave) {
        this.props.onSave([...this.state.dataSource]);
      }
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData }, () => {
      if (this.props.onSave) {
        this.props.onSave([...this.state.dataSource]);
      }
    });
  };

  /**
   * 接收props的columns参数，设置表格的columns
   */
  setColumns = () => {
    if (this.props.columns) {
      this.columns = [...this.props.columns, this.opColumn];
    }
  }

  /**
   * 接收props的dataSource参数，设置表格的dataSource
   */
  setDataSource = () => {
    if (this.props.dataSource) {
      let data = this.genDataKey(this.props.dataSource);
      this.setState({
        dataSource: data,
        count: data.length,
      });
    }
  }

  /**
   * 如果传入的数据没有key值，那么设置默认的key值
   */
  genDataKey = (dataArray) => {
    let key = 0;
    return dataArray.map(item => {
      if (!item.key) {
        item['key'] = key;
        key++;
      }
      return item;
    });
  }

  /**
   * 是否显示新增按钮
   */
  setAddButton = () => {
    this.addBtn = this.props['enableAdd'] ?
      (<Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
        新增
    </Button>) : null;
  }

  setClassName() {
    const { className } = this.props;
    let cls = classNames(`${style.prefixCls}-${cmpClsName}`, className);
    return cls;
  }

  render() {
    const cls = this.setClassName();

    const { dataSource } = this.state;

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div className={cls}>
        {this.addBtn}
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}