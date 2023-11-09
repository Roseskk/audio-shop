import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IProductsBasket {
    [key: string]: number | any
}

export interface IBasket {
    products: IProductsBasket
}

const initialState: IBasket = {
    products: []
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProductsBasket>) => {
            console.log(action.payload)
            state.products.push(action.payload)
        },
        unsetProducts: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((item: any) => item.name !== action.payload)
        }
    }
})

export const {setProducts, unsetProducts} = basketSlice.actions

export const basketReducer = basketSlice.reducer