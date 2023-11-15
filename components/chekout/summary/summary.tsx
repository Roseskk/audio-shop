'use client'
import React from 'react';
import styles from './summary.module.scss';
import {useFormikContext} from "@/hooks/formikContext";
import {useAppSelector} from "@/app/store";
import Image from "next/image";
import withReduxProvider from "@/app/store/ReduxProvider";

const Summary = () => {
    const {form} = useFormikContext();

    const products = useAppSelector(state => state.basketReducer.products);

    const handleForm = () => {

        form?.submitForm()
            .then(() => {
                form?.validateForm().then((err) => {
                    if (Object.keys(err).length === 0) {
                        console.log('Valid')
                    } else {
                        console.log('Invalid')
                    }
                })
            })
    };

    const _TOTAL = Object.entries(products).map(([k, v]) => {
        const priceNumber = parseFloat(v.price.replace(/,/g, ""));
        return priceNumber * v.count;
    }).reduce((acc, cur) => acc + cur, 0);

    const _VAT = _TOTAL * 0.2

    const _SHIPPING = 50

    const _GRAND = _SHIPPING + _TOTAL

    return (
        <div className={styles.summary_section}>
            <h3 className={styles.summary_section__title}>SUMMARY</h3>
            <ul className={styles.summary_list}>
                {
                    Object.entries(products).map(([key, value], idx) => {
                        return (
                            <li key={idx} className={styles.summary_item}>
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
                    onClick={handleForm}>Submit
            </button>
        </div>
    )
}

export default withReduxProvider(Summary);
