import React, { PureComponent } from 'react';
let Tools=(props)=>{
  let fieldSelect =props.fieldSelect;
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
export default Tools;

// export default class Tools extends PureComponent {
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