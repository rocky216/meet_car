import "antd/dist/antd.css"
import "@babel/polyfill"
import React from "react";
import {render} from "react-dom"
import {Provider} from "react-redux"
import {HashRouter, Route, Switch} from "react-router-dom"
import _ from "lodash"
import store from "@/store"
import App from "@/views/app"

if (module.hot) {
  module.hot.accept();
}

window._ = _;

render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
    
  </Provider>
  ,document.getElementById("root")
)