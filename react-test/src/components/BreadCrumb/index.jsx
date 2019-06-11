import React from "react"
import {Breadcrumb } from "antd"
import {Link, withRouter} from "react-router-dom"
import menus from "@/components/SideBar/menus"

class BreadCrumb extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      breadList: []
    }
  }
  
  componentWillMount(){
    
    
  }

  componentWillReceiveProps(nextProps){
    
  }


  render(){
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          11
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default withRouter(BreadCrumb)