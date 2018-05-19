import React from "react";
import {render} from "react-dom";
import Todo from "./page/index.jsx";
import { Provider } from 'react-redux';
import  store from "./redux/store.js" ;
import "./index.css";
render(
    <Provider store={store}>
        <Todo/>
    </Provider>
 ,document.getElementById("app"));