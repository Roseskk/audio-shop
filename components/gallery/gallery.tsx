import React from 'react';
import Image from "next/image";
import zx9 from '../../assets/images/gallery/image-speaker-zx9.png';
import yx1 from '../../assets/images/gallery/image-earphones-yx1.jpg';
import zx7 from '../../assets/images/gallery/image-speaker-zx7.jpg';
import CustomLink from "@/components/ui/customLink";
import styles from './gallery.module.scss';

const Gallery = () => {
    return (
        <section className={styles.section_gallery}>
            <div className={styles.first_block__wrapper}>
                <div className={styles.first_block}>
                    <Image width={410} height={473} src={zx9} alt={'zx9'}/>
                    <div className={styles.first_block__content}>
                        <h2 className={styles.title}>ZX9 SPEAKER</h2>
                        <p className={styles.content}>Upgrade to premium speakers that are phenomenally built to deliver
                            truly remarkable sound.</p>
                        <CustomLink link={'products/speakers/96'} type={"transparent"} text={'SEE PRODUCT'}/>
                    </div>
                </div>
            </div>
            <div className={styles.second_block}>
                <div className={styles.second_block__content}>
                    <h3 className={styles.block_content}>ZX 7 SPEAKER</h3>
                    <CustomLink link={'products/speakers/75'} type={"transparent"} text={'SEE PRODUCT'}/>
                </div>
            </div>
            <div className={styles.third_block}>
                <div className={styles.left}/>
                <div className={styles.right}>
                    <h3 className={styles.block_content}>YX1 EARPHONES</h3>
                    <CustomLink link={'products/earphones/83'} type={"transparent"} text={'SEE PRODUCT'}/>
                </div>
            </div>
        </section>
    )
}

export default Gallery;