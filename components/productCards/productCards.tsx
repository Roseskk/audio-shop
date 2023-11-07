import React from 'react';
import CategoryCard from "@/components/ui/cards/categoryCard";
import {Product, Products} from "@/types/types";
import styles from './productCards.module.scss';

export async function getCategoryData() {
    const url = `${process.env.API}/products?&acf_format=standard&_fields=id,title,acf,slug`;

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch Products')
    }

    return res.json()
}

const ProductCards: React.FC = async () => {
    const data: Products = await getCategoryData()
    const categories = ['headphones', 'speakers', 'earphones'];
    const productsCardsData: Products = categories.map(category => data.find((item: Product) => item.acf.category.slug === category)!);
    return (
        <ul className={styles.product_cards__list}>
            {
                productsCardsData.map((product) => <CategoryCard key={product.id} cardInfo={product}/>)
            }
        </ul>
    )
}

export default ProductCards;