

  //循环数组；
  // ID： 传入的id;
  // values:传入的值
  // toggle :是否切换
  // all :是否全选
  let mapArr = (id, value, toggle, all) => {
    let values = value.replace(/^(\s)|(\s)$/g, "");//去掉首尾空格
    let { data } = this.state;
    if (toggle && typeof toggle !== "boolean") return;
    if (all && typeof all !== "boolean") return;
    let newData = data.map(item => {
      if (all) {
        return {
          id: item.id,
          values: item.values,
          isChecked: true
        }
      }
      if (item.id === id) {
        return {
          id: id ? id : item.id,
          values: values ? values : item.values,
          isChecked: toggle ? item.isChecked === true ? false : true : item.isChecked
        }
      } else {
        return item;
      }
    });
    return newData;
  }
  //过滤符合某项条件的数组；
  //equal 过滤是否符合；
  let filterArr = (key, val, equal) => {
    if (equal && typeof equal !== "boolean") return;
    let { data } = this.state;
    let newData;
    return newData = data.filter(item => equal ? item[key] === val : item[key] !== val)
  }

  export {
    mapArr,
    filterArr
  }



  