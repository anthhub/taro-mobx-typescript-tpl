import { Button, View, Input, Text, Image, Picker } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component, PageConfig } from '@tarojs/taro'
import MIcon from '@components/icon'
import './index.scss'
import Head from '@components/head'

import { autobind } from 'core-decorators'

interface IProps {
    counterStore: ICounterStore
    stepStore: IStepStore
    viewStore: IViewStore
}

@inject(({ counterStore, stepStore, viewStore }: IRootStore) => ({ stepStore, counterStore, viewStore }))
@observer
@autobind
class Index extends Component<IProps> {
    config: PageConfig = {
        navigationBarTitleText: '首页',
        enablePullDownRefresh: true,
    }

    componentDidShow() {
        this.reload()
    }

    reload = () => {
        console.log('reload')
    }

    handleDecrement(event: BaseEvent) {
        const dataset: any = event.target.dataset
        this.props.counterStore.decrement(dataset.number)
    }

    handleIncrement(event: BaseEvent) {
        const dataset: any = event.target.dataset
        this.props.counterStore.increment(dataset.number)
    }

    onInput(e) {
        return this.props.stepStore.setStep(e.target.value)
    }

    onPickerChange(e) {
        console.log(e.target.value)
    }

    render() {
        const {
            counterStore,
            stepStore: { step },
            viewStore: { showImg, options, optionsModal },
        } = this.props
        const number = counterStore.counter

        return (
            <View>
                <Head text={number + ''} />

                <Button onClick={this.handleDecrement} data-number={1}>
                    <MIcon type="minus" />
                </Button>
                <View className="text">
                    <MIcon type="warning" className="icon" />
                    {number}
                </View>
                <Button onClick={this.handleIncrement} data-number={1}>
                    <MIcon type="plus" />
                </Button>

                <View>
                    <Text>输入计数的步长</Text>
                    <Input value={step + ''} onInput={this.onInput} type="number" placeholder="输入计数的步长" />
                </View>
                <View className="page-section">
                    <Text>地区选择器</Text>
                    <View>
                        <Picker mode="selector" range={options} onChange={this.onPickerChange}>
                            <View className="picker">当前选择模式： {optionsModal}</View>
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text>当计数超过 10 , 步长超过0 时显示图片 </Text>
                    {showImg && (
                        <Image
                            style="width: 100%;background: #fff;"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558878356172&di=164c2b32dde01dc4c12d51439c71f401&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe51a046748cfb2c4eb66a8c3c86a4b3d536f06c1.jpg"
                        />
                    )}
                </View>
            </View>
        )
    }
}

export default Index
