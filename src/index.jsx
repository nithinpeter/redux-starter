import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { Provider } from "react-redux";
import store from "./store";

const appToRender = <Provider store={store}>
    <App />
</Provider>


ReactDOM.render(appToRender, document.body);

