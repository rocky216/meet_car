import React from "react"
import {Link, withRouter } from "react-router-dom"
import { Menu, Icon } from 'antd'
import menus from "./menus"

const SubMenu = Menu.SubMenu;


class SideBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'dark',
      current: '101',
      menus
    }
  }
  
  handleClick (e){
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { menus } = this.state
    
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick.bind(this)}
          defaultSelectedKeys={[this.state.current]}
          defaultOpenKeys={['1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {menus.map(item=>(
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {item.children && item.children.length>0?
                item.children.map(elem=>(
                  <Menu.Item key={elem.key.toString()}>
                    <Link to={elem.link}>{elem.title}</Link>
                  </Menu.Item>
                )):null}
            </SubMenu>
          ))}
          
        </Menu>
      </div>
    );
  }
}


export default withRouter(SideBar)