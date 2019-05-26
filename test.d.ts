declare var process: {
    env: {
        NODE_ENV: string
        APP_ENV: string
        BASEURL: string
    }
}

declare interface Result<Entity> {
    success?: boolean
    state?: number
    code?: number
    data?: Entity
    count?: number
    msg?: string
    [propName: string]: any
}

declare interface PlainObject {
    [propName: string]: any
}

declare interface BooleanObject {
    [propName: string]: boolean
}

declare interface StringObject {
    [propName: string]: string
}

declare interface NumberObject {
    [propName: string]: number
}

declare interface Window {
    [method: string]: Function
    [property: string]: string
}



