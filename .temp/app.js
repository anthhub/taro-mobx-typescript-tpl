import '@tarojs/async-await';
import './app.scss';
import es6Promise from 'es6-promise';
import { Provider } from "@tarojs/mobx-h5";
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import store from "./store/index";
import Taro from '@tarojs/taro-h5';
import { Router } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
es6Promise.polyfill();
class App extends Component {
  constructor() {
    super(...arguments);

    Taro._set$app(this);
  }
  componentDidMount() {
    // const updateManager = Taro.getUpdateManager()
    // updateManager.onCheckForUpdate(function (res) {
    //   console.log(res.hasUpdate)
    // })
    // updateManager.onUpdateReady(function () {
    //   alert("更新提示", "新版本已经准备好，是否重启应用？").then(() => {
    //     updateManager.applyUpdate()
    //   })
    // })
    // updateManager.onUpdateFailed(function () {
    //   alert("更新提示", "新版本下载失败")
    // })

    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  render() {
    return <Provider store={store}>
                <Router mode={"hash"} publicPath={"/"} routes={[{
        path: '/pages/index/index',
        componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
        isIndex: true
      }]} customRoutes={{}} basename={"/"} />
              </Provider>;
  }
  config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

}
Nerv.render(<App />, document.getElementById('app'));