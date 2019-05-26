import Nerv from "nervjs";
import { Text, View } from '@tarojs/components';
import BaseComponent from "../../lib/extent/comp";
import './index.scss';
class Head extends BaseComponent {
  render() {
    const { text } = this.props;
    return <View>
                <Text>{text}</Text>{' '}
            </View>;
  }
}
export default Head;