import * as tslib_1 from "tslib";
import { action, observable } from "mobx";
export class TestStore {
  constructor() {
    this.counter = 0;
    this.increment = (number = 1) => {
      this.counter += number;
    };
    this.decrement = (number = 1) => {
      this.counter -= number;
    };
  }
}
tslib_1.__decorate([observable], TestStore.prototype, "counter", undefined);
tslib_1.__decorate([action], TestStore.prototype, "increment", undefined);
tslib_1.__decorate([action], TestStore.prototype, "decrement", undefined);
export default TestStore;