import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
export const alert = (title, content) => {
  return Taro.showModal({
    title,
    content,
    showCancel: false
  });
};
export const confirm = (title, content) => {
  return Taro.showModal({
    title,
    content
  });
};