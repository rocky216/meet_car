import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtCard} from 'taro-ui'
import { connect } from '@tarojs/redux'
import MyInput from "@/components/MyInput"
import {detailList} from "./datas"
import JCard from "@/components/JCard"
import Cell from "@/components/Cell"

class UnsignDetail extends Component { 
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
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
          <JCard title="会签人员列表">
            <View className="signnamelist">
              <Text className="signname_item">朱荣国</Text>
              <Text className="signname_item">刘秋红</Text>
              <Text className="signname_item">黄朝</Text>
              <Text className="signname_item">赵飞</Text>
            </View>
          </JCard>
        </View>
        <View className="mgt20">
          <JCard title="会签的相关资料">
            <View className="dataList">
              <View className="data_item">
                <Text>4.13井冈山一日游活动</Text>
                <Text className="primaryColor">下载</Text>
              </View>
              <View className="data_item">
                <Text>4.13井冈山一日游活动</Text>
                <Text className="primaryColor">下载</Text>
              </View>
            </View>
          </JCard>
        </View>
        <View className="mgt20">
          <JCard title="会签意见">
            <View>
              <Cell
                top="曾广兴（通过）"
                right="2019-04-11 20:34:28"
                bottom="附件"
                left="意见内容"
              />
              <Cell
                top="曾广兴（通过）"
                right="2019-04-11 20:34:28"
                bottom="附件"
                left="意见内容"
              />
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

export default connect(mapStateProps)(UnsignDetail)