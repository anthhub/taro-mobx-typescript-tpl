import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
function showToast(title = '成功', icon = 'success', duration = 2000) {
  Taro.showToast({ title, icon, duration });
}
export default class CompExt extends Component {
  constructor() {
    super(...arguments);
    this.$showToast = showToast;
  }
}
CompExt.options = {
  addGlobalClass: true
};