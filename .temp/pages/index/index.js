import * as tslib_1 from 'tslib'
import { Button, View, Input, Text, Image } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx-h5'
import { Component } from '@tarojs/taro-h5'
import Nerv from 'nervjs'
import MIcon from '../../components/icon/index'
import './index.scss'
import Head from '../../components/head/index'
import { autobind } from 'core-decorators'
let Index = class Index extends Component {
    constructor() {
        super(...arguments)
    }
    componentDidShow() {
        this.reload()
    }
    handleDecrement(event) {
        const dataset = event.target.dataset
        this.props.counterStore.decrement(dataset.number)
    }
    handleIncrement(event) {
        const dataset = event.target.dataset
        this.props.counterStore.increment(dataset.number)
    }
    onInput(e) {
        this.props.stepStore.setStep(e.target.value)
    }
    render() {
        const {
            counterStore,
            viewStore: { showImg },
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
                    <Input onInput={this.onInput} type="number" placeholder="输入计数的步长" />
                </View>

                <View>
                    <Text>当计数超过 10 时显示图片 </Text>
                    {showImg && (
                        <Image
                            style="width: 100%;height: 500px;background: #fff;"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875874138&di=c4454d21d495f0216c999a5691394eac&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F8d3a605a15848b9c1eb291aada0bcffd457426d6.jpg"
                        />
                    )}
                </View>
            </View>
        )
    }
    config = {
        navigationBarTitleText: '首页',
        enablePullDownRefresh: true,
    }
    reload = () => {
        console.log('reload')
    }
}
Index = tslib_1.__decorate(
    [inject(({ counterStore, stepStore, viewStore }) => ({ stepStore, counterStore, viewStore })), observer, autobind],
    Index
)
export default Index
