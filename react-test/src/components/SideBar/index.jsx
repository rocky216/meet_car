import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link, withRouter} from "react-router-dom"
import { Menu, Icon } from 'antd'
import menus from "./menus"
import {getSelectKey} from "@/actions/appAction"

const SubMenu = Menu.SubMenu;


class SideBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'dark',
      openKey: '',
      selectKey: '0',
      menus
    }
  }
  
  componentWillMount(){
    
    this.getNavLink(this.props.location)
  }

  componentWillReceiveProps(nextProps){
    this.getNavLink(nextProps.location)
  }

  getNavLink(location){
    const pathArr = location.pathname.substring(1).split('/')
    if(pathArr.length==1){
      if(pathArr[0]==''){
        this.setState({
          selectKey: "0"
        })
      }
    }else{
      let obj1 = _.find(menus, o=>o.link==`/${pathArr[0]}`)
      if(obj1){
        let obj2 = _.find(obj1.children, o=>o.link==`/${pathArr[0]}/${pathArr[1]}`)
        obj2?this.setState({
          openKey: String(obj1.key),
          selectKey: String(obj2.key)
        }):null
      }
      
    }
  }
  handlenOpen(value){
    this.setState({
      openKey: String(value[1])
    })
  }

  handlenSelect({key}){
    if(key==0){
      this.setState({
        selectKey: String(key)
      })
    }
  }

  render() {
    const { menus, openKey, selectKey} = this.state
    
    return (
      <div>
        <Menu
          theme={this.state.theme}
          defaultOpenKeys={[openKey]}
          defaultSelectedKeys={[selectKey]}
          openKeys={[openKey]}
          selectedKeys={[selectKey]}
          onOpenChange={this.handlenOpen.bind(this)}
          onSelect={this.handlenSelect.bind(this)}
          mode="inline"
        >
          {menus.map(item=>{
            return (
                item.children && item.children.length>0?<SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </span>
                  }
                > {item.children && item.children.length>0?
                    item.children.map(elem=>(
                      <Menu.Item key={elem.key.toString()}>
                        <Link to={elem.link}>{elem.title}</Link>
                      </Menu.Item>
                    )):null}
                </SubMenu>
                :<Menu.Item key={item.key.toString()}>
                  <Link to={item.link}><Icon type={item.icon} />{item.title}</Link>
                </Menu.Item>
              )
            })}
          
        </Menu>
      </div>
    );
  }
}

function mapDispatchProps(dispatch){
  return {
    actions: bindActionCreators({getSelectKey }, dispatch)
  }
}

function mapStateProps(state){
  return {
    selectKey: state.app.selectKey
  }
}

export default withRouter(connect(mapStateProps, mapDispatchProps)(SideBar))