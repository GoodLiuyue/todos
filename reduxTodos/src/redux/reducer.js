import * as type from "./active-type.js";
import { mapArr, filterArr } from "./util.js";
let initState = [];
function todoApp(state = initState, action) {
  switch (action.type) {
    case type.SUB_TODO:
      return state.filter(item => item.id !== payload.id);
      break;
    case type.ADD_TODO:
      return [
        ...state,{
          values: val,
          id: Math.random() + new Date(),
          isChecked: false
        }
      ];
      break;
    case type.BATCH_TODO:
      return state.filter(item => item.isChecked !== false);
      break;
    case type.ALL_SELECT_TODO:
      return state.map(item => item.isChecked === true);
      break;
    case type.SELECT_TODO:
      return state.map(item => {
        if (item.id === payload.id) {
          item.isChecked =! item.isChecked ;
        }
        return item;
      });
      break;
    default:
      return state;
  }
}
export default todoApp;