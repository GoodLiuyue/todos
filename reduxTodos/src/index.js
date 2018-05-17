import React from "react";
import {render} from "react-dom";
import Todo from "./page/index";
import { Provider } from 'react-redux'
render(
    <Provider>
        <Todo/>
    </Provider>
 ,document.getElementById("app"));