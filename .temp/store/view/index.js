import * as tslib_1 from "tslib";
import { computed, reaction } from 'mobx';
export class ViewStore {
  get showImg() {
    const { counterStore } = this.getRootStore();
    return counterStore.counter > 10;
  }
  effects() {
    const { stepStore, counterStore } = this.getRootStore();
    reaction(() => stepStore.step > 0 && counterStore.counter > 10, flag => {
      flag && console.log('这里可以自动发送请求');
    });
  }
}
tslib_1.__decorate([computed], ViewStore.prototype, "showImg", null);
export default ViewStore;