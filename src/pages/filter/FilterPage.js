import React, { Component } from "react";
import HdFilter from "../../../components/filter";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import installMd from "./md/install.md";
import apiMd from "./md/api.md";

class HdFilterPage extends Component {
  getFilterOptions = filterData => {
    console.log(filterData);
  };
  render() {
    let filterData = [
      {
        id: 1,
        type: "resourceType",
        value: "资源类型",
        children: [
          {
            id: 11,
            name: "API服务",
            value: 11,
            categoryId: "resourceType"
          },
          {
            id: 12,
            name: "数据库",
            value: 12,
            categoryId: "resourceType"
          },
          {
            id: 13,
            name: "文件",
            value: 13,
            categoryId: "resourceType"
          }
        ]
      },
      {
        id: 2,
        type: "updateTime",
        value: "更新频率",
        children: [
          {
            id: 21,
            name: "周更新",
            value: 21,
            categoryId: "updateTime"
          },
          {
            id: 22,
            name: "月更新",
            value: 22,
            categoryId: "updateTime"
          },
          {
            id: 23,
            name: "无",
            value: 23,
            categoryId: "updateTime"
          }
        ]
      },
      {
        id: 3,
        type: "shareType",
        value: "共享方式",
        children: [
          {
            id: 31,
            name: "有条件共享",
            value: 31,
            categoryId: "shareType"
          },
          {
            id: 32,
            name: "无条件共享",
            value: 32,
            categoryId: "shareType"
          }
        ]
      }
    ];
    let filterCode = `
      import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
      import { HdFilter } from "hiynn-design";
      let filterData = [
        {
          'id':1,
          'type':'resourceType',
          'value':'资源类型',
          'children':[
            {
              id:11,
              name:'API服务',
              value:11,
              categoryId:'resourceType',
            },{
              id:12,
              name:'数据库',
              value:12,
              categoryId:'resourceType',
            },{
              id:13,
              name:'文件',
              value:13,
              categoryId:'resourceType',
            }
          ]
        },
        {
          'id':2,
          'type':'updateTime',
          'value':'更新频率',
          'children':[
            {
              id:21,
              name:'周更新',
              value:21,
              categoryId:'updateTime',
            },{
              id:22,
              name:'月更新',
              value:22,
              categoryId:'updateTime',
            },{
              id:23,
              name:'无',
              value:23,
              categoryId:'updateTime',
            }
          ]
        },
        {
          'id':3,
          'type':'shareType',
          'value':'共享方式',
          'children':[
            {
              id:31,
              name:'有条件共享',
              value:31,
              categoryId:'shareType',
            },{
              id:32,
              name:'无条件共享',
              value:32,
              categoryId:'shareType',
            }
          ]
        }
      ]
      <HdFilter filterData={filterData} getFilterOptions={this.getFilterOptions} />`;
    return (
      <PreviewLayout>
        <MdPreviewer md={installMd}></MdPreviewer>
        <CodePreviewer code={filterCode} showCode={true}>
          <HdFilter filterData={filterData} getFilterOptions={this.getFilterOptions} />
        </CodePreviewer>
        <MdPreviewer md={apiMd}></MdPreviewer>
      </PreviewLayout>
    );
  }
}

export default HdFilterPage;
