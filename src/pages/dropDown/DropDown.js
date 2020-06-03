import React, { Component } from "react";
import HdDropDown from "../../../components/dropDown";
import "../../../components/dropDown/style";
import data from "./data";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import moment from "moment";
import IndexMD from "./md/index.md";
import ApiMD from "./md/api.md";

export default class DropDownPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `
      import { HdDropDown } from 'hiynn-design';
      import data from "./data";
      //数据格式
      // [
      //   {name:'上海', 
      //     cityList:[		   
      //           {name:'市辖区', 
      //               areaList:['黄浦区','卢湾区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','奉贤区']},		   
      //           {name:'县', 
      //               areaList:['崇明县']},
      //           ],
      //   }
      // ]
      
      onChange = (province, city, county) => {
        console.log("dropdown回调的数据：", province, city, county);
      };

      <HdDropDown data={data} onChange={this.onChange}></HdDropDown>
      `
    };
  }

  componentDidMount() {}
  onChange = (province, city, county) => {
    console.log("dropdown回调的数据：", province, city, county);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}></MdPreviewer>
        <CodePreviewer code={this.state.code} showCode={true}>
          <HdDropDown data={data} onChange={this.onChange}></HdDropDown>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}></MdPreviewer>
      </PreviewLayout>
    );
  }
}
