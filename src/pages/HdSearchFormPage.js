import React,{Component} from 'react';
import SearchForm from '../../components/hd-searchForm'
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import installMd from '../md/hd-searchForm/intro.md'
import apiMd from '../md/hd-searchForm/api.md'
import example from '../md/hd-searchForm/example.md'

const searchFormOption = {
    forms: [
      {
        label: "输入框",
        type: "input",
        key: "simIP",
        width:180
      },
      {
        label: "下拉框",
        type: "select",
        key: "smStatus",
        width:180,
        showSearch:true,
        initialValue:'101',
        children:[{
          value:"101",
          label:"全部"
        },{
          value:"1",
          label:"正常"
        },{
          value:"0",
          label:"异常"
        }]
      },
      {
        label: "多选框",
        type: "checkbox",
        key: "smType",
        initialValue:['Apple1'],
        children:[{ label: 'Apple', value: 'Apple1' },
        { label: 'Pear', value: 'Pear1' },
        { label: 'Orange', value: 'Orange1' },]
      },      
      {
        label: "单项选择",
        type: "radio",
        key: "11",
        initialValue:'Apple2',
        children:[{ label: 'Apple', value: 'Apple2' },
        { label: 'Pear', value: 'Pear2' },
        { label: 'Orange', value: 'Orange2' },]
      },
      {
        label: "时间选择",
        type: "datePicker",
        key: "startTime",
        width:180,
        format:'YYYY-MM-DD HH:mm' 
        },
    ],
    btns: [{
        label: '查询',
        handleClick: 'handleChange',
        icon: 'search',
        key:'search',
        type: 'primary'
      },{
        label: '新增',
        handleClick: 'handleAdd',
        icon: 'plus',
        key:'plus',
        className: 'btn-custom-add',
        type: 'primary'
      }, {
        label: '批量删除',
        handleClick: 'handleDelete',
        icon: 'delete',
        key:'delete',
        type: 'dashed',
        disabled:false
      }]
  };
class HdSearchFormPage extends Component{
    // 搜索框操作
    handleChange = (val)=>{
        const form = this.searchFormRef.props.form;
        form.validateFields((err, values) => {
            console.log(values)
            if (err) {
              return;
            }
        })
    }
    handleAdd = ()=>{

    }
    render(){
        return <div>
        <PreviewLayout>
          <MdPreviewer md={installMd}></MdPreviewer>
          <CodePreviewer code={example} showCode={true}>
            <SearchForm 
              searchFormOption = {searchFormOption} 
              wrappedComponentRef = {form =>(this.searchFormRef = form)}
              handleChange = {this.handleChange}
              handleAdd = {this.handleAdd}
              layout = "inline"
            />
          </CodePreviewer>
          <MdPreviewer md={apiMd}></MdPreviewer>
        </PreviewLayout>
      </div>
    }
}
export default HdSearchFormPage