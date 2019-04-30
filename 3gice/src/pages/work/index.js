import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import {AtTabs, AtTabsPane } from "taro-ui"
import {connect} from "@tarojs/redux"
import Search from "@/components/Search"
import Cell from "@/components/Cell"
import "./index.scss"


class Work extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabList: [
        { title: '总成/零件未完成工作'},
        { title: '总成/零件已完成工作'}, 
        { title: '输出物未完成工作' },
        { title: '输出物已完成工作' }
      ],
      current: 0
    }
  }
  handlenTab(index){
    this.setState({current: index})
  }
  render(){
    const {tabList, current} = this.state

    return (
      <View>
        <AtTabs 
          tabList={tabList} 
          current={current}
          onClick={this.handlenTab.bind(this)}
        ></AtTabs>
        <Search
          label1="项目名称"
          label2="工作名称"
        />
        <View className="workList">
          <Cell
            icon="icon iconfont icon-work"
            top="水箱下横梁"
            right="日常工作-实施部(2019)"
            bottom="35%"
            left="工期：2019/02/25~2019/02/28(0.3天)"
            link="/pages/work/submitdetail"
          />
          <Cell
            icon="icon iconfont icon-work"
            top="水箱下横梁"
            right="日常工作-实施部(2019)"
            bottom="35%"
            left="工期：2019/02/25~2019/02/28(0.3天)"
            link="/pages/work/submitdetail"
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

export default connect(mapStateProps)(Work)