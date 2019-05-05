import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtTabs, AtTabsPane, AtButton } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import MyInput from "@/components/MyInput" 
import {detailList} from "./datas"
import Header from "@/components/Header"

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailList
    }
  }

  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="消息详情" />:''}
        <View className="title">
          <Text >【工作通知】 项目 日常工作-软件开发部(2019) 需求分析文档 中 日常管理工作计划 零件/总成工作委派</Text>
        </View>
        {detailList.map((item, index)=>(
          <MyInput
            key={index}
            label={item.label}
            value={item.value}
            type={item.type}
          />
        ))}
        <View className="submit">
          <AtButton type="primary">回复</AtButton>
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