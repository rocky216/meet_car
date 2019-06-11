import React from "react"
import {withRouter } from "react-router-dom"
import {connect} from "react-redux"
import {Tabs } from "antd"
import {handlenData} from "@/routers/routerdatas"

const { TabPane } = Tabs


class LinkTabs extends React.Component {
  constructor(props){
    super(props)
    this.state={
      linkTabs:[],
      activeKey: ''
    }
  }

  componentWillMount(){
    var users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false }
    ];
     
    let aa = _.dropRightWhile(users, function(o) { return !o.active; })
    
    this.setLinkTab(this.props.location)
  }
  
  componentWillReceiveProps(nextProps){
    this.setLinkTab(nextProps.location)
  }
  setLinkTab(location){
    const {linkTabs} = this.state
    let link = _.find(handlenData, o=>o.link == location.pathname)
    if(!link) return 
    if( !_.find(linkTabs, o=>o.link==location.pathname) ){
      this.state.linkTabs.push(link)
    }
    this.setState({
      activeKey: link.key
    })
  }

  handlenEdit(key, type){
    const {linkTabs, activeKey} = this.state
    if(type=='remove' && linkTabs.length>1){
      let index = _.findIndex(linkTabs, o=>o.key==key)
      linkTabs.splice(index,1)
      this.setState({linkTabs})
      if(activeKey == key){
        this.props.history.goBack()
      } 
    }
  }
  handlenLink(key){
    let link = _.find(handlenData, o=>o.key==key).link
    if(link == this.props.location.pathname)return
    this.props.history.push(link)
  }
  render(){
    const {linkTabs, activeKey} = this.state
    
    return (
      <Tabs 
        hideAdd
        activeKey={activeKey}
        type="editable-card"
        onEdit={this.handlenEdit.bind(this)}
        onTabClick={this.handlenLink.bind(this)}
      >
        {linkTabs.map(item=>(
          <TabPane tab={item.title} key={item.key} />
        ))}
      </Tabs >
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default withRouter( connect(mapStateProps)(LinkTabs) )