import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './PromoSwipper.module.scss';
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import image1 from "./../../../assets/images/airpods-4-pc.webp";
import image2 from "./../../../assets/images/ipad-air-2024-pc.webp";
import image3 from "./../../../assets/images/ipad-pro-2024-pc.webp";
import image4 from "./../../../assets/images/iphone-16-pc.webp";
import image5 from "./../../../assets/images/iphone-16-pro-pc.webp";
import image6 from "./../../../assets/images/series-10-pc.webp";

function MySwiper() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const imageData = [
            { image: image1, id: 1 },
            { image: image2, id: 2 },
            { image: image3, id: 3 },
            { image: image4, id: 4 },
            { image: image5, id: 5 },
            { image: image6, id: 6 },
        ];
        setData(imageData);
    }, []);

    return (
        <div className={styles.swiperBlock}>
            <Swiper
                centeredSlides={true}
                slidesPerView={1}
                effect="fade"
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 5500 }}
                navigation
                speed={600}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            className={styles.slidesImage}
                            src={item.image}
                            alt={`Slide ${item.id}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MySwiper;
