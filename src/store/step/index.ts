import { action, observable } from 'mobx'
import StoreExt from '@lib/extent/store'

export class StepStore extends StoreExt {
    @observable
    step: number = 1

    getRootStore: () => IRootStore

    constructor(getRootStore) {
        super()
        this.getRootStore = getRootStore
    }

    @action
    setStep  (number: number = 1)  {
        this.step = Number(number)
        return this.step 
    }
}

export default StepStore
