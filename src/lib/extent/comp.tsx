import Taro, { Component } from '@tarojs/taro'

function showToast(title = '成功', icon = 'success', duration = 2000) {
    Taro.showToast({ title, icon, duration })
}

export default abstract class CompExt<P = {}, S = {}> extends Component<P, S> {
    static options = {
        addGlobalClass: true,
    }
    protected $showToast = showToast
}
