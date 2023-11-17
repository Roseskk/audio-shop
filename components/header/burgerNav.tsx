import React from 'react';
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";

import yx1 from '../../assets/images/burger/yx1.png'
import zx9 from '../../assets/images/burger/zx9.png'
import x99 from '../../assets/images/burger/x99.png'

import styles from './burger.module.scss';
import {useRouter} from "next/navigation";

const BurgerNav = ({burger, setBurger}: { burger: boolean, setBurger: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const router = useRouter()

    return (
        <ul className={`${styles.burger_list} ${burger ? '' : styles.burger_hide}`}>
            <li onClick={() => {
                setBurger(false);
                router.push('/products/headphones')
            }} className={styles.burger_item}>
                <Image src={x99} alt={'headphones'}/>
                <div className={styles.shadow}/>
                <h3 className={styles.burger_title}>HEADPHONES</h3>
                <CustomLink link={'/products/headphones'} type={"glass"} text={'SHOP'}/>
            </li>
            <li onClick={() => {
                setBurger(false);
                router.push('/products/speakers')
            }} className={styles.burger_item}>
                <Image src={zx9} alt={'speakers'}/>
                <div className={styles.shadow}/>
                <h3 className={styles.burger_title}>speakers</h3>
                <CustomLink link={'/products/speakers'} type={"glass"} text={'SHOP'}/>
            </li>
            <li onClick={() => {
                setBurger(false);
                router.push('/products/earphones')
            }} className={styles.burger_item}>
                <Image src={yx1} alt={'earphones'}/>
                <div className={styles.shadow}/>
                <h3 className={styles.burger_title}>earphones</h3>
                <CustomLink link={'/products/earphones'} type={"glass"} text={'SHOP'}/>
            </li>
        </ul>
    )
};

export default BurgerNav;