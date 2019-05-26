import CounterStore from "./counter";
import TestStore from "./test";
export class RootStore {
  constructor() {
    this.counter = new CounterStore();
    this.test = new TestStore();
  }
  getRoot() {
    return this;
  }
}
const rootStore = new RootStore();
rootStore.counter.root = () => rootStore;
rootStore.test.root = () => rootStore;
export default rootStore;