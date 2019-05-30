import React from "react"
import {Switch, Route } from "react-router-dom"
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css';
import Home from "@/views/home"
import Users from "@/views/Users"
import InfoStatis from "@/views/users/infoStatis"
import Mywork from "@/views/users/mywork"



export default class Routes extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home"  component={Home}  />
          <Route exact path="/users" component={Users} />
          <Route exact path="/infostatis" component={InfoStatis} />
          <Route exact path="/mywork" component={Mywork} />
        </Switch>
    )
  }
}
  
