import Taro, { Component } from '@tarojs/taro'
import {connect} from "@tarojs/redux"
import './index.scss'
import { View, Text, Label, Radio} from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import MyInput from "@/components/MyInput"
import { approvalList } from "./datas"
import JCard from "@/components/JCard"
import Cell from "@/components/Cell"
import Item from "@/components/Item"
import Header from "@/components/Header"

class OvertimeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="加班申请" />:''}
        <View>
          {approvalList.map((item, index)=>(
            <MyInput
              key={index}
              label={item.label}
              value={item.value}
              type={item.type}
            />
          ))}
        </View>
        <View className="mgt20">
          <JCard title="加班人员列表">
            <View>
              <Cell
                top="康阳（软件开发）"
                left="2019-04-20 08:30~2019-04-21 17:10(合计：16小时)"
                arrowRight={true}
              />
              <Cell
                top="康阳（软件开发）"
                left="2019-04-20 08:30~2019-04-21 17:10(合计：16小时)"
                arrowRight={true}
              />
            </View>
          </JCard>
        </View>

        <View className="mgt20">
          <JCard title="相关资料">
            <View>
              <Item title="加班凭证" option="下载" />
              <Item title="加班凭证" option="下载" />
              <AtButton className="mgt20" type="primary">变更加班申请</AtButton>
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

export default connect(mapStateProps)(OvertimeDetail)