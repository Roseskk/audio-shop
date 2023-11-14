'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Divider from "@/components/ui/divider";
import {Products} from "@/types/types";
import styles from './slider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";
import {getTitle} from "@/utils/utils";

interface Props {
    products: Products;
}

const Slider: React.FC<Props> = ({products}) => {
    console.log(products)
    return (
        <section className={styles.section_slider}>
            <Divider/>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false
                }}
                loop={true}
                className={styles.swiper}
            >
                {products.map((product) => (
                    <SwiperSlide className={styles.swiper_slide} key={product.id}>
                        <div className={styles.slide_content}>
                            {
                                product.acf.isnew === 'true' && <span className={styles.new_product}>NEW PRODUCT</span>
                            }
                            <h1 className={styles.title}>{getTitle(product)}</h1>
                            <p className={styles.subtitle}>{product.acf.subtitle}</p>
                            <CustomLink link={`/products/${product.acf.category.slug}/${product.id}`} type={'default'}
                                        text={'SEE PRODUCTS'}/>
                        </div>
                        <Image src={product.acf.heroimage} width={710} height={729} alt={'title'}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.slider_bg}></div>
        </section>
    );
};

export default Slider;
