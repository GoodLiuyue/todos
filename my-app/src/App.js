import React, { PureComponent } from 'react';
import "./index.css";
class List extends PureComponent{
  render() {
    let { data } =this.props;
    return (
      <ul className="">
         <ListItem data={data} key={"item"}
         onSubListItem={this.props.onSubListItem}
         onMouseOn={this.props.onMouseOn}
         onMouseOff={this.props.onMouseOff}
         onDoubleClick={this.props.onDoubleClick}
         UpdateChange={this.props.UpdateChange}
         UpdateKeyDown={this.props.UpdateKeyDown}
         toggleCheck={this.props.toggleCheck}
         onBlur={this.props.onBlur}
         editID={this.props.editID}/>
      </ul>
    );
  }
}
class ListItem extends PureComponent{
  render() {
    let { data } =this.props;
    return (
      data.map((item,index)=>{
        return (
            <li key={item.id} className={{}} style={{height:"50px",border:"1px solid red"}}
              onMouseOut={()=>this.props.onMouseOff(item)}
              onMouseOver={()=>this.props.onMouseOn(item)}
              >
                <ListItemContent item={item}
                editID={this.props.editID}
                toggleCheck={this.props.toggleCheck}
                onDoubleClick={this.props.onDoubleClick}
                UpdateChange={this.props.UpdateChange}
                UpdateKeyDown={this.props.UpdateKeyDown}
                onBlur={this.props.onBlur}
                onSubListItem={this.props.onSubListItem}/>
            </li>
        );
      })
    )
  }
}
class ListItemContent extends PureComponent{
  constructor(){
    super();
  }
  render() {
      let {item,editID} =this.props;
      return(
        <div ref="ItemContent">
              <input type="checkbox" checked={item.isChecked}
              onChange={()=>this.props.toggleCheck(item)}/>
              {
              ! ( editID === item.id )  ?
              <div onDoubleClick={()=>this.props.onDoubleClick(item.id)}
                style={{width:"400px",display:"inline-block",fontSize:"14px"}}>
                {item.values}</div>  
                : <ListItemUpdate item={item}
                onBlur={this.props.onBlur}
                UpdateChange={this.props.UpdateChange}
                UpdateKeyDown={this.props.UpdateKeyDown}/> 
              } 
                <button onClick={()=>this.props.onSubListItem(item)}>&#935;</button>
        </div>
      )
  }
}

class ListItemUpdate extends PureComponent{
  onKeyDown =  (value,key,id) => {
     this.props.UpdateKeyDown(value,key,id);
  }
  render() {
    let {item} =this.props;
    return <input type="text" 
    onBlur={(e)=>this.props.onBlur(item.id)}
    onKeyDown={(e)=>this.onKeyDown(e.target.value,e.keyCode,item.id)}/>
  }
}
class Tools extends PureComponent{
  render(){
    return [
      <span key={"length"}> 总共{this.props.data.length}条数据</span>   ,
      <button key={"allselect"} onClick={this.props.allSelect}>全选</button>,
      <button key={"noselect"} onClick={this.props.noSelect}>未被选择</button>,
      <button key={"select"} onClick={this.props.isSelect}>被选择</button>,
      <button key={"del"} onClick={this.props.batchDel}>批量删除</button>,
    ]
  }
}
class Input extends PureComponent{
  render() {
    return <input type="text" 
      value={this.props.value} 
      onChange={(e)=>this.props.onChange(e.target.value)}
      onKeyDown={(e)=>this.props.onkeydown(e.target.value,e.keyCode)}/>
  }
}
class App extends PureComponent {
  constructor(props){
    super();
    this.state={
      data:[],
      newData:[],
      value:"",
      editID:null
    };
  };

  onChange = (value) =>{
    this.setState({
      value
    });
  }
  onkeydown = (values,key) =>{
    if(key === 13){
      let item ={
        values,
        id:Math.random()+new Date(),
        isChecked:false
      };
      this.setState({
        data:[
          ...this.state.data,
          item
        ],
        newData:[
          ...this.state.data,
          item
        ],
        value:""
      });
    }
  }
  onSubListItem = (v) =>{
    let data=this.state.data.filter(item=>item !==v);
    this.setState({
      data,
      newData:data
      }
    )
  }
  onMouseOff = (v) =>{
    let {data} =this.state;
    let newData=data.map((item)=>{
      if(item.id === v.id){
        return {
          id: item.id,
          values: item.values,
          isChecked:false
        }
      }else{
        return item;
      }
    });
    this.setState({
      data:newData,
      newData
    });
  }
  onMouseOn = (v) =>{
    let {data} =this.state;
    let newData=data.map((item)=>{
      if(item===v){
        return {
          id: item.id,
          values: item.values,
          isChecked:true
        }
      }else{
        return item;
      }
    });
    this.setState({
      data:newData,
        newData
    });
  }
  toggleCheck = (v) =>{
    let {data} =this.state;
    let newData=data.map((item)=>{
      if(item === v){
        let checked = v.isChecked === true ?false:true;
        console.log(checked)
        return {
          id: item.id,
          values: item.values,
          isChecked:checked
        }
      }else{
        return item;
      }
    });
    this.setState({
      data:newData,
      newData
    });
  }
  allSelect = () =>{
    let {data} =this.state;
    let newData=data.map((item)=>{
        return {
          id: item.id,
          values:item.values,
          isChecked:true
        }
      });
      this.setState({data:newData,newData});
  }
  noSelect = () =>{
    let newData=this.state.data.filter(item =>item.isChecked === false);
    this.setState({
      newData,
    });
  }
  isSelect = () =>{
    let newData=this.state.data.filter(item =>item.isChecked === true);
    this.setState({
      newData,
    });
  }
  batchDel = () =>{
    let newData=this.state.data.filter(item =>item.isChecked === false);
    this.setState({
      data:newData,
      newData,
    });
  }

  onDoubleClick = (id) =>{
    this.setState({
      editID:id
    });
  }

  UpdateKeyDown =  (v,key,id) =>{
    let {data} =this.state;
    if(key === 13){
      let newData=data.map((item)=>{
        if(item.id === id){
          return {
            id: item.id,
            values: v,
            isChecked:item.isChecked
          }
        }else{
          return item;
        }
      });
     this.setState({
        data:newData,
        newData,
        editID:null
      });
    }
}

  UpdateChange = (v,id) => {
    let {data} =this.state;
    let newData=data.map((item)=>{
      if(item.id === id){
        return {
          id: item.id,
          values: v,
          isChecked:item.isChecked
        }
      }else{
        return item;
      }
    });
    this.setState({
      data:newData,
      newData,
      editID:null
    });
  }


  onBlur = (id) => {
    let data=this.state.data.filter(item=>item.id !== id);
    this.setState({
      data:data,
      newData:data,
      editID:null
    });
  }
  render() {
    let {value, data ,newData,editID}=this.state;
    return (
      <div className="todos" style={{width:"600px",margin:"250px auto"}}>
        <Tools allSelect={this.allSelect} noSelect={this.noSelect}
        isSelect={this.isSelect} batchDel={this.batchDel}
        data={newData}/>
        <Input value={value} onkeydown={this.onkeydown} onChange={this.onChange}/>
        <List data={newData} 
        editID={editID}
        onSubListItem={this.onSubListItem}
        onMouseOn={this.onMouseOn}
        onMouseOff={this.onMouseOff}
        onDoubleClick={this.onDoubleClick}
        toggleCheck={this.toggleCheck}
        UpdateChange={this.UpdateChange}
        onBlur={this.onBlur}
        UpdateKeyDown={this.UpdateKeyDown}/>
      </div>
    );
  }
}

export default App;
