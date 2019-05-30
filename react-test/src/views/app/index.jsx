import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getappAction } from "@/actions/appAction"
import Routes from "@/routers"
import {Layout } from "antd"
import SideBar from "@/components/SideBar"
import "./index.less"

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  componentWillMount(){
    this.props.actions.getappAction()
  }
 
  render(){
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider >
            <SideBar/>
          </Sider>
          <Content>
            <div style={{minHeight:"850px", padding:"10px", background: "#eee"}}>
              
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
    actions: bindActionCreators({getappAction}, dispatch)
  }
}

function mapStateProps(state){
  return {}
}

export default connect(mapStateProps, mapDispatchProps)(App)