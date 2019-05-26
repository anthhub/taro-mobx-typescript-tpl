import '@tarojs/async-await';
class User {
  async getUserInfo(data) {
    console.log('加载请求');
    return Promise.resolve({ rs: '结果' });
    // return (await request.get(apiObject.getUserInfo + data.loginname, {})).data
  }
}
const user = new User();
export default user;