import { createStore ,combineReducers,applyMiddleware} from 'redux'
import todoApp from "./reducer.js";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
let Reducer = combineReducers({
    todoApp
});
let store = createStore(Reducer);
console.log("store",store);
export default store;