import CounterStore from "./counter"
import TestStore from "./test"

export class RootStore {
  counter = new CounterStore()
  test = new TestStore()

  getRoot() {
    return this
  }
}

const rootStore = new RootStore()

rootStore.counter.root = () => rootStore
rootStore.test.root = () => rootStore

export default rootStore
