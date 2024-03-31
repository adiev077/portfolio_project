import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './MySwipper.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import {images} from "../../../components/CatalogAPI/CatalogAPI.jsx";


function MySwiper() {

    return (
        <div className={styles.swiperBlock}>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                effect="fade"
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{delay: 5500}}
                navigation
                speed={600}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
            {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className={styles.slidesImage}
                             src={`https://ik.imagekit.io/kvsf72hfx/SwiperSlide/${image}`} alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MySwiper;