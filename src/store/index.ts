import CounterStore from './counter'
import TestStore from './test'

export class RootStore {
    counter = new CounterStore()
    test = new TestStore()
}

const rootStore = new RootStore()

Object.keys(rootStore).map(item => (rootStore[item].getRootStore = () => rootStore))

export default rootStore
