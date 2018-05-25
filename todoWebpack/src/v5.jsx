
import React, { PureComponent } from 'react';
let List = (props) => {
  let { data } = props;
  return (
    <ul className="w ul">
      <ListItem
        data={data}
        key={"item"}
        fieldID={props.fieldID}
        onKeyDown={props.onKeyDown} />
    </ul>
  );
}

let ListItem = (props) => {
  let { data } = props;
  return (//
    data.map((item, index) => {
      return <li key={Math.random()} className="w item"
        // onMouseLeave={() => props.fieldID(item.id)("isAction")}//
        // onMouseEnter={() => props.fieldID(item.id)("isAction")}//
        onMouseOut={() => props.fieldID(item.id)("isAction")}//
        onMouseOver={() => props.fieldID(item.id)("isAction")}//
      >
        <ListItemContent
          item={item}
          fieldID={props.fieldID}
          onKeyDown={props.onKeyDown} />
      </li>
    })
  )
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

let ListItemUpdate = (props) => {
  let { item } = props;
  return <input type="text"
    className="item-input" autoFocus
    onKeyDown={(e) => props.onKeyDown(e.target.value, e.keyCode, item.id)} />
}
let Tools = (props) => {
  let fieldSelect = props.fieldSelect;
  return (
    <div className="w toolbox clearfix">
      <span className="total"> 总共{props.data.length}条数据</span>
      
      <button className="allSelect btn" onClick={() => fieldSelect("allSelect")}>全选</button>
      <button className="noSelect btn" onClick={() => fieldSelect("noSelect")}>未被选择</button>
      <button className="isSelect btn" onClick={() => fieldSelect("isSelect")}>被选择</button>

      <button className="batchDel btn" onClick={() => fieldSelect("batchDel")}>批量删除</button>
    </div>
  )
}
let Input = (props) => {
  return <input type="text" className="w input"
    value={props.value}
    onChange={(e) => props.onChange(e.target.value)}
    onKeyDown={(e) => props.onKeyDown(e.target.value, e.keyCode)} />
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
  filterArr = (key, val, equal) => {//
    let { data } = this.state, newData;
    return newData = data.filter(item =>
      equal ? item.id.option[key] === val :
        item.id.option[key] !== val
    )
  }
  time = Date.now();
  timer = (time, id, field) => {
    let now = Date.now();
    if (now - time > 50) {
      this.time = now;
      this.mapArr(id, field);
    }
  }

  isAction = (id, value) => {
    let { data } = this.state, newData;
    newData = data.map((item) => {
      if (item.id === id) {
        return {
          id: {
            ...item.id,
            option: {
              ...item.id.option,
              isAction: value
            }
          },
          value: item.value
        }
      } else {
        return item;
      }
    });
    this.setState({ data: newData, newData });
  }
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
    let { data } = this.state, newData, now;
    return (field) => {
      switch (field) {
        case "code":
          // let newData = this.filterArr(field, id.code, false);
          let newData = this.state.data.filter(item => item.id !== id);
          this.setState({ data: newData, newData });
          break;
        case "isAction":
          this.time ? this.time : Date.now();
          this.timer(this.time, id, field);
          // this.mapArr(id, field);
          break;
        case "out":
          this.time ? this.time : Date.now();
          now = Date.now();
          if (now - time > 50) {
            this.time = now;
            this.isAction(id, false);
          }
          break;
        case "over":
          this.time ? this.time : Date.now();
          now = Date.now();
          if (now - time > 50) {
            this.time = now;
            this.isAction(id, true);
          }

          timer = (time, id, field) => {
            now = Date.now();
            if (now - time > 50) {
              this.time = now;
              this.mapArr(id, field);
            }
          }
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
    let { value, data, flag } = this.state;
    return (
      <div className="todos">
        <Input value={value} onKeyDown={this.onKeyDown} onChange={this.onChange} />
        <List data={data.filter()} fieldID={this.fieldID} onKeyDown={this.onKeyDown} />
        {
          data.length > 0 &&
          <Tools fieldSelect={this.fieldSelect} data={newData} onFlagChange />
        }
      </div>
    );
  }
}
export default App;
