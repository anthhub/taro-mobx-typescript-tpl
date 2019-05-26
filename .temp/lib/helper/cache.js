import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
// 设置缓存
export async function setCache(key, value) {
  let params = value;
  if (typeof value === 'object') {
    params = JSON.stringify(value);
  }
  await Taro.setStorage({ key, data: params });
  return true;
}
// 读取缓存
export async function getCache(key) {
  const result = await Taro.getStorage({ key });
  if (result) {
    return JSON.parse(result);
  } else {
    return null;
  }
}