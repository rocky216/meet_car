import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import {AtIcon} from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"

class Cell extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const {icon, top, right, bottom, left} = this.props

    return (
      <View className="cell">
      
        <View className="cell_main">
          <View className="cell_item">
            <View>
              <Text className="icon iconfont icon-work"></Text>
              <Text>{top}</Text>
            </View>
            <Text>{right}</Text>
          </View>
          <View className="cell_item_bottom">
            <Text>{left}</Text>
            <Text>{bottom}</Text>
          </View>
        </View>
        <View className="arrow_right">
          <AtIcon value='chevron-right' size='30' color='#999'></AtIcon>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Cell)