import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtTabs, AtTabsPane, AtButton } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import {newstypes} from "./datas"
import Cell from "@/components/Cell"
import Header from "@/components/Header"

class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabList : [
        { title: '未读消息' }, 
        { title: '已读消息' }
      ],
      current: 0,
      newstypes,
      active: 0
    }
  }
  
  render(){
    const {tabList, current, active} = this.state

    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="消息" />:''}
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={(current)=>this.setState({current})}
        ></AtTabs>
        <View className="newsType">
          {newstypes.map((item,index)=>(
            <View className="newsType_item" key={index}>
              <AtButton 
                size='small' 
                type="secondary" 
                type={active==item.value?'primary':null}
                onClick={()=>this.setState({active: item.value})}
              >{item.label}</AtButton >
            </View>
          ))}
        </View>
        <View>
          <Cell
            top="总成零件工作审批预警"
            right="消息类型"
            bottom="重要"
            left="接收时间:2019-02-26 16:02:14"
            link="/pages/news/detail"
          />
          <Cell
            top="总成零件工作审批预警"
            right="消息类型"
            bottom="重要"
            left="接收时间:2019-02-26 16:02:14"
            link="/pages/news/detail"
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

export default connect(mapStateProps)(News)