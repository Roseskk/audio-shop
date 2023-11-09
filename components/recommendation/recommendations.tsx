import {Products} from "@/types/types";
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";

import styles from './recommendation.module.scss';

export async function getRecommendationData() {
    const url = `${process.env.API}/products?&acf_format=standard&_fields=id,title,acf,slug`

    const res = await fetch(url)
    return res.json().then(data => data.slice(0, 5))
}

const Recommendations = async () => {
    const recommended: Products = await getRecommendationData()
    return (
        <section className={styles.section_rec}>
            <h2 className={styles.section_rec_title}>YOU MAY ALSO LIKE</h2>
            <ul className={styles.rec_list}>
                {recommended.map(product => {
                    return (
                        <li className={styles.rec_item}>
                            <div className={styles.img__wrapper}>
                                <Image width={200} height={193} src={product.acf.thumbnail} alt={'thumbnail'}/>
                            </div>
                            <h2 className={styles.item_title}>{product.title.rendered}</h2>
                            <div className={styles.btn_wrapper}>
                                <CustomLink link={`/products/${product.acf.category.slug}/${product.id.toString()}`}
                                            type={"default"} text={'SEE PRODUCT'}/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Recommendations;