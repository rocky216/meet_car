import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtAvatar, AtBadge, AtList, AtListItem} from 'taro-ui'
import { connect } from '@tarojs/redux'
import {bindActionCreators} from "redux"
import { homeAction } from '../../actions/index'
import WorkList from "@/components/WorkList"
import JCard from "@/components/JCard"



class Index extends Component {

  config = {
    
  }

  constructor(props){
    super(props)
    this.state={
      needbeList: [
        {title: "待办流程审批", icon: "icon iconfont icon-approval",link:"/pages/needbe/index", unread: 2},
        {title: "管理审批", icon: "icon iconfont icon-admin",link:"/pages/manage/index", unread: 3},
        {title: "未处理会签", icon: "icon iconfont icon-untreated",link:"/pages/unsign/index", unread: 18},
        {title: "零件工作审批", icon: "icon iconfont icon-parts",link:"/pages/parts/index", unread: 6},
        {title: "输出物审批", icon: "icon iconfont icon-output",link:"/pages/output/index", unread: 3}
      ] 
    }
  }

  componentWillReceiveProps (nextProps) { 
    
  }

  componentWillUnmount () {
    
  }

  componentDidShow () { 
    
  }

  componentDidHide () { }
  navigateTab(item){
    Taro.navigateTo({
      url: item.link
    })
  }
  handlenNavigate(val){
    let url = ''
    if(val == 1){
      url = "/pages/leave/index"
    }else if(val == 2){
      url = "/pages/overtime/index"
    }else if(val == 3){
      url = "/pages/account/index"
    }else if(val == 'sign'){
      url = "/pages/sign/index"
    }
    
    Taro.navigateTo({url})
  }
  render () {
    const {needbeList} = this.state
    
    return (
      <View> 
        <View className="top">
          <View className="title">
            <Text>个人办公，轻松工作</Text>
          </View>
          <View className="header">
            <View className="headImg">
              <AtAvatar 
                className="img" 
                circle size="large" 
                image="https://jdc.jd.com/img/115" 
              />
            </View>
            <View className="text">
              <Text className="redColor mgr20 nosigin">您今天还未签到！</Text>
              <View className="sign" onClick={this.handlenNavigate.bind(this, 'sign')}>
                <Text>立即签到</Text>
                <Text className="icon iconfont icon-arrow-right"></Text>
              </View>
            </View>
          </View>
        </View>
        <View className="work_wrap">
          <View className="workList">
            <View className="work_pos">
              <WorkList />
            </View>
          </View>
        </View>
        <View className="card">
          <JCard title="代办工作" >
            <View className="needbe">
              {needbeList.map((item, index)=>(
                <View className="needbe_item" onClick={this.navigateTab.bind(this, item)} key={index}>
                  <View>
                    <AtBadge value={item.unread}>
                      <View className="iconImg">
                        <Text className={item.icon}></Text>
                      </View>
                    </AtBadge>
                  </View>
                  <Text>{item.title}</Text>
                </View>
              ))}
            </View>
          </JCard>
        </View>
        
        <View className="option">
          <View className="option_item" onClick={this.handlenNavigate.bind(this,1)}>
            <Text className="icon iconfont icon-leave"></Text>
            <Text className="text">个人请假</Text>
          </View>
          <View className="option_item" onClick={this.handlenNavigate.bind(this,2)}>
            <Text className="icon iconfont icon-overtime"></Text>
            <Text className="text">加班请假</Text>
          </View>
          <View className="option_item" onClick={this.handlenNavigate.bind(this,3)}>
            <Text className="icon iconfont icon-reimbursement"></Text>
            <Text className="text">个人报销</Text>
          </View>
        </View>
      
        <View className="notice">
          <JCard title="公告信息" link="/">
            <AtList hasBorder={false}>
              <AtListItem
                hasBorder={false}
                title="关于3月份升职人员的通知"
                arrow='right'
              />
            </AtList>
            <AtList>
              <AtListItem
                hasBorder={false}
                title="关于3月份升职人员的通知"
                arrow='right'
              />
            </AtList>
            <AtList>
              <AtListItem
                hasBorder={false}
                title="关于3月份升职人员的通知"
                arrow='right'
              />
            </AtList>
          </JCard>
        </View>
      </View>
    )
  }
}

function mapDispatchProps(dispatch){
  return {
    actions: bindActionCreators({homeAction}, dispatch)
  }
}

function mapStateProps(state){
  
  return {

  }
}

export default connect(mapStateProps, mapDispatchProps)(Index)
