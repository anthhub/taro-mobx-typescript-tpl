import { computed, reaction } from 'mobx'
import StoreExt from '@lib/extent/store'

export class ViewStore extends StoreExt {
    @computed
    get showImg() {
        const { counterStore } = this.getRootStore()
        return counterStore.counter > 10
    }

    private getRootStore: () => IRootStore

    constructor(getRootStore) {
        super()
        this.getRootStore = getRootStore
        this.effects()
    }

    // 副作用
    private effects() {
        const { stepStore, counterStore } = this.getRootStore()
        reaction(
            () => stepStore.step > 0 && counterStore.counter > 10,
            async flag => {
                if (flag) {
                    console.log('这里可以自动发送请求')
                    const rs = await this.api.user.getUserInfo({ loginname: '' })
                    await this.setCache('result', rs)
                    this.$showToast(rs.rs)
                }
            }
        )
    }
}

export default ViewStore
