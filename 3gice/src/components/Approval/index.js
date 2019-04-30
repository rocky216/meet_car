import Taro, {Component} from "@tarojs/taro"
import {View, Text, Label, Radio} from "@tarojs/components"
import { AtCard, AtButton, AtTextarea } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import {approvalType} from "./datas"

class Approval extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: ''
    }
  }
  handlenChange(){
    
  }

  render(){
    const {checked} = this.state
    const {label1, label2, submitText} = this.props

    return (
      <View>
        <AtCard title='审批结果' isFull>
          <View className="approval">
            <View className='approval_item'>{label1}：</View>
            <View className='approval_item' style={{display:'flex'}}>
              {approvalType.map((item, index)=>(
                <View className="mgr20" key={index}>
                  <Label 
                    for={item.value} 
                    onClick={this.handlenChange.bind(this, item.value)} >
                    <Radio 
                      value={item.value} 
                      checked={item.value==checked} 
                      />
                    <Text >{item.label}</Text>
                  </Label>
                </View>
              ))}
            </View>
          </View>
          <View className='approval' 
            style={{marginTop:'10px', marginBottom: '10px'}}>
            <View className='approval_item'>{label2}：</View>
            <View className='approval_item'>
              <View className="textarea">
                <AtTextarea
                  placeholder={"请输入"+label2}
                />
              </View>
            </View>
          </View>
          <AtButton type="primary">{submitText}</AtButton>
        </AtCard>
      </View>
    )
  }
}

function mapStateProps(state){
  return {
    
  }
}

export default connect(mapStateProps)(Approval)