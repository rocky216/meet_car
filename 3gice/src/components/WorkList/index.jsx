import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import "@/assets/fonts/iconfont.css"
import "./index.scss"


class WorkList extends Component {

  constructor (props){
    super(props)

    this.state={
      lists: [
        {label: "预警",value: 29, link: '/pages/warn/index', icon: "icon iconfont icon-warning"},
        {label: "工作",value: 12, link: '', icon: "icon iconfont icon-work"},
        {label: "消息",value: 893, link: '', icon: "icon iconfont icon-news"},
        {label: "流程",value: 29, link: '', icon: "icon iconfont icon-process"}
      ]
    }
  }
  
  componentDidMount(){
    
  }

  render(){
    const {lists} = this.state
    return (
      <View className="worklist">
        {lists.map((item, index)=>(
          <View className="work_item" key={index}>
            <Navigator className="linka" url={item.link}>
              <Text>{item.value}</Text>
              <View className="text">
                <Text className={item.icon}></Text>
                <Text>{item.label}</Text>
              </View>
            </Navigator>
          </View>
        ))}
      </View>
    )
  }
}


function mapDispatchProps(){
  return {

  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps, mapDispatchProps)(WorkList)
