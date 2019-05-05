import Taro, {Component} from "@tarojs/taro"
import {View, Text, Label, Radio} from "@tarojs/components"
import { AtCard, AtButton, AtTextarea } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"

class Item extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {title, option, deleteText} = this.props
    return (
      <View className="item_wrap">
        <Text>{title}</Text>
        <View>
          <Text className="primaryColor mgr20">{option}</Text>
          <Text className="primaryColor">{deleteText?deleteText:''}</Text>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Item)