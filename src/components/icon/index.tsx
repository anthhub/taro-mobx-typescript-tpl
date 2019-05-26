import { Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import BaseComponent from '../../lib/extent/comp'
import './index.scss'

interface IProps {
    type: string
    className?: string
}

class Icon extends BaseComponent<IProps> {
    render() {
        const { type, className } = this.props
        return <Text className={['ui-icon', `ui-icon-${type}`, className].join(' ')} />
    }
}

export default Icon
