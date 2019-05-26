import * as tslib_1 from "tslib";
import { action, observable } from "mobx";
export class CounterStore {
  constructor() {
    this.counter = 0;
    this.increment = (number = 1) => {
      const root = this.root();
      console.log(root.test.counter);
      this.counter += number;
    };
    this.decrement = (number = 1) => {
      this.counter -= number;
    };
  }
}
tslib_1.__decorate([observable], CounterStore.prototype, "counter", undefined);
tslib_1.__decorate([action], CounterStore.prototype, "increment", undefined);
tslib_1.__decorate([action], CounterStore.prototype, "decrement", undefined);
export default CounterStore;