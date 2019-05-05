import Taro, {Component} from "@tarojs/taro"
import {View, Text, Label, Radio} from "@tarojs/components"
import { AtCard, AtButton, AtTextarea } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import MyInput from "@/components/MyInput"
import {detailList} from "./datas"
import Cell from "@/components/Cell"
import JCard from "@/components/JCard"
import Item from "@/components/Item"
import Header from "@/components/Header"

class LeaveDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      detailList: detailList
    }
  }

  render(){
    const {detailList} = this.state
    
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="个人请假" />:''}
        <View>
          {detailList.map((item, index)=>(
            <MyInput
              key={index}
              label={item.label}
              value={item.value}
              type={item.type}
            />
          ))}
        </View>
        <View className="mgt20">
          <Cell
            top="事假（2.0天）"
            left="2019-02-11 上午 ~ 2019-02-12 下午"
            arrowRight={true}
          />
          <Cell
            top="事假（2.0天）"
            left="2019-02-11 上午 ~ 2019-02-12 下午"
            arrowRight={true}
          />
          <View className="total">
            <Text className="primaryColor">合计请假4.0天</Text>
          </View>
        </View>
        <View className="mgt20">
          <JCard title="相关资料">
            <Item title="加班凭证" option="下载" />
            <Item title="加班凭证" option="下载" />
          </JCard>
        </View>
        <View className="mgt20">
          <JCard title="审批记录">
            <View className="tabel">
              <View className="tr">
                <Text className="tabelCell">审批人</Text>
                <Text className="tabelCell">审批节点</Text>
                <Text className="tabelCell">审批结果</Text>
                <Text className="tabelCell">审批意见</Text>
                <Text className="tabelCell">审批时间</Text>
              </View>
              <View className="tr">
                <Text className="tabelCell">刘端英</Text>
                <Text className="tabelCell">行政管理总监</Text>
                <Text className="tabelCell">通过</Text>
                <Text className="tabelCell">同意，请安排好工作</Text>
                <Text className="tabelCell">2019-02-11 11:39</Text>
              </View>
            </View>
          </JCard>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(LeaveDetail)