import Taro from '@tarojs/taro'

// 设置缓存
export async function setCache(key: string, value: PlainObject) {
    let params: any = value
    if (typeof value === 'object') {
        params = JSON.stringify(value)
    }
    await Taro.setStorage({ key, data: params })
    return true
}
// 读取缓存
export async function getCache(key: string) {
    const result = ((await Taro.getStorage({ key })) as unknown) as string
    if (result) {
        return JSON.parse(result)
    } else {
        return null
    }
}
