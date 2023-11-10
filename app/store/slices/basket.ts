import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IProduct {
    price: string;
    count: number;
    thumbnail: string;
}

export interface IProductsBasket {
    [key: string]: IProduct;
}

export interface IBasket {
    products: IProductsBasket;
}

const initialState: IBasket = {
    // NO SSR
    // products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : {}
    // WITH SSR
    products: {}
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<{
            name: string,
            price: string,
            count: number,
            thumbnail: string
        }>) => {
            const {name, price, count, thumbnail} = action.payload;
            if (!state.products[name]) {
                state.products[name] = {price, count, thumbnail};
                localStorage.setItem(`products`, `${JSON.stringify(state.products)}`)

            } else {
                state.products[action.payload.name] = {
                    price: action.payload.price,
                    count: action.payload.count,
                    thumbnail: action.payload.thumbnail
                }
                localStorage.setItem(`products`, `${JSON.stringify(state.products)}`)
            }
        },
        unsetProducts: (state, action: PayloadAction<string>) => {
            if (state.products[action.payload]) {
                delete state.products[action.payload]
            }
        }
    }
})

export const {setProducts, unsetProducts} = basketSlice.actions

export const basketReducer = basketSlice.reducer