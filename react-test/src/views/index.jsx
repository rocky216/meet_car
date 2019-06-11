import React from "react"
import App from "@/views/app"
import {Route, Redirect, withRouter} from "react-router-dom"
import {getToken } from "@/utils"

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      token: ''
    }
  }
  
  componentWillMount(){
    this.getToken()
    window._ROUTER = this.props.history
  }

  componentWillReceiveProps(nextProps){
    this.getToken()
  }

  getToken(){
    this.setState({
      token: getToken("token")?getToken("token"):''
    })
  }


  render(){
    const {token} = this.state

    return (
      <Route render={props=>{
        return token?<App/>:<Redirect to="/auth"/>
      }} />
    )
  }
}

export default withRouter(Index)