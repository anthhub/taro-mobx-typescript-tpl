import * as tslib_1 from "tslib";
import { Button, View } from '@tarojs/components';
import { inject, observer } from "@tarojs/mobx-h5";
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import MIcon from "../../components/icon/index";
import './index.scss';
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidShow() {
    this.reload();
  }
  render() {
    const { counter } = this.props;
    const number = counter.counter;
    return <View>
                <Button onClick={this.handleDecrement} data-number={10}>
                    <MIcon type="minus" /> 10
                </Button>
                <Button onClick={this.handleDecrement}>
                    <MIcon type="minus" />
                </Button>
                <View className="text">
                    <MIcon type="warning" className="icon" />
                    {number}
                </View>
                <Button onClick={this.handleIncrement}>
                    <MIcon type="plus" />
                </Button>
                <Button onClick={this.handleIncrement} data-number={10}>
                    <MIcon type="plus" /> 10
                </Button>
            </View>;
  }
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  };
  reload = () => {
    console.log('reload');
  };
  handleDecrement = event => {
    const dataset = event.target.dataset;
    this.props.counter.decrement(dataset.number);
  };
  handleIncrement = event => {
    const dataset = event.target.dataset;
    this.props.counter.increment(dataset.number);
  };
};
Index = tslib_1.__decorate([inject('counter'), observer], Index);
export default Index;