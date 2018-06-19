import React, { PureComponent } from "react";
import TodoInput from "./component/TodoInput.jsx";
import TodoList from "./component/TodoList.jsx";
import TodoTitle from "./component/TodoTitle.jsx";
import TodoTools from "./component/TodoTools.jsx";
export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    handleValue = (e) => {
        if (e.keyCode !== 13) return false;
        this.setState({
            data: [
                ...this.state.data, {
                    value: e.target.value,
                    id:new Date().getTime() + Math.random(),
                    isChecked: false,
                }]
        });
    }

    handleEdit = (id,e) =>{
        if (e.keyCode !== 13) return false;
        let data = this.state.data.map(item=>{
            if(item.id ===id ){
              return {
                value: e.target.value,
                id:item.id,
                isChecked: item.isChecked,
              }  
            }else{
                return item 
            }
        })
        this.setState({
            data
        })
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
        this.setState({
            data: this.state.data.map(item => {
                return {
                    value: item.value,
                    id: item.id,
                    isChecked: !item.isChecked
                }
            }
            )
        });
    }

    handleChecked = (id) =>{
        console.log("666")
        let data = this.state.data.map(item =>{
            if( item.id = id){
                return {
                    value: item.value,
                    id: item.id,
                    isChecked: !item.isChecked
                }
            }else{
                return item;
            }
        });
        this.setState({
            data
        });
    }
    // isCompleted = () => {
    //     return this.state.data.fliter(item = item.isChecked === true)
    // }
    // isActive = () => {
    //     return this.state.data.fliter(item = item.isChecked === false)
    // }
    // isAll = () =>{
    //     return this.state.data;
    // }

    listData = (key) => {
        let { data } = this.state;
            switch (key) {
                case "All":
                    return data;
                    break;
                case "Completed":
                    return data.filter(item => item.isChecked === true)
                    break;
                case "Active":
                    return data.filter(item => item.isChecked === false)
                    break;
                default:
                    break;
        }
    }

    onChangeData = (type) => {
        return ()=>this.listData(type)
    }
    render() {
        console.log("data", this.state.data);
        return (
            <div className="mySimpleTodos">
                <TodoTitle />
                <TodoInput handleValue={this.handleValue}
                    batchChecked={this.batchChecked} />
                {
                    this.state.data.length > 0 &&
                    [<TodoList
                        data={this.onChangeData("All")()}
                        isDel={this.isDel}
                        handleChecked={this.handleChecked}
                        doubleClickValue={this.doubleClickValue}
                        handleValue={this.handleValue}
                        handleEdit={this.handleEdit}
                    />
                    ,
                    <TodoTools batchDel={this.batchDel}
                        onChangeData={this.onChangeData}
                        listData={this.listData}
                    />]
                }
            </div>
        )
    }
}