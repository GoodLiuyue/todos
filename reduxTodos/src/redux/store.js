import { createStore } from 'redux'
import rootReducer from './reducers'
import todoApp from "./reducer.js";
import { combineReducers } from 'redux'
export default combineReducers({
    todoApp
})
const store = createStore(rootReducer)