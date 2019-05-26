import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import BaseComponent from '../../lib/extent/comp'
import './index.scss'

interface IProps {
    text: string
}

class Head extends BaseComponent<IProps> {
    render() {
        const { text } = this.props
        return (
            <View>
                <Text>{text}</Text>{' '}
            </View>
        )
    }
}

export default Head
