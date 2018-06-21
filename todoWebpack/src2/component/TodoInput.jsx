import React ,{ PureComponent }from "react";
import TodoInput_btn from "./TodoInput_btn.jsx";
import TodoInput_input from "./TodoInput_input.jsx";
import { runInThisContext } from "vm";
export default class TodoInput extends PureComponent{
    constructor(props){
      super();
      this.state={
        value:""
      }
    }
    render (){
      return(
        <div className="mySimpleTodos-inputBox">
          { this.props.data.length > 0  && 
            <TodoInput_btn    batchChecked={this.props.batchChecked} />
          }
          <TodoInput_input handleValue = {this.props.handleValue } />
        </div>
      )
    }
}