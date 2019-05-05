import Taro, { Component } from "@tarojs/taro"
import {View, Text, Navigator} from "@tarojs/components"
import {connect} from "@tarojs/redux"
import "./index.scss"

class JCard extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const {title, link, optionText} = this.props
    return (
      <View className="jcard">
        <View className="jcardtop">
          <View className="jcardtitle">
            <Text className="jcardicon"></Text>
            <Text>{title}</Text>
          </View>
          {optionText?<Text className="more primaryColor">{optionText}</Text>:''}
          {link?(
            <View className="more">
              <Navigator  link={link}>更多</Navigator>
            </View>
          ):null}
        </View>
        <View className="content">{this.props.children}</View>
      </View>
    )
  }
}

function mapStateProps(){
  return {

  }
}

export default connect(mapStateProps)(JCard)