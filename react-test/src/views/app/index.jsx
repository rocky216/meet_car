import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Routes from "@/routers"
import {Layout} from "antd"
import SideBar from "@/components/SideBar"
import BreadCrumb from "@/components/BreadCrumb"
import HeaderBox from "@/components/Header"
import LinkTabs from "@/components/LinkTabs"
import "./index.less"
import Login from "@/views/auth"

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  componentWillMount(){
  }
 
  render(){
    const {component: Component, pending, logged, ...rest} = this.props
    

    return (
      <Layout>
        <Sider >
          <div style={{marginTop: "60px"}}></div>
          <SideBar/>
        </Sider>
        <Layout>
        <Header>
          <HeaderBox/>
        </Header>
          <Content>
            <div className="breadcrumb">
              <LinkTabs/>
            </div>
            <div style={{minHeight:"850px", padding:"0 10px 10px", background: "#eee"}}>
              <Routes/>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

function mapDispatchProps(dispatch){
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

function mapStateProps(state){
  console.log(state)
  return {}
}

export default connect(mapStateProps, mapDispatchProps)(App)