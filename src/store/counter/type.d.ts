import { CounterStore } from "./index"

declare global {
  interface ICounterStore extends CounterStore {}
}
