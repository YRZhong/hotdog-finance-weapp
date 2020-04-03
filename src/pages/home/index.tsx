import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

interface State {
  currentTab: number
}

type IState = State

type IProps = {}

export default class HomePage extends Taro.Component<IProps, IState> {
  state = {
    currentTab: 0
  }

  handleSwitchTab = (currentTab: number) => {
    this.setState({
      currentTab: currentTab
    })
  }

  render() {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '待办事项', iconType: 'bullet-list', text: 'new' },
          { title: '拍照', iconType: 'camera' },
          { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ]}
        onClick={this.handleSwitchTab}
        current={this.state.currentTab}
      />
    )
  }
}
