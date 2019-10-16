import React, {Component} from "react";
import {PreviewLayout, MdPreviewer, CodePreviewer} from "react-code-previewer";
import ApiMD from "./md/api.md";
import IndexMD from "./md/index.md";
import HdCheckboxBar from "../../../components/checkboxBar";
import "../../../components/checkboxBar/style";

const options = [
  {icon: '#1496f1', label: '柳工', value: '0'},
  {icon: '#10a950', label: '成团', value: '1', checked: true},
  {icon: '#d8c01e', label: '柳江', value: '2', checked: true},
  {icon: '#6a1bc2', label: '柳长', value: '3'},
  {icon: '#f29b76', label: '白沙', value: '4'},
  {icon: '#1ec7a1', label: '安保', value: '5'},
  {icon: '#5bbbff', label: '驾联', value: '6', checked: true},
  {icon: '#c21b85', label: '旺通', value: '7'},
  {icon: '#c21b33', label: '汽贸园', value: '8'},
  {icon: '#1496f1', label: '柳工', value: '9'},
  {icon: '#10a950', label: '成团', value: '10'},
  {icon: '#d8c01e', label: '柳江', value: '11'},
  {icon: '#6a1bc2', label: '柳长', value: '12'},
  {icon: '#f29b76', label: '白沙', value: '13'},
  {icon: '#1ec7a1', label: '安保', value: '14'},
  {icon: '#5bbbff', label: '驾联', value: '15', checked: true},
  {icon: '#c21b85', label: '旺通', value: '16'},
  {icon: '#c21b33', label: '汽贸园', value: '17'},
  {icon: '#1496f1', label: '柳工', value: '18'},
  {icon: '#1496f1', label: '柳工', value: '19'},
];

export default class CheckboxBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `import { HdCheckboxBar } from "hiynn-design";

const options = [
  {icon: '#1496f1', label: '柳工', value: '0'},
  {icon: '#10a950', label: '成团', value: '1', checked: true},
  {icon: '#d8c01e', label: '柳江', value: '2', checked: true},
  {icon: '#6a1bc2', label: '柳长', value: '3'},
  {icon: '#f29b76', label: '白沙', value: '4'},
  {icon: '#1ec7a1', label: '安保', value: '5'},
  {icon: '#5bbbff', label: '驾联', value: '6', checked: true},
  {icon: '#c21b85', label: '旺通', value: '7'},
  {icon: '#c21b33', label: '汽贸园', value: '8'},
  {icon: '#1496f1', label: '柳工', value: '9'},
  {icon: '#10a950', label: '成团', value: '10'},
  {icon: '#d8c01e', label: '柳江', value: '11'},
  {icon: '#6a1bc2', label: '柳长', value: '12'},
  {icon: '#f29b76', label: '白沙', value: '13'},
  {icon: '#1ec7a1', label: '安保', value: '14'},
  {icon: '#5bbbff', label: '驾联', value: '15', checked: true},
  {icon: '#c21b85', label: '旺通', value: '16'},
  {icon: '#c21b33', label: '汽贸园', value: '17'},
  {icon: '#1496f1', label: '柳工', value: '18'},
  {icon: '#1496f1', label: '柳工', value: '19'},
];

onChange = checkedItems => {};

<HdCheckboxBar options={options} onChange={this.onChange}></HdCheckboxBar>`
    };
  }

  onChange = checkedItems => {
    console.log(checkedItems);
  };

  render() {
    return (
      <PreviewLayout>
        <MdPreviewer md={IndexMD}/>
        <CodePreviewer code={this.state.code} showCode>
          <HdCheckboxBar options={options} onChange={this.onChange}/>
        </CodePreviewer>
        <MdPreviewer md={ApiMD}/>
      </PreviewLayout>
    )
  }
}
