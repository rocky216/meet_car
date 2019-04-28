import Taro, { Component } from "@tarojs/taro"
import { connect } from "@tarojs/redux"
import "./index.scss"
import {Input, View, Text, Textarea} from "@tarojs/components"
import {AtTextarea } from "taro-ui"


class MyInput extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {label, value, placeholder, onChange, disabled, type, autoHeight} = this.props
    
    return (
      <View className="myInput">
        <View className="inputmain">
          {label?<Text className="label">{label}:</Text>:null}
          {type=='textarea'? 
          <Textarea
            className="textarea"
            value={value} 
            placeholder={placeholder} 
            onInput={onChange}
            disabled={disabled}
            autoHeight={autoHeight}
          />:null}
          {type=='text'?<Text className="myText">{value}</Text>:null}
          {type=='input'?<Input 
            className="input"
            value={value} 
            placeholder={placeholder} 
            onInput={onChange}
            disabled={disabled}
          />:null}
        </View>
        {this.props.children}
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(MyInput)