import Taro from '@tarojs/taro-h5';
import '@tarojs/async-await';
import Nerv from "nervjs";
async function request(options) {
  Taro.showLoading({ title: '全力请求中!', mask: true });
  try {
    const { data } = await Taro.request(options);
    if (!data.success) {
      Taro.showToast({ title: data.error_msg + '', icon: 'none' });
      return null;
    }
    return data;
  } catch (error) {
    Taro.showToast({ title: '请求异常', icon: 'none' });
    return null;
  } finally {
    Taro.hideLoading();
  }
}
class Req {
  get(url, data) {
    return request({ url, data: data || {}, method: 'GET' });
  }
  post(url, data) {
    return request({ header: { 'content-type': 'application/json' }, url, data: data || {}, method: 'POST' });
  }
}
export default new Req();