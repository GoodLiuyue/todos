import React, { PureComponent } from 'react';
let Tools=(props)=>{
  return (
          <div className="w toolbox clearfix">
            <span className="total"> 总共{`0`}条数据</span>
            <button className="allSelect btn">全选</button>
            <button className="noSelect btn">未被选择</button>
            <button className="isSelect btn">被选择</button>
            <button className="batchDel btn">批量删除</button>
          </div>
        )
}
export default Tools;
