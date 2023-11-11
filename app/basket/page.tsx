import React from 'react';
import Breadcrumb from "@/components/ui/breadcrumb/breadcrumb";
import Checkout from "@/components/chekout/checkout";

import styles from './basket.module.scss';

const Page = () => {
    return (
        <main className={styles.basket_main}>
            <Breadcrumb/>
            <Checkout/>
        </main>
    )
}

export default Page;