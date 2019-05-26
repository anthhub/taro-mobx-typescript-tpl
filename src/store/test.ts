import { action, observable } from "mobx"

export class TestStore {
  @observable
  counter: number = 0

  getRootStore: () => IRootStore

  @action
  increment = (number: number = 1) => {
    this.counter += number
  }

  @action
  decrement = (number: number = 1) => {
    this.counter -= number
  }
}

export default TestStore
