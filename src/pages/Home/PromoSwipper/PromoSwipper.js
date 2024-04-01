import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './PromoSwipper.module.scss'
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';


function MySwiper() {

    const [images, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/images');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        };

        fetchData();
    }, []);

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
            {images.map((images, index) => (
                    <SwiperSlide key={index}>
                        <img className={styles.slidesImage}
                             src={`https://ik.imagekit.io/kvsf72hfx/SwiperSlide/${images}`} alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MySwiper;