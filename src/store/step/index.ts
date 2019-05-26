import { action, observable } from 'mobx'

export class StepStore {
    @observable
    step: number = 1

    getRootStore: () => IRootStore

    @action
    setStep = (number: number = 1) => {
        this.step = Number(number)
    }
}

export default StepStore
