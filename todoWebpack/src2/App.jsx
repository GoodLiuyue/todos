import React, { PureComponent } from "react";
import TodoInput from "./component/TodoInput.jsx";
import TodoList from "./component/TodoList.jsx";
import TodoTitle from "./component/TodoTitle.jsx";
import TodoTools from "./component/TodoTools.jsx";
export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            key: ""
        }
    }
    handleValue = (e,callback) => {
        if (e.keyCode !== 13) return false;
        this.setState({
            data: [
                ...this.state.data, {
                    value: e.target.value,
                    id: new Date().getTime() + Math.random(),
                    isChecked: false,
                }]
        },()=>{callback()});
    }

    handleEdit = (id, e, callback) => {
        if (e.keyCode !== 13) return false;
        let data = this.state.data.map(item => {
            if (item.id === id) {
                return {
                    value: e.target.value,
                    id: item.id,
                    isChecked: item.isChecked,
                }
            } else {
                return item
            }
        })
        this.setState({
            data
        },()=>{callback()});
    }
    isDel = (id) => {
        this.setState({
            data: this.state.data.filter(item => item.id !== id)
        });
    }
    doubleClickValue = (id, value) => {
        this.setState({
            data: this.state.data.map(item => {
                if (item.id === id) {
                    return {
                        value,
                        id: item.id,
                        isChecked: item.isChecked
                    }
                }
                else {
                    return item;
                }
            })
        });
    }
    batchDel = () => {
        this.setState({
            data: this.state.data.filter(item => item.isChecked === false)
        });
    }
    batchChecked = () => {
        let { data } =this.state,
        checkedValue = ! data.every((item,index,array) => item.isChecked === true)
        this.setState({
            data: data.map(item => {
                return {
                    value: item.value,
                    id: item.id,
                    isChecked: checkedValue
                }
            })
        });
    }

    handleChecked = (id) => {
        console.log("666")
        let data = this.state.data.map(item => {
            if (item.id === id) {
                return {
                    value: item.value,
                    id: item.id,
                    isChecked: !item.isChecked
                }
            } else {
                return item;
            }
        });
        this.setState({ data});
    }

    listData = (data) => {
        return data || this.state.data
    }

    onChangeData = (key) => {
        let { data } = this.state, newData = data;
        switch (key) {
            case "All":
                return newData;
                break;
            case "Completed":
                return newData.filter(item => item.isChecked === false);
                break;
            case "Active":
                return newData.filter(item => item.isChecked === true);
                break;
            default:
                return newData;
                break;
        }
        this.listData(newData);
    }

    onChangeKey = (key) =>{
        this.setState({  key })
    }
    render() {
        return (
            <div className="mySimpleTodos">
                <TodoTitle />
                <TodoInput handleValue={this.handleValue}
                    data={this.state.data}
                    batchChecked={this.batchChecked} />
                {
                    this.state.data.length > 0 &&
                    [<TodoList
                        key={new Date().getTime() + Math.random()}
                        data={this.onChangeData(this.state.key)}
                        isDel={this.isDel}
                        handleChecked={this.handleChecked}
                        doubleClickValue={this.doubleClickValue}
                        handleValue={this.handleValue}
                        handleEdit={this.handleEdit}
                    />,
                    <TodoTools
                        key={new Date().getTime() + Math.random()}
                        active ={this.state.key}
                        batchDel={this.batchDel}
                        onChangeKey= {this.onChangeKey}
                        onChangeData={this.onChangeData}
                    />]
                }
                {/* 
                 */}
            </div>
        )
    }
}