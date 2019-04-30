import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtButton} from 'taro-ui'
import { connect } from '@tarojs/redux'
import Cell from "@/components/Cell"

class Manage extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <View>
        <Cell
          top="SE-SV91材料利用率"
          right="变更计划审批"
          bottom="提交：2019-03-05"
          left="周期：2019/01/05-2019/12/30"
          link="/pages/manage/detail"
        />
        <Cell
          top="SE-SV91材料利用率"
          right="变更计划审批"
          bottom="提交：2019-03-05"
          left="周期：2019/01/05-2019/12/30"
          link="/pages/manage/detail"
        />
      </View>
    )
  }

}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Manage)