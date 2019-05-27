import { action, observable } from 'mobx'
import StoreExt from '@lib/extent/store'

export class CounterStore extends StoreExt {
    @observable
    counter: number = 0

    getRootStore: () => IRootStore

    constructor(getRootStore) {
        super()
        this.getRootStore = getRootStore
    }

    @action
    increment(number: number = 1) {
        const { stepStore } = this.getRootStore()
        this.counter += Number(number) * stepStore.step
    }

    @action
    decrement(number: number = 1) {
        const { stepStore } = this.getRootStore()
        this.counter -= Number(number) * stepStore.step
    }
}

export default CounterStore
