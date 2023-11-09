import React from 'react';
import {Product} from "@/types/types";
import Image from "next/image";

import styles from './features.module.scss';

const FeaturesInfo = (props: { features: Product }) => {
    return (
        <section className={styles.section_features}>
            <div className={styles.features_info}>
                <div className={styles.features_content}>
                    <h3 className={styles.features_left__title}>FEATURES</h3>
                    <p className={styles.features_left__content}>{props.features.acf.features}</p>
                </div>
                <div className={styles.features_box}>
                    <h3 className={styles.features_box__title}>IN THE BOX</h3>
                    <ul className={styles.features_box__list}>
                        {
                            props.features.acf.features_category.map((category) => {
                                return (
                                    <li className={styles.features_box__item}>
                                        <span
                                            className={styles.features_item__substring}>{category.name.slice(0, 3)}</span>
                                        <span className={styles.features_item__default}>{category.name.slice(3)}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.features_img__wrapper}>
                <div className={styles.features_img__left}>
                    <Image width={445} height={280}
                           src={props.features.acf["features-medium-img"]} alt={'phones'}/>
                    <Image width={445} height={280}
                           src={props.features.acf["features-third-img"]} alt={'phones'}/>
                </div>
                <Image width={635} height={592}
                       src={props.features.acf["features-large-img"]}
                       alt={'phones'}/>
            </div>
        </section>
    )
}
export default FeaturesInfo;