import Taro, { Component } from '@tarojs/taro'
import {connect} from "@tarojs/redux"
import {View, Text, RadioGroup, Radio, Label} from "@tarojs/components"
import {AtCard, AtTextarea, AtButton } from "taro-ui"
import "./index.scss"
import MyInput from "@/components/MyInput"
import {detailList, approvalType} from "./datas"
import Header from "@/components/Header"

class WarnDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      detailList,
      approvalType,
      checked: ''
    }
  }
  handlenChange(value){
    this.setState({checked: value})
  }
  render(){
    const {detailList, checked, approvalType} = this.state
    
    return (
      <View className="warndetail"> 
        {process.env.TARO_ENV==='h5'?<Header title="总成/零件工作审批" />:''}
        <View>
          {detailList.map((item, index)=>(
            <MyInput
            key={index}
            label={item.label}
            value={item.value}
            type="text"
          />
          ))}
        </View>
        <View className="approval">
          <AtCard title='审批结果' isFull>
            <View className='at-row'>
              <View className='at-col at-col-1 at-col--auto'>是否通过：</View>
              <View className='at-col' style={{display:'flex', justifyContent: 'space-between'}}>
                {approvalType.map((item, index)=>(
                  <Label 
                    for={item.value} 
                    key={index}
                    onClick={this.handlenChange.bind(this, item.value)} >
                    <Radio 
                      value={item.value} 
                      checked={item.value==checked} 
                      />
                    <Text >{item.label}</Text>
                  </Label>
                ))}
              </View>
            </View>
            <View className='at-row' style={{marginTop:'10px', marginBottom: '10px'}}>
              <View className='at-col at-col-1 at-col--auto'>反馈内容：</View>
              <View className='at-col'>
                <AtTextarea
                  placeholder="请输入反馈内容~"
                />
              </View>
            </View>
            <AtButton type="primary">提交审批意见</AtButton>
          </AtCard>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(WarnDetail)