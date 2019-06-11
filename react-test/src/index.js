import './index.less';
import "@babel/polyfill"
import React from "react";
import {render} from "react-dom"
import {Provider} from "react-redux"
import {HashRouter, BrowserRouter, Route, Switch } from "react-router-dom"
import _ from "lodash"
import store from "@/store"
import Index from "@/views"
import Login from "@/views/auth"

if (module.hot) {
  module.hot.accept();
}

window._ = _;




render(
  <Provider store={store} >
    <HashRouter >
      <Switch>
        <Route path="/auth" component={Login} />
        <Index/>
      </Switch>
    </HashRouter>
    
  </Provider>
  ,document.getElementById("root")
)