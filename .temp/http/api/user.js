import '@tarojs/async-await';
import apiObject from "../constants";
import request from "../request";
class User {
  async checkUserToken(data) {
    return await request.post(apiObject.checkUserToken, data || {});
  }
  async getUserInfo(data) {
    return (await request.get(apiObject.getUserInfo + data.loginname, {})).data;
  }
}
const user = new User();
export default user;