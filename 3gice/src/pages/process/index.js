import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtTabs, AtTabsPane, AtButton } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import Cell from "@/components/Cell"
import Header from "@/components/Header"

class Process extends Component {
  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="流程" />:''}
        <Cell
          top="【日常工作-商务部(2019)】出差"
          right="采购流程"
          bottom="申请日期：2019-03-10"
          left="行政后勤审批"
          link="/pages/process/timeline"
        />
        <Cell
          top="【日常工作-商务部(2019)】出差"
          right="采购流程"
          bottom="申请日期：2019-03-10"
          left="行政后勤审批"
          link="/pages/process/timeline"
        />
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Process)