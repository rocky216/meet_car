import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text} from '@tarojs/components'
import {AtButton, AtTabs} from 'taro-ui'
import { connect } from '@tarojs/redux'
import {detailList} from "./datas"
import MyInput from "@/components/MyInput"
import JCard from "@/components/JCard"
import Item from "@/components/Item"
import Search from "@/components/Search"
import Cell from "@/components/Cell"
import Header from "@/components/Header"

class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabList: [{title: "个人报销"}, {title: "报销记录"}],
      current: 0
    }
  }

  render(){
    const {tabList, current} = this.state
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="加班申请" />:''}
        <AtTabs tabList={tabList } current={current} onClick={(current)=>this.setState({current})}></AtTabs>
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
            <JCard title="费用明细" optionText="添加费用明细">
              <View>
                <Item title="报销凭证" option="下载" deleteText="删除" />
                <Item title="报销凭证" option="下载" deleteText="删除" />
                <AtButton className="mgt20" type="primary">提交个人报销</AtButton>
              </View>
            </JCard>
          </View>
        </View>:null}
        
        {current==1?<View>
          <Search/>
          <View>
            <Cell
              top="廖德龙"
              right="2019-02-25(申请)"
              bottom="2019-01-28(驳回)"
              left="日常工作-重压部（2019）-冲压"
            />
            <Cell
              top="廖德龙"
              right="2019-02-25(申请)"
              bottom="2019-01-28(驳回)"
              left="日常工作-重压部（2019）-冲压"
            />
          </View>
        </View>:null}

      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Account)