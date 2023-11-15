import React from 'react';
import Image from "next/image";
import audio from '../../assets/images/about/image-best-gear.jpg';

import styles from './aboutAudio.module.scss';

const AboutAudio = () => {
    return (
        <section className={styles.section_audio}>
            <div className={styles.audio_content}>
                <h2 className={styles.title}>Bringing you the <span className={styles.sub}>best</span> audio gear</h2>
                <p className={styles.content}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>
            <Image className={styles.image_fix} src={audio} alt={'best_audio'}/>
            <div className={styles.image_container}>
                <Image src={audio} alt={'best_audio'}/>
            </div>
        </section>
    )
}

export default AboutAudio;