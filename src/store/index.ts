import CounterStore from './counter/index'
import TestStore from './step/index'
import ViewStore from '@store/view'

export class RootStore {
    counterStore = new CounterStore()
    stepStore = new TestStore()
    viewStore = new ViewStore()
}

const rootStore = new RootStore()

Object.keys(rootStore).map(item => {
    rootStore[item].getRootStore = () => rootStore
    rootStore[item].effects && rootStore[item].effects()
})

export default rootStore
