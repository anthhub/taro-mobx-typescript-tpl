import { computed, reaction } from 'mobx'

export class ViewStore {
    @computed
    get showImg() {
        const { counterStore } = this.getRootStore()
        return counterStore.counter > 10
    }

    private getRootStore: () => IRootStore

    private effects() {
        const { stepStore, counterStore } = this.getRootStore()
        reaction(
            () => stepStore.step > 0 && counterStore.counter > 10,
            flag => {
                flag && console.log('这里可以自动发送请求')
            }
        )
    }
}

export default ViewStore
