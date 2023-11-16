'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import styles from './summary.module.scss';
import {useFormikContext} from "@/hooks/formikContext";
import {useAppSelector} from "@/app/store";
import Image from "next/image";
import withReduxProvider from "@/app/store/ReduxProvider";
import {IProductsBasket} from "@/app/store/slices/basket";
import Divider from "@/components/ui/divider";
import CustomLink from "@/components/ui/customLink";

const Summary = () => {
    const router = useRouter()
    const {form} = useFormikContext();
    const [initialProducts, setInitialProducts] = useState<IProductsBasket>({})
    const [cashier, setCashier] = useState<boolean>(false)

    const products = useAppSelector(state => state.basketReducer.products);

    useEffect(() => {
        if (products) {
            setInitialProducts(products)
        }
    }, [products])
    const handleForm = () => {

        form?.submitForm()
            .then(() => {
                form?.validateForm().then((err) => {
                    if (Object.keys(err).length === 0) {
                        setCashier(true)
                        form?.resetForm()
                    } else {
                        console.log('Invalid')
                    }
                })
            })
    };

    const _TOTAL = initialProducts ? Object.entries(initialProducts || {}).map(([k, v]) => {
        const priceNumber = parseFloat(v.price.replace(/,/g, ""));
        return priceNumber * v.count;
    }).reduce((acc, cur) => acc + cur, 0) : 0

    const _VAT = _TOTAL * 0.2

    const _SHIPPING = 50

    const _GRAND = _SHIPPING + _TOTAL

    return (
        <>
            <div className={styles.summary_section}>
                <h3 className={styles.summary_section__title}>SUMMARY</h3>
                <ul className={styles.summary_list}>
                    {
                        Object.entries(initialProducts!).map(([key, value], idx) => {
                            return (
                                <li key={`${key}${value}-${idx}`} className={styles.summary_item}>
                                    <div className={styles.summary_left}>
                                        <div className={styles.summary_img}>
                                            <Image width={64} height={64} src={value.thumbnail} alt={'thumbnail'}/>
                                        </div>
                                        <div className={styles.summary_left_content}>
                                            <h3 className={styles.left_title}>{key}</h3>
                                            <span className={styles.left_content}>$ {value.price}</span>
                                        </div>
                                    </div>
                                    <h4 className={styles.summary_right}>x{value.count}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className={styles.price_list}>
                    <li className={styles.price_item}>
                        <h3 className={styles.price_label}>TOTAL</h3>
                        <span className={styles.price_title}>$ {_TOTAL}</span>
                    </li>
                    <li className={styles.price_item}>
                        <h3 className={styles.price_label}>SHIPPING</h3>
                        <span className={styles.price_title}>$ {_SHIPPING}</span>
                    </li>
                    <li className={styles.price_item}>
                        <h3 className={styles.price_label}>VAT (INCLUDED)</h3>
                        <span className={styles.price_title}>$ {_VAT}</span>
                    </li>
                </ul>
                <div className={styles.grand_price}>
                    <span className={styles.gran_title}>GRAND TOTAL</span>
                    <h3 className={styles.grand_label}>$ {_GRAND}</h3>
                </div>
                <span></span>
                <button className={`${styles.summary_btn} ${!form?.isValid ? styles.summary_disabled : ''}`}
                        disabled={!form?.isValid}
                        onClick={handleForm}>CONTINUE & PAY
                </button>
            </div>
            <div className={`${styles.summary_cashier} ${cashier ? '' : styles.cashier_back_hide}`}>
                <div className={styles.cashier_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                        <path d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125" stroke="white" strokeWidth="4"/>
                    </svg>
                </div>
                <div className={styles.cashier_head}>
                    <h2 className={styles.cashier_title}>THANK YOU FOR YOUR ORDER</h2>
                    <span className={styles.cashier_sub}>You will receive an email confirmation shortly.</span>
                </div>
                <div className={styles.cashier_summary}>
                    <ul className={`${styles.summary_list} ${styles.summary_list_gray}`}>
                        {
                            Object.entries(initialProducts!).map(([key, value], idx) => {
                                return (
                                    <>
                                        <div key={`${key}${value}-${idx}`} className={styles.summary_item}>
                                            <div className={styles.summary_left}>
                                                <div className={styles.summary_img}>
                                                    <Image width={64} height={64} src={value.thumbnail}
                                                           alt={'thumbnail'}/>
                                                </div>
                                                <div className={styles.summary_left_content}>
                                                    <h3 className={styles.left_title}>{key}</h3>
                                                    <span className={styles.left_content}>$ {value.price}</span>
                                                </div>
                                            </div>
                                            <h4 className={styles.summary_right}>x{value.count}</h4>
                                        </div>
                                        <Divider/>
                                        <span
                                            className={styles.other_items}>and {Object.entries(initialProducts).length - 1} other item(s)</span>
                                    </>
                                )
                            }).slice(0, 1)
                        }
                    </ul>
                    <div className={styles.cashier_grand}>
                        <h3 className={styles.cashier_grand_title}>GRAND TOTAL</h3>
                        <span className={styles.cashier_grand_price}>$ {_GRAND}</span>
                    </div>
                </div>
                <CustomLink link={'/'} type={"default"} text={'BACK TO HOME'}/>
            </div>
            <div onClick={() => {
                setCashier(false);
                router.back()
            }} className={`${styles.cashier_back}  ${cashier ? '' : styles.cashier_back_hide}`}/>
        </>
    )
}

export default withReduxProvider(Summary);
