import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import {View} from "@tarojs/components"
// import 'taro-ui/dist/style/index.scss'
import './assets/fonts/iconfont.css'
import './custom-variables.scss'
import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore() 

class App extends Component { 

  config = {
    pages: [ 
      'pages/index/index', 
      'pages/sign/index', 
      'pages/account/index',
      'pages/overtime/detail',
      'pages/overtime/index',
      'pages/leave/index',
      'pages/leave/detail',
      'pages/output/detail',
      'pages/output/index',
      'pages/parts/detail',
      'pages/parts/index', 
      'pages/unsign/index', 
      'pages/unsign/detail',
      'pages/manage/index',
      'pages/manage/detail',
      'pages/needbe/detail',
      'pages/needbe/index',
      'pages/process/timeline',
      'pages/process/index',
      'pages/news/detail',
      'pages/news/index',
      'pages/work/workdetail',
      'pages/work/submitdetail',
      'pages/work/index',
      'pages/warn/detail',
      'pages/warn/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#3888c8',
      navigationBarTitleText: '圣基尚源',
      navigationBarTextStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <View>
          <Text>11</Text>
          <Index />
        </View>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
