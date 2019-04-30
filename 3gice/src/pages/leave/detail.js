import Taro, {Component} from "@tarojs/taro"
import {View, Text, Label, Radio} from "@tarojs/components"
import { AtCard, AtButton, AtTextarea } from "taro-ui"
import {connect} from "@tarojs/redux"
import "./index.scss"
import MyInput from "@/components/MyInput"
import {detailList} from "./datas"

class LeaveDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      detailList: detailList
    }
  }

  render(){
    const {detailList} = this.state
    console.log(detailList, 77)
    return (
      <View>
        <View>
          {detailList.map((item, index)=>(
            <MyInput
              key={index}
              label={item.label}
              value={item.value}
              type={item.type}
            />
          ))}
          
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(LeaveDetail)