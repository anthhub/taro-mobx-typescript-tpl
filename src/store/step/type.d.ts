import { StepStore } from "./index"

declare global {
  interface IStepStore extends StepStore {}
}
