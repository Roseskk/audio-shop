import React from 'react';
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";
import {Product} from "@/types/types";
import styles from './categoryCard.module.scss';

interface Props {
    cardInfo: Product
}

//Component should be only in UL
const CategoryCard: React.FC<Props> = ({cardInfo}) => {
    return (
        <li className={styles.category_card__item}>
            <Image className={styles.img} width={150} height={150} src={cardInfo.acf.thumbnail}
                   alt={cardInfo.title}/>
            <div className={styles.shadow}/>
            <h6 className={styles.name}>{cardInfo.acf.category.name}</h6>
            <CustomLink link={`/products/${cardInfo.acf.category.slug}`} type={"glass"} text={'SHOP'}/>
        </li>
    )
}

export default CategoryCard;