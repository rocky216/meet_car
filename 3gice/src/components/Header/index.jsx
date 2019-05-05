import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import {AtIcon} from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"

class Header extends Component {
  constructor(props){
    super(props)
  }
  goBack(){
    Taro.navigateBack()
  }
  render(){ 
    const {title} = this.props
    return (
      <View className="headerTop">
        <Text className="icon iconfont icon-arrow-left goback" onClick={this.goBack.bind(this)}></Text>
        <Text className="titleTop">{title}</Text>
      </View>
    )
  }
}

function mapStateProps(){
  return {

  }
}

export default connect(mapStateProps)(Header)