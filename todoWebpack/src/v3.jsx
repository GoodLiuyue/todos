
import React, { PureComponent } from 'react';
import "./index.css";
import List from "./component/List.jsx";  
import Input from "./component/Input.jsx";  
import Tools from "./component/Tools.jsx";  
// class List extends PureComponent {
//   render() {
//     let { data, active, editID } = this.props;
//     return (
//       <ul className="w ul">
//         <ListItem data={data} key={"item"}
//           UpdateKeyDown={this.props.UpdateKeyDown}
//           toggleCheck={this.props.toggleCheck}
//           fieldID={this.props.fieldID}
//           activeID={this.props.activeID}
//           active={active}
//           editID={editID} />
//       </ul>
//     );
//   }
// }
// class ListItem extends PureComponent {
//   render() {
//     let { data, active, editID } = this.props;
//     return (
//       data.map((item, index) => {
//         return (
//           <li key={item.id} className="w item"
//             onMouseOut={() => this.props.fieldID(item.id)("mouseOut")}
//             onMouseOver={() => this.props.activeID("active", item.id)}>
//             <ListItemContent item={item}
//               active={active}
//               editID={editID}
//               activeID={this.props.activeID}
//               fieldID={this.props.fieldID}
//               toggleCheck={this.props.toggleCheck}
//               UpdateKeyDown={this.props.UpdateKeyDown}
//             />
//           </li>
//         );
//       })
//     )
//   }
// }
// class ListItemContent extends PureComponent {
//   render() {
//     let { item, editID, active } = this.props;
//     return (
//       <div ref="ItemContent">
//         {
//           !(editID === item.id) ?
//             <div onDoubleClick={() => this.props.activeID("editID", item.id)}
//               className="item-input">
//               {
//                 item.isChecked ? <del className="c2">{item.values}</del> :
//                   <span>{item.values}</span>
//               }
//             </div>
//             : <ListItemUpdate item={item}
//               fieldID={this.props.fieldID}
//               UpdateKeyDown={this.props.UpdateKeyDown} />
//         }
//         <input type="checkbox" checked={item.isChecked}
//           className="item-checkbox"
//           onChange={() => this.props.toggleCheck(item)} />
//         <button className={active === item.id ? "item-btn block" : "item-btn"}
//           onClick={() => this.props.fieldID(item.id)("subItem")}>&#935;</button>
//       </div>
//     )
//   }
// }

// class ListItemUpdate extends PureComponent {
//   onKeyDown = (value, key, id) => {
//     this.props.UpdateKeyDown(value, key, id);
//   }
//   render() {
//     let { item } = this.props;
//     return <input type="text"
//       className="item-input"
//       autoFocus
//       onBlur={() => this.props.fieldID(item.id)("blur")}
//       onKeyDown={(e) => this.onKeyDown(e.target.value, e.keyCode, item.id)} />
//   }
// }
// class Tools extends PureComponent {
//   render() {
//     let fieldSelect = this.props.fieldSelect;
//     return (
//       <div className="w toolbox clearfix">
//         <span className="total"> 总共{this.props.data.length}条数据</span>
//         <button className="allSelect btn" onClick={() => fieldSelect("allSelect")}>全选</button>
//         <button className="noSelect btn" onClick={() => fieldSelect("noSelect")}>未被选择</button>
//         <button className="isSelect btn" onClick={() => fieldSelect("isSelect")}>被选择</button>
//         <button className="batchDel btn" onClick={() => fieldSelect("batchDel")}>批量删除</button>
//       </div>
//     )
//   }
// }
// class Input extends PureComponent {
//   render() {
//     return <input type="text" className="w input"
//       value={this.props.value}
//       onChange={(e) => this.props.onChange(e.target.value)}
//       onKeyDown={(e) => this.props.onkeydown(e.target.value, e.keyCode)} />
//   }
// }
class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      data: [],
      newData: [],
      value: "",
      active: null,
      editID: null
    };
  };

  onChange = (value) => { this.setState({ value }); }
  onkeydown = (values, key) => {
    if (key === 13) {
      let item = {
        values,
        id: Math.random() + new Date(),
        isChecked: false
      };
      let data = [
        ...this.state.data,
        item
      ];
      this.setState({
        data,
        newData: data,
        value: ""
      });
    }
  }
  UpdateKeyDown = (v, key, id) => {
    let { data } = this.state;
    if (key === 13) {
      let newData = data.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            values: v,
            isChecked: item.isChecked
          }
        } else {
          return item;
        }
      });
      this.setState({
        data: newData,
        newData,
        editID: null
      });
    }
  }
  toggleCheck = (v) => {
    let { data } = this.state;
    let newData = data.map((item) => {
      if (item === v) {
        let checked = v.isChecked === true ? false : true;
        return {
          id: item.id,
          values: item.values,
          isChecked: checked
        }
      } else {
        return item;
      }
    });
    this.setState({ data: newData, newData });
  }



  fieldSelect = (field) => {
    let { data } = this.state;
    let newData;
    switch (field) {
      case "allSelect":
        newData = data.map((item) => {
          return {
            id: item.id,
            values: item.values,
            isChecked: true
          }
        });
        this.setState({ data: newData, newData });
        break;
      case "noSelect":
        newData = data.filter(item => item.isChecked === false);
        this.setState({ newData });
        break;
      case "isSelect":
        newData = data.filter(item => item.isChecked === true);
        this.setState({ newData });
        break;
      case "batchDel":
        newData = data.filter(item => item.isChecked === false);
        this.setState({ data: newData, newData });
        break;
      default:
        break;
    }
  }
  activeID = (field, id) => {
    this.setState({ [field]: id });
  }
  fieldID = (id) => {
    let data = this.state.data.filter(item => item.id !== id);
    return (field) => {
      switch (field) {
        case "subItem":
          this.setState({ data, newData: data });
          break;
        case "blur":
          this.setState({
            data: data,
            newData: data,
            editID: null
          });
          break;
        case "mouseOut":
          this.setState({ active: null });
          break;
        default:
          break;
      }
    }
  }
  render() {
    let { value, data, newData, editID, active } = this.state;
    return (
      <div className="todos">
        <Input value={value} onkeydown={this.onkeydown} onChange={this.onChange} />
        <List data={newData}
          active={active}
          editID={editID}
          activeID={this.activeID}
          fieldID={this.fieldID}
          toggleCheck={this.toggleCheck}
          UpdateKeyDown={this.UpdateKeyDown} />
        {
          data.length > 0 &&
          <Tools fieldSelect={this.fieldSelect} data={newData} />
        }
      </div>
    );
  }
}
export default App;
