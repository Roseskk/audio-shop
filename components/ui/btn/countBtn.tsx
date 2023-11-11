'use client'
import React, {useEffect, useState} from 'react';
import styles from './count.module.scss';
import {useAppDispatch, useAppSelector} from "@/app/store";
import {setProducts} from "@/app/store/slices/basket";
import withReduxProvider from "@/app/store/ReduxProvider";
import {ILocalStorageProducts} from "@/types/types";

const CountBtn = (props: { thumbnail: string, name: string, price: string }) => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(state => state.basketReducer.products)
    const [count, setCount] = useState<number>(counter[props.name]?.count ?? 0)

    useEffect(() => {
        const savedProducts = localStorage.getItem('products')

        if (savedProducts) {
            const products: ILocalStorageProducts = JSON.parse(savedProducts)

            for (const [k, v] of Object.entries(products)) {
                dispatch(setProducts({name: k, price: v.price, count: v.count, thumbnail: v.thumbnail}))
            }
        }
    }, [])

    const handleChange = (type: string) => {
        if (type === 'plus') {
            if (counter[props.name]?.count === undefined) {
                dispatch(setProducts({name: props.name, count: 1, thumbnail: props.thumbnail, price: props.price}))
            } else {
                dispatch(setProducts({name: props.name, count: counter[props.name]?.count + 1, thumbnail: props.thumbnail, price: props.price}))
            }

        } else {
            if (counter[props.name]?.count === 0 || counter[props.name]?.count === null || counter[props.name]?.count === undefined) {
                return
            }
            dispatch(setProducts({name: props.name, count: counter[props.name]?.count - 1, thumbnail: props.thumbnail, price: props.price}))
        }
    }

    return (
        <div className={styles.count_wrapper}>
            <button className={styles.minus} onClick={() => handleChange('minus')}>-</button>
            <button className={styles.count}>{counter[props.name]?.count ?? 0}</button>
            <button className={styles.plus} onClick={() => handleChange('plus')}>+</button>
        </div>
    )
}

export default withReduxProvider(CountBtn);