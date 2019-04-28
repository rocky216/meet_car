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
        {title: "待办流程审批", icon: "icon iconfont icon-approval",link:"/", unread: 2},
        {title: "管理审批", icon: "icon iconfont icon-admin",link:"/", unread: 3},
        {title: "未处理会签", icon: "icon iconfont icon-untreated",link:"/", unread: 18},
        {title: "零件工作审批", icon: "icon iconfont icon-parts",link:"/", unread: 6},
        {title: "输出物审批", icon: "icon iconfont icon-output",link:"/", unread: 3}
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
              <View className="sign">
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
                <View className="needbe_item" key={index}>
                  <Navigator url="/"> 
                    <View>
                      <AtBadge value={item.unread}>
                        <View className="iconImg">
                          <Text className={item.icon}></Text>
                        </View>
                      </AtBadge>
                    </View>
                    <Text>代办流程</Text>
                  </Navigator>
                </View>
              ))}
            </View>
          </JCard>
        </View>
        
        <View className="option">
          <View className="option_item">
            <Text className="icon iconfont icon-leave"></Text>
            <Text className="text">个人请假</Text>
          </View>
          <View className="option_item">
            <Text className="icon iconfont icon-leave"></Text>
            <Text className="text">个人请假</Text>
          </View>
          <View className="option_item">
            <Text className="icon iconfont icon-leave"></Text>
            <Text className="text">个人请假</Text>
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
