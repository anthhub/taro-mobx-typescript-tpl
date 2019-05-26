import * as tslib_1 from "tslib";
import { action, observable } from 'mobx';
export class StepStore {
  constructor() {
    this.step = 1;
    this.setStep = (number = 1) => {
      this.step = Number(number);
    };
  }
}
tslib_1.__decorate([observable], StepStore.prototype, "step", undefined);
tslib_1.__decorate([action], StepStore.prototype, "setStep", undefined);
export default StepStore;