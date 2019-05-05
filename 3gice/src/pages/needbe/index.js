import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtTabs, AtTabsPane, AtButton } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import Cell from "@/components/Cell"
import Search from "@/components/Search"
import Header from "@/components/Header"

class Needbe extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="待办流程审批" />:''}
        <Search
          label1="申请人"
          label2="流程类型"
        />
        <View className="mgt20">
          <Cell
            top="请假申请审批"
            right="创建：2019-02-25 10:10"
            bottom="接收：2019-02-25 10:10"
            left="申请人：孙风康"
            link="/pages/needbe/detail"
          />
          <Cell
            top="请假申请审批"
            right="创建：2019-02-25 10:10"
            bottom="接收：2019-02-25 10:10"
            left="申请人：孙风康"
            link="/pages/needbe/detail"
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

export default connect(mapStateProps)(Needbe)