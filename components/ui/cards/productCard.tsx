import React from 'react';
import {Product} from "@/types/types";
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";

import styles from './productCard.module.scss';
import {getTitle, isOdd} from "@/utils/utils";

interface Props {
    product: Product
    index: number
}

const ProductCard: React.FC<Props> = ({product, index}) => {
    return (
        <li className={isOdd(index) ? styles.product_card__item : styles.conditional_card__render}>
            <Image width={540} height={560} src={product.acf.large_image} alt={'title'}/>
            <div className={styles.content}>
                {
                    product.acf.isnew === 'true' && <h6 className={styles.new}>NEW PRODUCT</h6>
                }
                <h2 className={styles.title}>{getTitle(product)}</h2>
                <p className={styles.content_text}>{product.acf.subtitle}</p>
                <CustomLink link={`/products/${product.acf.category.slug}/${product.id.toString()}`} type={"default"}
                            text={'SEE PRODUCT'}/>
            </div>
        </li>
    )
}

export default ProductCard;