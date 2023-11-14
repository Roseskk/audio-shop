import React from 'react';
import Image from "next/image";
import {Product} from "@/types/types";
import CountBtn from "@/components/ui/btn/countBtn";
import CustomLink from "@/components/ui/customLink";

import styles from './productCardInfo.module.scss';
import {getTitle} from "@/utils/utils";

const ProductCardInfo = (props: { data: Product }) => {
    return (
        <div className={styles.card_info__item}>
            <Image width={540} height={560} src={props.data.acf.large_image} alt={props.data.slug}/>
            <div className={styles.content_wrapper}>
                {
                    props.data.acf.isnew === 'true' && <h5 className={styles.outlined}>NEW PRODUCT</h5>
                }
                <h2 className={styles.title}>{getTitle(props.data)}</h2>
                <p className={styles.content}>{props.data.acf.subtitle}</p>
                <span className={styles.price}>$ {props.data.acf.price}</span>
                <div className={styles.btn_wrapper}>
                    <CountBtn thumbnail={props.data.acf.thumbnail} name={getTitle(props.data)}
                              price={props.data.acf.price}/>
                    <CustomLink link={'#'} type={"default"} text={'ADD TO CARD'}/>
                </div>
            </div>
        </div>

    )
}

export default ProductCardInfo;