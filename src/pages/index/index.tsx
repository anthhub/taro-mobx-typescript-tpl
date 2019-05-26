import { Button, View } from '@tarojs/components'
import { BaseEvent } from '@tarojs/components/types/common'
import { inject, observer } from '@tarojs/mobx'
import Taro, { Component, PageConfig } from '@tarojs/taro'
import MIcon from '@components/icon'
import CounterStore from '@store/counter'
import './index.scss'
import Head from '@components/head'

import { autobind } from 'core-decorators'

interface IProps {
    counter: CounterStore
}

@inject('counter')
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
        this.props.counter.decrement(dataset.number)
    }

    handleIncrement(event: BaseEvent) {
        const dataset: any = event.target.dataset
        this.props.counter.increment(dataset.number)
    }

    render() {
        const { counter } = this.props
        const number = counter.counter
        return (
            <View>
                <Head text={number + ''} />
                <Button onClick={this.handleDecrement} data-number={10}>
                    <MIcon type="minus" /> 10
                </Button>
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
                <Button onClick={this.handleIncrement} data-number={10}>
                    <MIcon type="plus" /> 10
                </Button>
            </View>
        )
    }
}

export default Index
