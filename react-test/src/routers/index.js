import React from "react"
import {Switch, Route, withRouter, Redirect} from "react-router-dom"
import AnimatedRouter from 'react-animated-router'
import 'react-animated-router/animate.css';
import Home from "@/views/home"
import Users from "@/views/Users"
import InfoStatis from "@/views/users/infoStatis"
import Mywork from "@/views/users/mywork"
import WorkApproval from "@/views/users/workApproval"
import ErrorPage from "@/views/error"
import {handlenData} from "./routerdatas"

class Routes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      routes: []
    }
    
  }

  componentWillMount(){
    
  }

  render(){
    const {isLogin } = this.state
    
    return (
        <Switch>
          {handlenData.map(item=>(
            <Route 
              key={item.key}
              exact 
              path={item.link}
              component={item.component}  
            />
          ))}
          {/* <Route exact path="/"  component={Home}  />
          <Route exact path="/users" component={Users}  />
          <Route exact path="/users/infostatis" component={InfoStatis} />
          <Route exact path="/users/mywork" component={Mywork} />
          <Route exact path="/users/workApproval" component={WorkApproval} /> */}
          <Route exact key={1010} component={ErrorPage} />
        </Switch>
    )
  }
}

export default withRouter(Routes)
