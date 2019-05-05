import Taro, { Component } from '@tarojs/taro'
import {connect} from "@tarojs/redux"
import {View, Text} from "@tarojs/components"
import {AtCard, AtTabs, AtTabsPane } from "taro-ui"
import Search from "@/components/Search"
import "./index.scss"
import Header from "@/components/Header"

class Warn extends Component {
  constructor(props){
    super(props)
    this.state={
      tabList: [
        {title: "未处理"},
        {title: "已处理"}
      ],
      current: 0
    }
  }

  render(){
    const {tabList, current} = this.state 
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="预警" />:''}
        <AtTabs
          tabList={tabList}
          current={current}
          onClick={(value)=>this.setState({current:value})}
        >
          <AtTabsPane>
            <Search 
              label1="预警类型"
              label2="预警事件类型"
              handlenSubmit={(value)=>console.log(value)}
            />
            <View className="warnList">
              <AtCard
                onClick={()=>Taro.navigateTo({
                  url: '/pages/warn/detail'
                })}
                extra='逾期通知'
                title='工作审批'
                isFull
              >
                <View>
                  <Text>姓名：张三</Text>
                  <View className="content">
                    <Text>XXX项目中的【总成/零件】-XXX 的工艺审查 提交审批已 [当前日期 - 提交日期]天未审批</Text>
                  </View>
                  <View className="bottom">
                    <Text>预警日期: 2019-03-01~2019-03-02</Text>
                    <View>
                      <Text>预警次数：</Text>
                      <Text className="redColor">15</Text>
                    </View>
                  </View>
                </View>
              </AtCard>
              <AtCard
                extra='逾期通知'
                title='工作审批'
                isFull
              >
                <View>
                  <Text>姓名：张三</Text>
                  <View className="content">
                    <Text>XXX项目中的【总成/零件】-XXX 的工艺审查 提交审批已 [当前日期 - 提交日期]天未审批</Text>
                  </View>
                  <View className="bottom">
                    <Text>预警日期: 2019-03-01~2019-03-02</Text>
                    <View>
                      <Text>预警次数：</Text>
                      <Text className="redColor">15</Text>
                    </View>
                  </View>
                </View>
              </AtCard>
            </View>
          </AtTabsPane>
          
          <AtTabsPane>
            <Search 
              label1="预警类型"
              label2="预警事件类型"
              handlenSubmit={(value)=>console.log(value)}
            />
            <View className="warnList">
              <AtCard
                extra='逾期通知'
                title='工作审批'
                isFull
              >
                <View>
                  <Text>姓名：张三</Text>
                  <View className="content">
                    <Text>XXX项目中的【总成/零件】-XXX 的工艺审查 提交审批已 [当前日期 - 提交日期]天未审批</Text>
                  </View>
                  <View className="bottom">
                    <Text>预警日期: 2019-03-01~2019-03-02</Text>
                    <View>
                      <Text>预警次数：</Text>
                      <Text className="redColor">15</Text>
                    </View>
                  </View>
                </View>
              </AtCard>
              <AtCard
                extra='逾期通知'
                title='工作审批'
                isFull
              >
                <View>
                  <Text>姓名：张三</Text>
                  <View className="content">
                    <Text>XXX项目中的【总成/零件】-XXX 的工艺审查 提交审批已 [当前日期 - 提交日期]天未审批</Text>
                  </View>
                  <View className="bottom">
                    <Text>预警日期: 2019-03-01~2019-03-02</Text>
                    <View>
                      <Text>预警次数：</Text>
                      <Text className="redColor">15</Text>
                    </View>
                  </View>
                </View>
              </AtCard>
            </View>
          </AtTabsPane>
          
        </AtTabs>
        
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Warn)

