import Taro from '@tarojs/taro-h5';
import api from "../../http/index";
import { getCache, setCache } from "../helper/cache";
import Nerv from "nervjs";
export default class StoreExt {
  constructor() {
    this.api = api;
    this.getCache = getCache;
    this.setCache = setCache;
  }
  $showToast(title = '成功', icon = 'none', duration = 2000) {
    Taro.showToast({ title, icon, duration });
  }
}