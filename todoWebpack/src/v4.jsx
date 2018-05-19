
import React, { PureComponent } from 'react';
class List extends PureComponent {
  render() {
    let { data } = this.props;
    return (
      <ul className="w ul">
        <ListItem data={data} key={"item"}
          UpdateKeyDown={this.props.UpdateKeyDown}
          toggleCheck={this.props.toggleCheck}
          fieldID={this.props.fieldID}
        />
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
          onMouseOut={() => this.props.fieldID(item.id)("mouse")}
          onMouseOver={() => this.props.fieldID(item.id)("mouse")}
          >
            <ListItemContent
              item={item}
              fieldID={this.props.fieldID}
              toggleCheck={this.props.toggleCheck}
              UpdateKeyDown={this.props.UpdateKeyDown}
            />
          </li>
        );
      })
    )
  }
}
class ListItemContent extends PureComponent {
  render() {
    let { item } = this.props;
    return (
      <div ref="ItemContent">
        {
          !item.id.option.isEdit ?
            <div onDoubleClick={() => {
              this.props.fieldID(item.id)("edit")
            }}
              className="item-input">
              {
                item.id.option.isChecked ? <del className="c2">{item.value}</del> :
                  <span>{item.value}</span>
              }
            </div>
            : <ListItemUpdate item={item}
              fieldID={this.props.fieldID}
              UpdateKeyDown={this.props.UpdateKeyDown} />
        }
        <input type="checkbox" checked={item.id.option.isChecked}
          className="item-checkbox"
          onChange={() => this.props.toggleCheck(item)} />
        <button className={item.id.option.isAction ? "item-btn block" : "item-btn"}
          onClick={() => this.props.fieldID(item.id)("subItem")}>&#935;</button>
      </div>
    )
  }
}

class ListItemUpdate extends PureComponent {
  onKeyDown = (value, key, id) => {
    this.props.UpdateKeyDown(value, key, id);
  }
  render() {
    let { item } = this.props;
    return <input type="text"
      className="item-input"
      autoFocus
      onKeyDown={(e) => this.onKeyDown(e.target.value, e.keyCode, item.id)} />
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
      onKeyDown={(e) => this.props.onkeydown(e.target.value, e.keyCode)} />
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

  onChange = (value) => { this.setState({ value }); }
  onkeydown = (value, key) => {
    if (key === 13) {
      let data = [
        ...this.state.data,
        {
          value,
          id: {code: parseInt(Math.random() * 100) + Date.now(),
            option: {isChecked: false,isAction: true, isEdit: false, }
          } }
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
            id: {
              ...item.id,
              option: {
                ...item.id.option,
                isEdit: false
              }
            },
            value: v
          }
        } else {
          return item;
        }
      });
      this.setState({
        data: newData,
        newData
      });
    }
  }
  toggleCheck = (v) => {
    let { data } = this.state;
    let newData = data.map((item) => {
      if (item === v) {
        return {
          id: {
            ...item.id,
            option: {
              ...item.id.option,
              isChecked: !item.id.option.isChecked,
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

  fieldSelect = (field) => {
    let { data } = this.state;
    let newData;
    switch (field) {
      case "allSelect":
        newData = data.map((item) => {
          return {
            id: {
              ...item.id,
              option: {
                ...item.id.option,
                isChecked: true,
              }
            },
            value: item.value,
          }
        });
        this.setState({ data: newData, newData });
        break;
      case "noSelect":
        newData = data.filter(item => item.id.option.isChecked === false);
        this.setState({ newData });
        break;
      case "isSelect":
        newData = data.filter(item => item.id.option.isChecked === true);
        this.setState({ newData });
        break;
      case "batchDel":
        newData = data.filter(item => item.id.option.isChecked === false);
        this.setState({ data: newData, newData });
        break;
      default:
        break;
    }
  }

  fieldID = (id) => {
    let { data } =this.state;
    let newData;
    return (field) => {
      switch (field) {
        case "subItem":
          newData = data.filter(item => item.id !== id);
          this.setState({ data:newData, newData});
          break;
        case "mouse":
          newData = data.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                id: {
                  ...item.id,
                  option: {
                    ...item.id.option,
                    isAction: !item.id.option.isAction,
                  }
                }
              }
            } else {
              return item;
            }
          });
          this.setState({ data: newData,newData });
          break;
        case "edit":
          newData = data.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                id: {
                  ...item.id,
                  option: {
                    ...item.id.option,
                    isEdit: !item.id.option.isEdit,
                  }
                }
              }
            } else {
              return item;
            }
          });
          this.setState({ data: newData,newData  });
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
        <Input
          value={value}
          onkeydown={this.onkeydown}
          onChange={this.onChange} />
        <List
          data={newData}
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
