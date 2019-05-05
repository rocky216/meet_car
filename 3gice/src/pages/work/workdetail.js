import Taro, {Component} from "@tarojs/taro"
import {View, Text} from "@tarojs/components"
import {connect} from "@tarojs/redux"
import "./index.scss"
import MyInput from "@/components/MyInput"
import {workdetail} from "./datas"
import JCard from "@/components/JCard"
import Header from "@/components/Header"

class SubmitDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      workdetail
    }
  }

  render(){
    const {workdetail} = this.state

    return (
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="工作详情" />:''}
        <View>
          {workdetail.map((item, index)=>(
            <MyInput
              key={index}
              label={item.label}
              value={item.value} 
              type={item.type}
            />
          ))}
        </View>
        <View className="mgt20">
          <JCard
            title="上传工作附件"
            isFull={true}
          >
            <View>
              <View className='at-row at-row__justify--between'>
                <View className='at-col at-col-1 at-col--auto'>
                  <Text>(曾小志)[180816]工作日志文件</Text>
                </View>
                <View className='at-col at-col-2'>
                  <Text className="mgr20">下载</Text>
                  <Text>删除</Text> 
                </View>
              </View>
              <View className='at-row at-row__justify--between'>
                <View className='at-col at-col-1 at-col--auto'>
                  <Text>(曾小志)[180816]工作日志文件</Text>
                </View>
                <View className='at-col at-col-2'>
                  <Text className="mgr20">下载</Text>
                  <Text>删除</Text> 
                </View>
              </View>
            </View>
          </JCard>
        </View>
        <View className="mgt20">
          <JCard title="工作提交历史记录">
            <View>
              <View>
                <View>
                  <Text>提交日期: 2019-02-15</Text>
                  <Text>工作地点：吉安</Text>
                </View>
                <View>
                  <Text>工作区间：2019-02-12 9:00-2019-02-12 9:00</Text>
                </View>
                <View>
                  <Text>完成率：13%</Text>
                  <Text>消耗工时：1.5天</Text>
                  <Text>完成工时：1.5天</Text>
                </View>
                <View>
                  <Text>工作内容:</Text>
                </View>
              </View>
            </View>
          </JCard>
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(SubmitDetail)