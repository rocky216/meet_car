import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtTabs, AtTabsPane, AtButton, AtTimeline  } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import Header from "@/components/Header"

class Timeline extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        { title: '申请人' , content: ['张三']}, 
        { title: '项目经理助理审批', content: ["郑文杰"] }, 
        { title: '项目经理审批', content: ["郑文杰"]}, 
        { title: '项目经理审批', content: ["旷亮平"]},
        { title: '项目经理审批', content: ["曾小志"], color: "yellow"},
        { title: '行政管理总监', content: ["刘瑞英"], color: "yellow"},
      ]
    }
  }

  render(){
    const {items} = this.state

    return (
      <View className="timeline">
        {process.env.TARO_ENV==='h5'?<Header title="流程详情" />:''}
        <View>
          <AtTimeline items={items}/>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Timeline)