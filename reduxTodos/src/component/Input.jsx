import React, { PureComponent } from 'react';
let Input = (props) => {
    return (
        <div className="toolbox">
            <input type="text" key={"input"}
                className="input"
                value={props.value}/>
            <button key={"search"} className="btn searchBtn">搜索</button>
        </div>
    )
}
export default Input;