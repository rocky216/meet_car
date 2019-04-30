import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtCard, AtList, AtListItem } from 'taro-ui'
import { connect } from '@tarojs/redux'
import JCard from "@/components/JCard"
import Approval from "@/components/Approval"

class ManageDetail extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <View>
        <JCard title="项目信息">
          <View className="new_item">
            <Text>项目名称：</Text>
            <Text>SE-SV91材料利用率</Text>
          </View>
          <View className="new_item">
            <Text>开始日期：</Text>
            <Text>2019/01/05</Text>
          </View>
          <View className="new_item">
            <Text>结束日期：</Text>
            <Text>2019/12/30</Text>
          </View>
        </JCard>
        <JCard title="项目的工时统计">
          <View>
            <View className='row'>
              <View className='col'>专业</View>
              <View className='col'>规划工时</View>
              <View className='col'>计划工时</View>
            </View>
            <View className='row'>
              <View className='col'>冲压</View>
              <View className='col'></View>
              <View className='col'></View>
            </View>
          </View>
        </JCard>
        <JCard title="审核意见">
          <View>
            <Approval
              label1="结果"
              label2="回复"
              submitText="发送"
            />
          </View>
        </JCard>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(ManageDetail)