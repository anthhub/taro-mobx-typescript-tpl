import CounterStore from "./counter/index";
import TestStore from "./step/index";
import ViewStore from "./view/index";
export class RootStore {
  constructor() {
    this.counterStore = new CounterStore();
    this.stepStore = new TestStore();
    this.viewStore = new ViewStore();
  }
}
const rootStore = new RootStore();
Object.keys(rootStore).map(item => {
  rootStore[item].getRootStore = () => rootStore;
  rootStore[item].effects && rootStore[item].effects();
});
export default rootStore;