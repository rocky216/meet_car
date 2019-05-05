import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane} from 'taro-ui'
import { connect } from '@tarojs/redux'
import Search from "@/components/Search"
import Cell from "@/components/Cell"
import Header from "@/components/Header"


class Parts extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="零件工作审批" />:''}
        <Search
          label1="工作人员" 
          label2="工作名称"
        />
        <View className="mgt20">
          <Cell
            top="水箱下横梁"
            right="日常工作-实施部（2019）"
            bottom="提交：2019-02-25"
            left="工作人员：孙凤康"
            link="/pages/parts/detail"
          />
          <Cell
            top="水箱下横梁"
            right="日常工作-实施部（2019）"
            bottom="提交：2019-02-25"
            left="工作人员：孙凤康"
            link="/pages/parts/detail" 
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

export default connect(mapStateProps)(Parts)