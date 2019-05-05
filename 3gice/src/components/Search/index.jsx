import Taro, { Component } from "@tarojs/taro"
import { connect } from "@tarojs/redux"
import "./index.scss"
import {View, Text, Picker, Label, Input} from "@tarojs/components"
import {AtForm, AtInput, AtButton} from "taro-ui"
import MyInput from "@/components/MyInput"

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      input1: '',
      input2: '',
      date1: '',
      date2: '',
    }
  }
  
  bindTimeChange1({detail}){
    
    this.setState({
      date1: detail.value
    })
  }
  bindTimeChange2({detail}){
    
    this.setState({
      date2: detail.value
    })
  }
  onSubmit(){
    const {input1, input2, date1, date2} = this.state
    this.props.handlenSubmit({input1, input2, date1, date2})
  }

  render(){
    const {input1, input2, date1, date2} = this.state
    const {label1, label2, isNodate} = this.props
    
    return (
      <View>
        {!isNodate?(
          <View className="date_wrap">
            <Label className="label">开始/结束时间：</Label>
            <View className="startTime">
              <Picker 
                mode="date" 
                onChange={this.bindTimeChange1.bind(this)}>   
                <Input 
                  className="input"
                  label="开始时间" 
                  value={date1} 
                  placeholder="开始时间"
                  disabled
                />
              </Picker>
            </View>
            <Text className="to">至</Text>
            <View className="endTime">
              <Picker 
                mode="date"
                onChange={this.bindTimeChange2.bind(this)}>
                <Input 
                  className="input"
                  value={date2} 
                  placeholder="结束时间"
                  disabled
                />
              </Picker>
            </View>
            {!label2?<View>
              <AtButton 
                type='primary' 
                circle size="small" 
                onClick={this.onSubmit.bind(this)}
              >搜索</AtButton>
            </View>:null}
          </View>
        ):null}
        
        {label1?<MyInput 
          label={label1} 
          value={input1} 
          onChange={({detail})=>this.setState({input1: detail.value})} 
          placeholder={'请输入'+label1}
          type="input"
        />:null}
        
        {label2?<MyInput 
          label={label2} 
          value={input2} 
          onChange={({detail})=>this.setState({input2: detail.value})} 
          placeholder={'请输入'+label2}
          type="input"
        >
          <AtButton 
            type='primary' 
            circle size="small" 
            onClick={this.onSubmit.bind(this)}
          >搜索</AtButton>
        </MyInput>:null}
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Search)