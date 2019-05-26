import Nerv from "nervjs";
import { Text } from '@tarojs/components';
import BaseComponent from "../../lib/extent/comp";
import './index.scss';
class Icon extends BaseComponent {
  render() {
    const { type, className } = this.props;
    return <Text className={['ui-icon', `ui-icon-${type}`, className].join(' ')} />;
  }
}
export default Icon;