import CounterStore from "./counter";
import TestStore from "./test";
export class RootStore {
  constructor() {
    this.counter = new CounterStore();
    this.test = new TestStore();
  }
}
const rootStore = new RootStore();
Object.keys(rootStore).map(item => rootStore[item].getRootStore = () => rootStore);
export default rootStore;