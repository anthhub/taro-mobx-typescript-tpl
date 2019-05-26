import { action, observable } from "mobx"

export class CounterStore {
  @observable
  counter: number = 0

  root: () => IRootStore

  @action
  increment = (number: number = 1) => {
    const root = this.root()
    console.log(root.test.counter)
    this.counter += number
  }

  @action
  decrement = (number: number = 1) => {
    this.counter -= number
  }
}

export default CounterStore
