import React ,{ PureComponent} from "react";
import List from "./../component/List.jsx";
import Input from "./../component/Input.jsx";
import Tools from "./../component/Tools.jsx";
import { connect } from 'react-redux'
import { addTodo } from '../redux/action.js'
class Todo extends PureComponent {
    constructor(props) {
        super();
        this.state = {
          newData: [],
          value: "",
          active: null,
          editID: null,
          time: Date.now()
        };
      };
      //获取输入框的值；
      onChange = (value) => {
        this.setState({ value });
      }
      // //搜索框；
      // onSearch = () => {
      //   //每个500毫秒 获取；
      //   let now = Date.now();
      //   let { time, value } = this.state;
      //   if (now - time > 500) {
      //     let newData = this.filterArr("values", value, true);
      //     this.setState({ newData, time: now });
      //   }
      // }
      // //获取输入框回车的值和编辑某项后的回车的值；
      // onkeydown = (val, key, id) => {
      //   let newData;
      //   if (key === 13) {
      //     if (id) {
      //       newData = this.mapArr(id, val)
      //     } 
      //     this.setState({
      //       data: newData,
      //       newData,
      //       value: this.state.editID ? this.state.value : "",
      //       editID: null
      //     });
      //   }
      // }
      // //获取选择想的状态值 
      // fieldSelect = (field) => {
      //   let newData;
      //   switch (field) {
      //     case "noSelect":
      //       newData = this.filterArr("isChecked", false, true);
      //       this.setState({ newData });
      //       break;
      //     case "isSelect":
      //       newData = this.filterArr("isChecked", true, true)
      //       this.setState({ newData });
      //       break;
      //     default:
      //       break;
      //   }
      // }
      // //根据ID的操作的功能 减一项 失焦 选中的一项 编辑一项  切换一项
      // fieldID = (id) => {
      //   let newData;
      //   return (field) => {
      //     switch (field) {
      //       case "blur":
      //         newData = this.filterArr("id", id, false);
      //         this.setState({ data: newData, newData, editID: null });
      //         break;
      //       case "mouseOut":
      //         this.setState({ active: null });
      //         break;
      //       case "active":
      //         this.setState({ active: id });
      //         break;
      //       case "editID":
      //         this.setState({ editID: id });
      //         break;
      //       default:
      //         break;
      //     }
      //   }
      // }
      // // 
      render() {
        let { value } = this.state;
        console.log("app",this)
        return (
          <div className="todos">
            <Input/>
            <List/>
            <Tools/>
          </div>
        );
      }
}
const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)