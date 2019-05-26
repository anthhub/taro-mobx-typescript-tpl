import { Button, View, Input, Text, Image } from '@tarojs/components'
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
        this.props.stepStore.setStep(e.target.value)
    }

    render() {
        const { counterStore } = this.props
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
                    <Input onInput={this.onInput} type="number" placeholder="输入计数的步长" />
                </View>

                <View>
                    <Text>当计数超过 10 时显示图片 </Text>
                    {this.props.viewStore.showImg && (
                        <Image
                            style="width: 100%;height: auto;background: #fff;"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875874138&di=c4454d21d495f0216c999a5691394eac&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F8d3a605a15848b9c1eb291aada0bcffd457426d6.jpg"
                        />
                    )}
                </View>
            </View>
        )
    }
}

export default Index
