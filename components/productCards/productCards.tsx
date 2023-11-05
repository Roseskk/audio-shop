import React from 'react';
import CategoryCard from "@/components/ui/cards/categoryCard";
import {Products} from "@/types/types";
import styles from './productCards.module.scss';

interface Props {
    productsInfo: Products
}

const ProductCards: React.FC<Props> = ({productsInfo}) => {
    return(
        <ul className={styles.product_cards__list}>
            {
                productsInfo.map((product) => <CategoryCard key={product.id} cardInfo={product} /> )
            }
        </ul>
    )
}

export default ProductCards;