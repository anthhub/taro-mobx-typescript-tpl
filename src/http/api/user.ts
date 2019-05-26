import '@tarojs/async-await'

import apiObject from '@http/constants'
import request from '@http/request'

class User {
    async getUserInfo(data: { loginname: string }) {
        console.log('加载请求')

        return Promise.resolve({ rs: '结果' })

        // return (await request.get(apiObject.getUserInfo + data.loginname, {})).data
    }
}
const user = new User()

export default user
