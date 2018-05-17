import React ,{ PureComponent} from "react";
import List from "./component/List.jsx";
import Input from "./component/Input.jsx";
import Tools from "./component/Tools.jsx";
export default class Todo extends PureComponent {
    constructor(props) {
        super();
        this.state = {
          data: [],
          newData: [],
          value: "",
          active: null,
          editID: null,
          time: Date.now()
        };
      };
      //循环数组；
      // ID： 传入的id;
      // values:传入的值
      // toggle :是否切换
      // all :是否全选
      mapArr = (id, value, toggle, all) => {
        let values = value.replace(/^(\s)|(\s)$/g, "");//去掉首尾空格
        let { data } = this.state;
        if (toggle && typeof toggle !== "boolean") return;
        if (all && typeof all !== "boolean") return;
        let newData = data.map(item => {
          if (all) {
            return {
              id: item.id,
              values: item.values,
              isChecked: true
            }
          }
          if (item.id === id) {
            return {
              id: id ? id : item.id,
              values: values ? values : item.values,
              isChecked: toggle ? item.isChecked === true ? false : true : item.isChecked
            }
          } else {
            return item;
          }
        });
        return newData;
      }
      //过滤符合某项条件的数组；
      //equal 过滤是否符合；
      filterArr = (key, val, equal) => {
        if (equal && typeof equal !== "boolean") return;
        let { data } = this.state;
        let newData;
        return newData = data.filter(item => equal ? item[key] === val : item[key] !== val)
      }
      //获取输入框的值；
      onChange = (value) => {
        this.setState({ value });
      }
      //搜索框；
      onSearch = () => {
        //每个500毫秒 获取；
        let now = Date.now();
        let { time, value } = this.state;
        if (now - time > 500) {
          let newData = this.filterArr("values", value, true);
          this.setState({ newData, time: now });
        }
      }
      //获取输入框回车的值和编辑某项后的回车的值；
      onkeydown = (val, key, id) => {
        let newData;
        if (key === 13) {
          if (id) {
            newData = this.mapArr(id, val)
          } else {
            newData = [
              ...this.state.data,
              {
                values: val,
                id: Math.random() + new Date(),
                isChecked: false
              }
            ];
          }
          this.setState({
            data: newData,
            newData,
            value: this.state.editID ? this.state.value : "",
            editID: null
          });
        }
      }
      //获取选择想的状态值 
      fieldSelect = (field) => {
        let newData;
        switch (field) {
          case "allSelect":
            newData = this.mapArr("", "", "", true);
            this.setState({ data: newData, newData });
            break;
          case "noSelect":
            newData = this.filterArr("isChecked", false, true);
            // console.log("no", newData);
            this.setState({ newData });
            break;
          case "isSelect":
            newData = this.filterArr("isChecked", true, true)
            // console.log("is", newData);
            this.setState({ newData });
            break;
          case "batchDel":
            newData = this.filterArr("isChecked", false, true)
            this.setState({ data: newData, newData });
            break;
          default:
            break;
        }
      }
      //根据ID的操作的功能 减一项 失焦 选中的一项 编辑一项  切换一项
      fieldID = (id) => {
        let newData;
        return (field) => {
          switch (field) {
            case "subItem":
              newData = this.filterArr("id", id, false);
              this.setState({ data: newData, newData });
              break;
            case "blur":
              newData = this.filterArr("id", id, false);
              this.setState({ data: newData, newData, editID: null });
              break;
            case "mouseOut":
              this.setState({ active: null });
              break;
            case "active":
              this.setState({ active: id });
              break;
            case "editID":
              this.setState({ editID: id });
              break;
            case "toggle":
              newData = this.mapArr(id, "", true);
              this.setState({ data: newData, newData });
              break;
            default:
              break;
          }
        }
      }
      // 
      render() {
        let { value, data, newData, editID, active } = this.state;
        console.log("app",this)
        return (
          <div className="todos">
            <Input value={value}
              onSearch={this.onSearch}
              onkeydown={this.onkeydown}
              onChange={this.onChange} />
            <List data={newData}
              active={active}
              editID={editID}
              fieldID={this.fieldID}
              onkeydown={this.onkeydown} />
            {
              data.length > 0 &&
              <Tools fieldSelect={this.fieldSelect}
                data={newData} />
            }
          </div>
        );
      }
}