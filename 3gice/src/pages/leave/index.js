import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Label, Radio} from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import MyInput from "@/components/MyInput"
import Cell from "@/components/Cell"

class Leave extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 0,
      tabList: [{
        title: "请假"
      },{
        title: "请假记录"
      }]
    }
  }

  render(){
    const {current, tabList} = this.state
    console.log(current)
    return (
      <View>
        <AtTabs 
          current={current} 
          tabList={tabList} 
          onClick={(current)=>this.setState({current})}>
          <AtTabsPane current={current} index={0}>
            <View className="leaveType">
              <Label className="type_item">
                <Radio/>
                <Text>请假</Text>
              </Label>
              <Label className="type_item">
                <Radio/>
                <Text>取消请假</Text>
              </Label>
            </View> 
            <View className="mgt20">
              <MyInput
                label="参与项目"
                value=""
                type="input"
              />
              <MyInput
                label="里程碑"
                value=""
                type="input"
              />
              <MyInput
                label="阶段"
                value=""
                type="input"
              />
              <MyInput
                label="专业"
                value=""
                type="input"
              />
              <MyInput
                label="流程选择"
                value=""
                type="input"
              />
              <MyInput
                label="工作地点"
                value=""
                type="input"
              />
              <MyInput
                label="请假事由"
                value=""
                type="input"
              />
            </View>
            <View className="mgt20">
              <View className="panel">
                <View className="title">
                  <Text>请假时间</Text>
                  <Text className="primaryColor">+添加请假时间</Text>
                </View>
                <View>
                  <View>
                    <Text>年假结余：</Text>
                    <Text>0.0天，总计 5 天</Text>
                  </View>
                  <View>
                    <Text>调休假结余：</Text>
                    <Text>1.0 天</Text>
                  </View>
                  <View>
                    <Text>已休法定假期：</Text>
                    <Text>高温假 2.0  婚假 0.0天   丧假 0.0天  陪产假 0.0天    产假 0.0天    妇女假 0.0天</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="mgt20">
              <View className="panel">
                <View className="title">
                  <Text>请假时间</Text>
                  <Text className="primaryColor">+添加请假时间</Text>
                </View>
                <View className="datasList">
                  <Text>请假凭证</Text>
                  <View>
                    <Text className="mgr20 primaryColor">下载</Text>
                    <Text className="primaryColor">删除</Text>
                  </View>
                </View>
                <View className="datasList">
                  <Text>请假凭证</Text>
                  <View>
                    <Text className="mgr20 primaryColor">下载</Text>
                    <Text className="primaryColor">删除</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="submitBtn">
              <AtButton type="primary">提交请假</AtButton>
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <Cell
              top="请假（1.5天）"
              right="2019-02-25（申请）"
              bottom="2019-02-28（审批中）"
              left="2019-02-10~2019-02-10"
            />
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

export default connect(mapStateProps)(Leave)