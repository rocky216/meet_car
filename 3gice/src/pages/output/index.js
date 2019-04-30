import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane} from 'taro-ui'
import { connect } from '@tarojs/redux'
import Search from "@/components/Search"
import Cell from "@/components/Cell"

class Output extends Component {
  constructor(props){
    super(props)
    this.state={
      current: 0,
      tabList: [{
        title: "待审批输出物"
      },{
        title: "已审批流程" 
      }]
    }
  }

  render(){
    const {current, tabList} = this.state
    return (
      <View>
        <AtTabs current={current} tabList={tabList} onClick={(current)=>this.setState({current})}></AtTabs>
        <View className="mgt20">
          <Search 
            label1="工作人员"
            label2="工作名称"
          />
          <Cell
            top="客户维护访问(根据实际情况)" 
            right="孙凤康"
            bottom="审批：2019-02-25"
            left="日常工作-实施部（2019）"
            link="/pages/output/detail" 
          />
          <Cell
            top="客户维护访问(根据实际情况)"
            right="孙凤康"
            bottom="审批：2019-02-25"
            left="日常工作-实施部（2019）"
            link="/pages/output/detail"
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

export default connect(mapStateProps)(Output)