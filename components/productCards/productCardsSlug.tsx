import React from 'react';
import {Products} from "@/types/types";
import ProductCard from "@/components/ui/cards/productCard";

import styles from './productCards.module.scss';

const ProductCardsSlug = (props: { products: Products }) => {
    return (
        <ul className={styles.product_cards__slug__list}>
            {props.products.map((product, idx) => <ProductCard product={product} index={idx}/>)}
        </ul>
    )
}

export default ProductCardsSlug;