import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import { AtCalendar } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"

class Sign extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View className="calendar">
        <AtCalendar  />
      </View>
    )
  }
}

function mapStateProps(){
  return {

  }
}

export default connect(mapStateProps)(Sign)