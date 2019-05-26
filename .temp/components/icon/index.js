import Nerv from "nervjs";
import { Text } from '@tarojs/components';
import classnames from 'classnames';
import BaseComponent from "../../lib/extent/comp";
import './index.scss';
class Icon extends BaseComponent {
  render() {
    const { type, className } = this.props;
    return <Text className={classnames(['ui-icon', `ui-icon-${type}`, className])} />;
  }
}
export default Icon;