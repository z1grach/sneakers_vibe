export interface ISneakers {
    [key: string]: string | number | ISneakerReplacement[]

    article: string
    price: string
    brand: string
    model: string
    color: string
    gender: string
    popular: number
    replacement?: ISneakerReplacement[]
}

export interface IFilter {
    [key: string]: string[]

    brand: string[]
    color: string[]
    gender: string[]
}

export interface ISneakerReplacement {
    article: string
    color: string
}