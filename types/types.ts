//Header Interfaces

export interface IHeader {
    id: number;
    title: string;
    href: string;
    img: string;
}


// Products
export type Products = Product[]

export interface Product {
    id: number
    slug: string
    title: string
    acf: Acf
}

export interface Title {
    rendered: string
}

export interface Acf {
    subtitle: string
    large_image: string
    medium_image: string
    small_image: string
    category: Category
    price: string
    features: string
    features_category: FeaturesCategory[]
    isnew: string
    "features-large-img": string
    "features-medium-img": string
    "features-third-img": string
    thumbnail: string
    "shorthand-text": string
    heroimage: string
}

export interface Category {
    term_id: number
    name: string
    slug: string
    term_group: number
    term_taxonomy_id: number
    taxonomy: string
    description: string
    parent: number
    count: number
    filter: string
}

export interface FeaturesCategory {
    term_id: number
    name: string
    slug: string
    term_group: number
    term_taxonomy_id: number
    taxonomy: string
    description: string
    parent: number
    count: number
    filter: string
}

//LOCALSTORAGE

export interface ILocalStorageProducts {
    [key: string]: ILocalStorageProduct
}

export interface ILocalStorageProduct {
    price: string;
    count: number;
    thumbnail: string;
}
