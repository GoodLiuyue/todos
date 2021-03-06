import React, { PureComponent } from 'react';
let Input = (props) => {
    return (
        <div className="toolbox">
            <input type="text" key={"input"}
                className="input"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={(e) => props.onkeydown(e.target.value, e.keyCode)} />
            <button key={"search"} className="btn searchBtn" onClick={props.onSearch}>搜索</button>
        </div>
    )
}
export default Input;

// export default class Input extends PureComponent {
//   render() {
//     return <input type="text" className="w input"
//       value={this.props.value}
//       onChange={(e) => this.props.onChange(e.target.value)}
//       onKeyDown={(e) => this.props.onkeydown(e.target.value, e.keyCode)} />
//   }
// }