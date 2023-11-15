'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import basket from '../../assets/images/header/basket.svg';

import styles from './basket.module.scss';
import {useAppDispatch, useAppSelector} from "@/app/store";
import withReduxProvider from "@/app/store/ReduxProvider";
import {ILocalStorageProducts} from "@/types/types";
import {setProducts} from "@/app/store/slices/basket";
import CountBtn from "@/components/ui/btn/countBtn";
import CustomLink from "@/components/ui/customLink";

const Basket = () => {
    const dispatch = useAppDispatch()

    const products = useAppSelector(state => state.basketReducer.products)
    const [open, setOpen] = useState<boolean>(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = ''
        }
    }, [open]);

    useEffect(() => {
        const savedProducts = localStorage.getItem('products')

        if (savedProducts) {
            const products: ILocalStorageProducts = JSON.parse(savedProducts)

            for (const [k, v] of Object.entries(products)) {
                dispatch(setProducts({name: k, price: v.price, count: v.count, thumbnail: v.thumbnail}))
            }

            const total = Object.entries(products).map(([k, v]) => {
                const priceNumber = parseFloat(v.price.replace(/,/g, ""));
                return priceNumber * v.count;
            }).reduce((acc, cur) => acc + cur, 0);
            setTotal(total);

        }
    }, [open])

    useEffect(() => {
        if (total) {
            const total = Object.entries(products).map(([k, v]) => {
                const priceNumber = parseFloat(v.price.replace(/,/g, ""));
                return priceNumber * v.count;
            }).reduce((acc, cur) => acc + cur, 0);
            setTotal(total);
        }
    }, [products])

    const length = Object.entries(products).length
    return (
        <>
            <Image className={styles.basket_img} onClick={() => setOpen(prev => !prev)} src={basket} alt={'basket'}/>
            <div className={open ? styles.basket_widget : styles.basket_widget__hidden}>
                {
                    length !== 0 && <div className={styles.cart}>
                        <span className={styles.cart_title}>CART ({length})</span>
                        <button className={styles.remove}>Remove all</button>
                    </div>
                }
                <div className={styles.cart_list}>
                    {length !== 0 ?
                        Object.entries(products).map(([k, v], idx) => {
                            return (
                                <div className={styles.cart_item} key={idx}>
                                    <div className={styles.cart_item__wrapper}>
                                        <div className={styles.cart_item__img}>
                                            <Image width={36} height={40} src={v.thumbnail} alt={'thumbnail'}/>
                                        </div>
                                        <div className={styles.cart_summary}>
                                            <span className={styles.cart_summary__tile}>{k.split(" ")[0]}</span>
                                            <span className={styles.cart_summary_price}>$ {v.price}</span>
                                        </div>
                                    </div>
                                    <CountBtn thumbnail={v.thumbnail} name={k} price={v.price}/>
                                </div>
                            )
                        })
                        : <span className={styles.basket_empty}>Basket is empty</span>
                    }
                </div>
                {
                    length !== 0 &&
                    <>
                        <div className={styles.total}>
                            <span className={styles.total_title}>TOTAL</span>
                            <span className={styles.total_amount}>$ {total}</span>
                        </div>
                        <div onClick={() => setOpen(false)} className={styles.cart_btn}>
                            <CustomLink style={'100% !important'} link={'/basket'} type={"default"} text={'CHECKOUT'}/>
                        </div>
                    </>
                }
            </div>
            <div onClick={() => setOpen(false)}
                 className={open ? styles.basket_widget__bg : styles.basket_widget__hidden}></div>
        </>
    )
}

export default withReduxProvider(Basket);