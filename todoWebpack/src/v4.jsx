
import React, { PureComponent } from 'react';
class List extends PureComponent {
  render() {
    let { data } = this.props;
    return (
      <ul className="w ul">
        <ListItem
          data={data}
          key={"item"}
          fieldID={this.props.fieldID}
          onKeyDown={this.props.onKeyDown} />
      </ul>
    );
  }
}
class ListItem extends PureComponent {
  render() {
    let { data } = this.props;
    return (
      data.map((item, index) => {
        return (
          <li key={Math.random()} className="w item"
            onMouseLeave={() => this.props.fieldID(item.id)("isAction")}
            onMouseEnter={() => this.props.fieldID(item.id)("isAction")}
            >
            <ListItemContent
              item={item}
              fieldID={this.props.fieldID}
              onKeyDown={this.props.onKeyDown} />
          </li>
        );
      })
    )
  }
}
class ListItemContent extends PureComponent {
  render() {
    let { item } = this.props,
      { id, value } = item, { option } = id,
      { isEdit, isAction, isChecked } = option;
    return (
      <div ref="ItemContent">
        {
          !isEdit ?
            <div onDoubleClick={() => { this.props.fieldID(id)("isEdit") }}
              className="item-input">
              {
                isChecked ? <del className="c2">{value}</del> :
                  <span>{value}</span>
              }
            </div>
            : <ListItemUpdate item={item} fieldID={this.props.fieldID}
              onKeyDown={this.props.onKeyDown} />
        }
        <div className={isChecked ? "item-checkbox active" : "item-checkbox"}
          onClick={() => this.props.fieldID(id)("isChecked")}>
          &#10003;
        </div>
        <button className={
          isAction ? "item-btn block" : "item-btn"}
          onClick={() => this.props.fieldID(id)("code")}>&#10005;</button>
      </div>
    )
  }
}

class ListItemUpdate extends PureComponent {
  render() {
    let { item } = this.props;
    return <input type="text"
      className="item-input" autoFocus
      onKeyDown={(e) => this.props.onKeyDown(e.target.value, e.keyCode, item.id)} />
  }
}
class Tools extends PureComponent {
  render() {
    let fieldSelect = this.props.fieldSelect;
    return (
      <div className="w toolbox clearfix">
        <span className="total"> 总共{this.props.data.length}条数据</span>
        <button className="allSelect btn" onClick={() => fieldSelect("allSelect")}>全选</button>
        <button className="noSelect btn" onClick={() => fieldSelect("noSelect")}>未被选择</button>
        <button className="isSelect btn" onClick={() => fieldSelect("isSelect")}>被选择</button>
        <button className="batchDel btn" onClick={() => fieldSelect("batchDel")}>批量删除</button>
      </div>
    )
  }
}
class Input extends PureComponent {
  render() {
    return <input type="text" className="w input"
      value={this.props.value}
      onChange={(e) => this.props.onChange(e.target.value)}
      onKeyDown={(e) => this.props.onKeyDown(e.target.value, e.keyCode)} />
  }
}
class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      data: [],
      newData: [],
      value: ""
    };
  };

  //maparr 
  //code id 的编号
  //type 全选 单选 编辑 效果
  //val  值
  mapArr = (code, type, val) => {
    let { data } = this.state, field;
    let newData = data.map((item) => {
      let { id, value } = item, { option } = id,
        { isEdit, isAction, isChecked } = option;
      if (type === "isEdit" || type === "isAction" || type === "isChecked") {
        field = type;
      } else if (type === "keydown") {
        field = "isEdit";
      } else {
        return {
          id: {
            ...id,
            option: {
              ...option,
              isChecked: true
            }
          },
          value
        }
      }
      if (id === code) {
        return {
          id: {
            ...id,
            option: {
              ...option,
              [field]: type === "keydown" ? false : !option[field]
            }
          },
          value: type === "keydown" ? val : value
        }
      } else {
        return item;
      }
    });
    this.setState({ data: newData, newData });
  };
  //filterArr
  //field 某一项 
  //type 相等不等
  filterArr = (key, val, equal) => {
    let { data } = this.state;
    let newData;
    return newData = data.filter(item =>
      equal ? item.id.option[key] === val :
        item.id.option[key] !== val
  )}
  onChange = (value) => { if (value) { this.setState({ value }); } }
  onKeyDown = (value, key, id) => {
    if (!value) return false;
    if (key === 13) {
      if (id) {
        this.mapArr(id, "keydown", value);
        return false;
      }
      let newData = [
        ...this.state.data,
        {
          value,
          id: {
            code: parseInt(Math.random() * 100) + Date.now(),
            option: { isChecked: false, isAction: false, isEdit: false }
          }
        }
      ];
      this.setState({ data: newData, newData, value: "" });
    }
  }

  fieldSelect = (field) => {
    let newData;
    switch (field) {
      case "allSelect":
        this.mapArr();
        break;
      case "noSelect":
        newData = this.filterArr("isChecked", false, true);
        // newData = this.state.data.filter(item => item.id.option.isChecked === false);
        this.setState({ newData });
        break;
      case "isSelect":
        newData = this.filterArr("isChecked", true, true);
        this.setState({ newData });
        break;
      case "batchDel":
        newData = this.filterArr("isChecked", false, true);
        this.setState({ data: newData, newData });
        break;
      default:
        break;
    }
  }
  fieldID = (id) => {
    return (field) => {
      switch (field) {
        case "code":
          // let newData = this.filterArr(field, id.code, false);
          let newData = this.state.data.filter(item => item.id !== id);
          this.setState({ data: newData, newData });
          break;
        case "isAction":
          this.mapArr(id, field);
          break;
        case "isEdit":
          this.mapArr(id, field);
          break;
        case "isChecked":
          this.mapArr(id, field);
          break;
        default:
          break;
      }
    }
  }
  render() {
    let { value, data, newData } = this.state;
    return (
      <div className="todos">
        <Input value={value} onKeyDown={this.onKeyDown} onChange={this.onChange} />
        <List data={newData} fieldID={this.fieldID} onKeyDown={this.onKeyDown} />
        {
          data.length > 0 &&
          <Tools fieldSelect={this.fieldSelect} data={newData} />
        }
      </div>
    );
  }
}
export default App;
