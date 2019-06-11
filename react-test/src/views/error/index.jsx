import React from "react"
import "./index.less"
import {Button } from "antd"

class ErrorPage extends React.Component {
  
  handlenBack(){
    this.props.history.goBack()
  }

  render(){
    return (
      <div className="error">
        <div className="text">
          <p className="error404">404</p>
          <Button type="primary" onClick={this.handlenBack.bind(this)}>返回上一页</Button>
        </div>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt=""/>
      </div>
    )
    
  }
}

export default ErrorPage