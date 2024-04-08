import React, { useEffect, useState } from 'react';
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import styles from "./IphoneDetail.module.scss"
import {NavLink, useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import clsx from "clsx";

function IphoneDetail() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/iPhonePage');
                const data = await response.json();
                setDetail(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        }
        fetchData();
    }, [])

    const selectedProduct = detail.find(product => product.id === parseInt(id));

    const cartSvg = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.2325 1.39125C10.0833 1.33144 9.91673 1.33144 9.7675 1.39125L2.3075 4.375L5.3125 5.57625L13.005 2.5L10.2325 1.39125ZM14.6875 3.17375L6.995 6.25L10 7.45125L17.6925 4.375L14.6875 3.17375ZM18.75 5.29875L10.625 8.54875V18.4512L18.75 15.2012V5.29999V5.29875ZM9.375 18.4525V8.54749L1.25 5.29875V15.2025L9.375 18.4525ZM9.30375 0.229995C9.75071 0.0512443 10.2493 0.0512443 10.6962 0.229995L19.6075 3.795C19.7234 3.84143 19.8227 3.92149 19.8926 4.02486C19.9626 4.12823 20 4.25018 20 4.375V15.2025C19.9998 15.4523 19.9249 15.6963 19.7847 15.903C19.6446 16.1098 19.4457 16.2698 19.2138 16.3625L10.2325 19.955C10.0833 20.0148 9.91673 20.0148 9.7675 19.955L0.7875 16.3625C0.555314 16.27 0.356178 16.1101 0.215803 15.9033C0.0754271 15.6965 0.000257912 15.4524 0 15.2025L0 4.375C2.90499e-05 4.25018 0.0374297 4.12823 0.107384 4.02486C0.177338 3.92149 0.276641 3.84143 0.3925 3.795L9.30375 0.229995Z"
                      fill="#BDBDBD"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

    const actionSvg = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_501_2)">
                <path
                    d="M15.7161 17.8062C16.0948 18.1145 16.0948 18.6775 15.7161 18.9859L12.3147 21.7542C11.7954 22.1771 11.001 21.8206 11.001 21.1646L11.0005 19H4.996C4.7196 19 4.496 18.7764 4.496 18.5C4.496 18.2236 4.7196 18 4.996 18H11.0005L11 15.627C11 14.9708 11.7944 14.6143 12.314 15.0372L15.7161 17.8062ZM25.6363 6H25.6324C24.1314 6 22.7144 6.5908 21.6412 7.6631C20.5826 8.7217 19.9996 10.1152 20.0001 11.5869V15.0017L19.7591 15.0015C19.0691 15.001 18.5093 15.5597 18.5083 16.2497L18.5019 20.748C18.5009 21.4387 19.0603 21.9993 19.7511 21.9998L20.0001 22V29H21.0001V11.5869C20.9996 10.3818 21.4786 9.2402 22.3482 8.3701C23.2325 7.4863 24.3985 7 25.6324 7H30.0001V6H25.6363Z"
                    fill="#333333"/>
            </g>
            <defs>
                <clipPath id="clip0_501_2">
                    <rect width="35" height="35" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

    const camerSvg = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_108_28)">
                <path
                    d="M29 6.01V7H15.2435C10.7402 6.9647 7.05542 10.576 7.00001 15.0791V29H6.01311V15.0791C6.06358 10.0285 10.1924 5.97156 15.2431 6.0098L29 6.01ZM27.9927 14.4943V23.4924C27.9891 26.5285 25.5288 28.9888 22.4927 28.9924H14.5048C11.4687 28.9888 9.00839 26.5285 9.00481 23.4924V14.4941C9.00889 11.4592 11.4699 9.00083 14.5048 9H22.4926C25.5275 9.00083 27.9885 11.4592 27.9927 14.4941V14.4943ZM27.0001 14.4943C26.9939 12.0087 24.9783 9.99644 22.4927 9.9943H14.5048C12.0198 9.99661 10.0051 12.0091 10 14.4941V23.4922C10.0044 25.9788 12.0182 27.994 14.5048 28H22.4926C24.9797 27.9942 26.9944 25.9793 27.0001 23.4922V14.4943ZM14.5 19.75C12.7051 19.75 11.25 21.2051 11.25 23C11.25 24.7949 12.7051 26.25 14.5 26.25C16.2949 26.25 17.75 24.7949 17.75 23C17.75 21.2051 16.2949 19.75 14.5 19.75ZM14.45 11.75C13.5984 11.754 12.7843 12.101 12.1915 12.7125C11.5988 13.3241 11.2774 14.1486 11.3 15C11.2775 15.8513 11.5988 16.6759 12.1916 17.2874C12.7843 17.899 13.5984 18.2459 14.45 18.25C16.2449 18.25 17.7 16.7949 17.7 15C17.7 13.2051 16.2449 11.75 14.45 11.75ZM22.5 15.75C20.7051 15.75 19.25 17.2051 19.25 19C19.25 20.7949 20.7051 22.25 22.5 22.25C24.2949 22.25 25.75 20.7949 25.75 19C25.75 17.2051 24.2949 15.75 22.5 15.75ZM22.5 23.5C21.6716 23.5 21 24.1716 21 25C21 25.8284 21.6716 26.5 22.5 26.5C23.3284 26.5 24 25.8284 24 25C24 24.1716 23.3284 23.5 22.5 23.5ZM21 13C21 12.1716 21.6716 11.5 22.5 11.5C23.3284 11.5 24 12.1716 24 13C24 13.8284 23.3284 14.5 22.5 14.5C21.6716 14.5 21 13.8284 21 13ZM22 13C22 13.2761 22.2239 13.5 22.5 13.5C22.7761 13.5 23 13.2761 23 13C23 12.7239 22.7761 12.5 22.5 12.5C22.224 12.5003 22.0003 12.724 22 13Z"
                    fill="#333333"/>
            </g>
            <defs>
                <clipPath id="clip0_108_28">
                    <rect width="35" height="35" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

    const chipSvg = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_501_8)">
                <path
                    d="M24.4999 29H10.4999C8.01849 29 5.99989 26.9814 5.99989 24.5V10.5C5.99989 8.0186 8.01849 6 10.4999 6H24.4999C26.9813 6 28.9999 8.0186 28.9999 10.5V24.5C28.9999 26.9814 26.9813 29 24.4999 29ZM10.4999 7C8.57019 7 6.99989 8.5703 6.99989 10.5V24.5C6.99989 26.4297 8.57019 28 10.4999 28H24.4999C26.4296 28 27.9999 26.4297 27.9999 24.5V10.5C27.9999 8.5703 26.4296 7 24.4999 7H10.4999ZM13.2816 12.4814H14.4955L16.2113 17.414H15.1244L14.7582 16.2177H13.0189L12.6527 17.414H11.5697L13.2816 12.4814ZM13.2543 15.4453H14.5229L13.9213 13.4658H13.8598L13.2543 15.4453ZM17.7094 13.456H17.6469L16.4379 14.2968V13.3671L17.7123 12.4814H18.7406V17.414H17.7094V13.456ZM22.2641 13.3603V13.3017H19.7758V12.4785H23.3031V13.3125L21.2426 17.4141H20.1625L22.2641 13.3603ZM13.8155 19.9423H12.1983V23.9941H12.9229V22.6552H13.8155C14.6378 22.6552 15.1934 22.1103 15.1934 21.3017V21.2958C15.1934 20.4843 14.6377 19.9423 13.8155 19.9423ZM14.461 21.3046C14.461 21.79 14.1573 22.0712 13.6387 22.0712H12.9229V20.5351H13.6387C14.1573 20.5351 14.461 20.8134 14.461 21.2988V21.3046ZM18.0264 22.3603C18.5069 22.1855 18.7901 21.7421 18.7901 21.206V21.2001C18.7901 20.4286 18.2676 19.9423 17.3975 19.9423H15.7608V23.9941H16.4854V22.4697H17.2881L18.082 23.9941H18.9111L18.0264 22.3603ZM17.3213 21.914H16.4854V20.5292H17.3077C17.7677 20.5292 18.046 20.7929 18.046 21.2177V21.2226C18.046 21.6581 17.7793 21.914 17.3213 21.914ZM21.2979 19.8417C20.1211 19.8417 19.3799 20.6581 19.3799 21.9638V21.9697C19.3799 23.2724 20.1104 24.0957 21.2979 24.0957C22.4795 24.0957 23.2129 23.2725 23.2129 21.9697V21.9638C23.2129 20.6581 22.4775 19.8417 21.2979 19.8417ZM22.4747 21.9696C22.4747 22.8798 22.0196 23.4686 21.2979 23.4686C20.5674 23.4686 20.1182 22.8797 20.1182 21.9696V21.9637C20.1182 21.0487 20.5791 20.4676 21.2979 20.4676C22.0167 20.4676 22.4747 21.0487 22.4747 21.9637V21.9696Z"
                    fill="#333333"/>
            </g>
            <defs>
                <clipPath id="clip0_501_8">
                    <rect width="35" height="35" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

    const tyoeSvg = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_501_11)">
                <path
                    d="M26 13C28.4852 13 30.5 15.0147 30.5 17.5C30.5 19.9853 28.4852 22 26 22H8C5.5148 22 3.5 19.9853 3.5 17.5C3.5 15.0147 5.5148 13 8 13H26ZM26 12H8C4.9673 12 2.5 14.4673 2.5 17.5C2.5 20.5327 4.9673 23 8 23H26C29.0327 23 31.5 20.5327 31.5 17.5C31.5 14.4673 29.0327 12 26 12ZM26.5 17.5C26.5 17.2239 26.2761 17 26 17H8C7.7239 17 7.5 17.2239 7.5 17.5C7.5 17.7761 7.7239 18 8 18H26C26.2761 18 26.5 17.7761 26.5 17.5Z"
                    fill="#333333"/>
            </g>
            <defs>
                <clipPath id="clip0_501_11">
                    <rect width="35" height="35" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )


    return (
        <div className={styles.detail}>
            <Header/>
            {selectedProduct && (
                <div className={styles.product}>
                    <div className={styles['iphone_wrapper']}>
                        <div className={styles['iphone_img_list']}>
                            <Swiper
                                centeredSlides={true}
                                slidesPerView={1}
                                effect="fade"
                                loop={true}
                                modules={[Navigation]}
                                navigation
                                speed={600}
                                grabCursor={true}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide className={styles['iphone_img_list_slide']}>
                                    <img className={styles.slidesImage}
                                         src={selectedProduct.image}
                                         alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles["iphone_info"]}>
                        <p className={styles['product_title']}>
                            {selectedProduct.name}
                        </p>
                        <p className={styles.vendorCodePlaceHolder}></p>
                        <p className={styles['product_color_title']}>
                            Color
                        </p>
                        <div className={styles['product_color_list']}>
                            <div className={styles['product_color']}>
                                <img
                                    src={selectedProduct.color.natural_titanium} srcSet={selectedProduct.color.pink}
                                    alt=""
                                />
                            </div>

                            <div className={styles['product_color']}>
                                <img src={selectedProduct.color.blue_titanium} srcSet={selectedProduct.color.blue}
                                     alt=""
                                />
                            </div>
                            <div className={styles['product_color']}>
                                <img src={selectedProduct.color.white_titanium} srcSet={selectedProduct.color.yellow}
                                     alt=""
                                />
                            </div>
                            <div className={styles['product_color']}>
                                <img src={selectedProduct.color.black_titanium} srcSet={selectedProduct.color.green}
                                     alt=""
                                />
                            </div>
                        </div>
                        <p className={styles['product_memory_title']}>
                            Memory
                        </p>
                        <div className={styles['product_memory_list']}>
                            {(selectedProduct.id === 1 || selectedProduct.id === 2) ? (
                                <>
                                    <div className={styles['product_memory']}>
                                        {selectedProduct.memory.memory256}
                                    </div>
                                    <div className={styles['product_memory']}>
                                        {selectedProduct.memory.memory512}
                                    </div>
                                    <div className={styles['product_memory']}>
                                        {selectedProduct.memory.memory1000}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles['product_memory']}>
                                        {selectedProduct.memory.memory128}
                                    </div>
                                    <div className={styles['product_memory']}>
                                        {selectedProduct.memory.memory256}
                                    </div>
                                    {(selectedProduct.id >= 3 && selectedProduct.id <= 9) && (
                                        <div className={styles['product_memory']}>
                                            {selectedProduct.memory.memory512}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                        <p className={styles['product_model_title']}>
                            Model
                        </p>
                        <div className={styles['product_model_list']}>
                            <div className={styles["product_model"]}>
                                {selectedProduct.model.nano_sim_esim}
                            </div>
                            <div className={styles["product_model"]}>
                                {selectedProduct.model.nano_sim_nano_sim}
                            </div>
                            <div className={styles["product_model"]}>
                                {selectedProduct.model.esim_esim}
                            </div>
                        </div>
                        <div className={styles['price_block']}>
                            <div className={styles['product_buy_price']}>
                                <p className={styles['product_price']}>
                                    {selectedProduct.price}
                                </p>
                                <span className={styles['product_price_usd']}>
                                    {selectedProduct.dollar}
                                </span>
                            </div>
                            <div className={styles['product_buy_cart']}>
                                {cartSvg}
                                <p>The product is in stock</p>
                            </div>
                        </div>
                        <div className={styles['btn_list']}>
                            <div className={styles['btn_block']}>
                                <button className={styles.btn}>
                                    Buy
                                </button>
                            </div>
                            <div className={styles['btn_block']}>
                                <NavLink to='/cart' className={styles.link}>
                                    Book
                                </NavLink>
                            </div>
                        </div>
                        <p className={styles['product_characteristic_title']}>
                            Main Features
                        </p>
                        <div className={styles['product_characteristic_list']}>
                            <div>
                                <p className={styles['product_characteristic']}>
                                    {actionSvg}
                                    {selectedProduct.desc.desc1}
                                </p>
                                <p className={styles['product_characteristic']}>
                                    {camerSvg}
                                    {selectedProduct.desc.desc2}
                                </p>
                            </div>
                            <div>
                                <p className={styles['product_characteristic']}>
                                    {tyoeSvg}
                                    {selectedProduct.desc.desc3}
                                </p>
                                <p className={styles['product_characteristic']}>
                                    {chipSvg}
                                    {selectedProduct.desc.desc4}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default IphoneDetail;
