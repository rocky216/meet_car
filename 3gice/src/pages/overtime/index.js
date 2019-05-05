import Taro, { Component } from '@tarojs/taro'
import {connect} from "@tarojs/redux"
import './index.scss'
import { View, Text, Label, Radio} from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import MyInput from "@/components/MyInput"
import {detailList} from "./datas"
import Item from "@/components/Item"
import JCard from "@/components/JCard"
import Cell from "@/components/Cell"
import Header from "@/components/Header"


class OverTime extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabList: [{title: '加班申请'}, {title: "申请记录"}],
      current: 1
    }
  }

  render(){
    const {tabList, current} = this.state
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="加班申请" />:''}
        <AtTabs tabList={tabList} current={current} onClick={(current)=>this.setState({current})}></AtTabs>
        
        {current==0?<View>
          <View>
            {detailList.map((item, index)=>(
              <MyInput
                key={index}
                label={item.label}
                value={item.value}
                type={item.type}
              />
            ))}
          </View>
          <View className="mgt20">
            <JCard title="相关资料">
              <Item title="加班凭证" option="下载" deleteText="删除" />
              <Item title="加班凭证" option="下载" deleteText="删除" />
              <AtButton className="mgt20" type="primary">提交申请</AtButton>
            </JCard>
          </View>
        </View>:null}
        
        {current==1?<View>
          <Cell
            top="SE-SK81材料利用率-冲压"
            right="2019-02-25（申请）"
            bottom="2019-02-25（审批中）"
            left="吉安-常规单"
            link="/pages/overtime/detail"
          />
        </View>:null}
        
      </View>
    )
  }
}

function mapStateProps(){
  return {

  }
}

export default connect(mapStateProps)(OverTime)