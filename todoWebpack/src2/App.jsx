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
    render() {
        return (
            <div className="mySimpleTodos">
                <TodoTitle />
                <TodoInput />
                <TodoList />
                <TodoTools />
            </div>
        )
    }
}