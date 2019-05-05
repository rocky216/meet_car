import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import {AtIcon} from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"

class Cell extends Component {
  constructor(props){
    super(props)
  }

  navigateTab(){
    if(this.props.link){
      Taro.navigateTo({
        url: this.props.link
      })
    }
  }

  render(){
    const {icon, top, right, bottom, left, arrowRight} = this.props

    return (
      <View className="cell" onClick={this.navigateTab.bind(this)}>
      
        <View className="cell_main">
          <View className="cell_item">
            <View>
              <Text className="icon iconfont icon-work"></Text>
              <Text>{top?top:''}</Text>
            </View>
            <Text>{right?right:''}</Text>
          </View>
          <View className="cell_item_bottom">
            <Text>{left?left:''}</Text>
            <Text>{bottom?bottom:''}</Text>
          </View>
        </View>
        <View className="arrow_right">
          {!arrowRight?<AtIcon value='chevron-right' size='30' color='#999'></AtIcon>:null}
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