import CounterStore from './counter/index'
import TestStore from './step/index'
import ViewStore from '@store/view'

export class RootStore {
    private getRootStore = () => this

    counterStore = new CounterStore(this.getRootStore)
    stepStore = new TestStore(this.getRootStore)
    viewStore = new ViewStore(this.getRootStore)
}

const rootStore = new RootStore()

export default rootStore
