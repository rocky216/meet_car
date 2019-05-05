import Taro, {Component} from "@tarojs/taro"
import {View, Text, Radio, Label} from "@tarojs/components"
import { AtList,AtListItem, AtButton } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import MyInput from "@/components/MyInput"
import Approval from "@/components/Approval"
import {needbeDetail} from "./datas"
import Header from "@/components/Header"


class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      needbeDetail
    }
  }

  render(){
    const {needbeDetail} = this.state
    return (
      <View className="detail">
        {process.env.TARO_ENV==='h5'?<Header title="待办流程详情" />:''}
        <View className="type">
          <Label>
            <Radio value="1" />
            <Text>请假</Text>
          </Label>
          <Label>
            <Radio value="2" />
            <Text>取消请假</Text>
          </Label>
        </View>
        <View className="mgt20">
          {needbeDetail.map((item, index)=>(
            <MyInput
              key={index}
              label={item.label}
              value={item.value}
              type={item.type}
            />
          ))}
        </View>
        <View className="mgt20">
          <AtList hasBorder={false}>
            <AtListItem
              style={{width: '100%'}}
              title='事假(请假 2.0 天)'
              note="2019-02-11 上午 ~ 2019-02-12 下午"
            />
          </AtList>
          <View className="totalday">
            <Text>合计请假4.0天</Text>
          </View>
        </View>
        <View className="mgt20">
          <Approval
            label1="是否通过"
            label2="反馈内容"
            submitText="提交审批意见"
          />
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Detail)