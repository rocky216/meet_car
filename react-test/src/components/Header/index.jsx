import React from "react"
import {withRouter } from "react-router-dom"
import {Icon} from "antd"
import "./index.less"
import {RemoveToken } from "@/utils"

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    console.log(this.props, 667)
  }
  loginOut(){
    RemoveToken()
    this.props.history.push('/login')
  }

  render(){
    return (
      <div className="header">
        <ul className="icons">
          <li>
            <Icon type="appstore" style={{color: '#fff', fontSize: '24px'}} />
          </li>
          <li>
            <Icon type="setting" style={{color: '#fff', fontSize: '24px'}}/>
          </li>
          <li>
            <Icon type="message" style={{color: '#fff', fontSize: '24px'}} />
          </li>
          <li>
            <Icon type="tool" style={{color: '#fff', fontSize: '24px'}} />
          </li>
          <li>
            <Icon type="logout" onClick={this.loginOut.bind(this)} style={{color: '#fff', fontSize: '24px'}} />
          </li>
        </ul>
      </div>
    )
  }
} 

export default withRouter(Header)