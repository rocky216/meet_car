import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text, Navigator} from '@tarojs/components'
import { AtTabs, AtTabsPane} from 'taro-ui'
import { connect } from '@tarojs/redux'
import Search from "@/components/Search"
import Cell from "@/components/Cell"
import Header from "@/components/Header"


class Unsign extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 0,
      tabList: [{
        title: '未处理会签'
      },{
        title: '已处理会签'
      }]
    }
  }

  render(){  
    const {current,tabList} = this.state
    return (  
      <View>
        {process.env.TARO_ENV==='h5'?<Header title="未处理会签" />:''}
        <AtTabs current={current} tabList={tabList}
          onClick={(index)=>this.setState({current:index})}
        ></AtTabs>
        <View className="mgt20">
          <Search
            label1="创建人"
            label2="标题"
            isNodate={true}
          />
          <Cell
            top="发外网功能评审"
            right="Openlssue"
            bottom="创建日期：2019-02-25"
            left="创建人：孙凤康"
            link="/pages/unsign/detail"
          />
          <Cell
            top="发外网功能评审"
            right="Openlssue"
            bottom="创建日期：2019-02-25"
            left="创建人：孙凤康"
            link="/pages/unsign/detail"
          />
        </View>
      </View>
    )
  }
}

function mapStateProps(state){
  return {

  }
}

export default connect(mapStateProps)(Unsign)