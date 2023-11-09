import React from 'react';
import Image from "next/image";
import {Product} from "@/types/types";
import CountBtn from "@/components/ui/btn/countBtn";
import CustomLink from "@/components/ui/customLink";

import styles from './productCardInfo.module.scss';

const ProductCardInfo = (props: { data: Product }) => {
    return (
        <div className={styles.card_info__item}>
            <Image width={540} height={560} src={props.data.acf.large_image} alt={props.data.slug}/>
            <div className={styles.content_wrapper}>
                {
                    props.data.acf.isnew === 'true' && <h5 className={styles.outlined}>NEW PRODUCT</h5>
                }
                <h2 className={styles.title}>{props.data.title}</h2>
                <p className={styles.content}>{props.data.acf.subtitle}</p>
                <span className={styles.price}>$ {props.data.acf.price}</span>
                <div className={styles.btn_wrapper}>
                    <CountBtn name={props.data.title}/>
                    <CustomLink link={'#'} type={"default"} text={'ADD TO CARD'}/>
                </div>
            </div>
        </div>

    )
}

export default ProductCardInfo;