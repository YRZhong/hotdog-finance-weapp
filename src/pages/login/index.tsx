import Taro, { Component } from '@tarojs/taro'
import { AtButton, AtMessage } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.less'

export default class Login extends Component {
  // 判断是否已授权登陆
  componentDidMount = () => {
    Taro.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          Taro.getUserInfo({
            success(res) {
              console.log(res)
              Taro.redirectTo({ url: '/pages/home/index' })
            }
          })
        }
      }
    })
  }

  // 授权登陆
  handleGetUserInfo = (e: any) => {
    if (e.detail.userInfo) {
      this.getUserOpenId()
    } else {
      Taro.atMessage({ message: '授权失败', type: 'error' })
    }
  }

  // 获取用户唯一标识符
  getUserOpenId = () => {
    Taro.login({
      success(res) {
        if (res.code) {
          console.log(res.code)
          // TODO: 请求后台接口并存储openid
        } else {
        }
      }
    })
  }

  render() {
    return (
      <View className='login-container'>
        <AtMessage />
        <AtButton
          type='primary'
          openType='getUserInfo'
          onGetUserInfo={this.handleGetUserInfo}
          className='login-btn'
        >
          授权登陆
        </AtButton>
      </View>
    )
  }
}
