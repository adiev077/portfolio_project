import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MacSwipper.module.scss';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import image1 from '../../../assets/images/mbp14-spaceblack-gallery1-202410.jpeg';
import image2 from '../../../assets/images/mbp14-spaceblack-gallery2-202410_GEO_US.jpeg';
import image3 from '../../../assets/images/mbp14-spaceblack-gallery3-202410.jpeg';
import image4 from '../../../assets/images/mbp14-spaceblack-gallery4-202410.jpeg';
import image5 from '../../../assets/images/mbp14-spaceblack-gallery5-202410.jpeg';
import image6 from '../../../assets/images/mbp14-spaceblack-gallery6-202410.jpeg';
import image7 from '../../../assets/images/mbp14-spaceblack-gallery7A-202410.jpeg';

function MacSwipper() {
    const [data, setData] = useState([
        { image: image1, id: 1,},
        { image: image2, id: 2,},
        { image: image3, id: 3,},
        { image: image4, id: 4,},
        { image: image5, id: 5,},
        { image: image6, id: 6,},
        { image: image7, id: 7,},
    ]);

    return (
        <div className={styles.content}>
            <p>MacBook Pro</p>
            <h2>
                <span>Mind-blowing.</span>
                <span>Head-turning.</span>
            </h2>
            <div className={styles.swiperBlock}>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    effect="fade"
                    loop={true}
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 4500 }}
                    speed={600}
                    grabCursor={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img className={styles.slidesImage} src={item.image} alt={item.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.link}>
                    <NavLink to="/mac" className={styles['btn']}>
                        Buy
                    </NavLink>
                </div>
                <p className={styles.paragraph}>
                    From $1599 or $133.25/mo. for 12 mo.*
                </p>
            </div>
        </div>
    );
}

export default MacSwipper;
