import { action, observable } from 'mobx'

export class CounterStore {
    @observable
    counter: number = 0

    getRootStore: () => IRootStore

    @action
    increment = (number: number = 1) => {
        const { stepStore } = this.getRootStore()
        this.counter += Number(number) * stepStore.step
    }

    @action
    decrement = (number: number = 1) => {
        const { stepStore } = this.getRootStore()
        this.counter -= Number(number) * stepStore.step
    }
}

export default CounterStore
