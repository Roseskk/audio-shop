'use client'
import React, {useState} from 'react';
import styles from './count.module.scss';
import {useAppDispatch, useAppSelector} from "@/app/store";
import {setProducts} from "@/app/store/slices/basket";
import withReduxProvider from "@/app/store/ReduxProvider";

const CountBtn = (props: { name: string }) => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector(state => state.basketReducer.products)
    const [count, setCount] = useState<number>(0)
    const handleChange = (type: string) => {
        if (type === 'plus') {
            console.log(type)
            setCount(prev => prev + 1)
            dispatch(setProducts({name: props.name, count: count + 1}))
        } else {
            setCount(prev => prev - 1)
            dispatch(setProducts({name: props.name, count: count - 1}))
        }
    }
    console.log(selector)
    return (
        <div className={styles.count_wrapper}>
            <button className={styles.minus} onClick={() => handleChange('minus')}>-</button>
            <button className={styles.count}>{count}</button>
            <button className={styles.plus} onClick={() => handleChange('plus')}>+</button>
        </div>
    )
}

export default withReduxProvider(CountBtn);