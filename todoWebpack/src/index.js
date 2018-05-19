import React ,{ PureComponent,component } from "react";
import ReactDom,{ render } from "react-dom";
// import { Router } from "react-router";
import "./index.css";
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import App from "./v4.jsx";  
import Input from "./component/Input.jsx";/*  */
render(
    <Router>
        {/* <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">app</Link></li>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/app" component={App}/>
        </div> */}
       <App/>
    </Router>
,document.getElementById("root"));