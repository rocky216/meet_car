import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane} from 'taro-ui'
import { connect } from '@tarojs/redux'
import MyInput from "@/components/MyInput"
import {detailList} from "./datas"
import Approval from "@/components/Approval"
import Header from "@/components/Header"


class PartsDetail extends Component {
  render(){
    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="零件工作审批" />:''}
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
          <Approval
            label1="是否通过"
            label2="反馈内容" 
            submitText="提交审批意见"
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

export default connect(mapStateProps)(PartsDetail)