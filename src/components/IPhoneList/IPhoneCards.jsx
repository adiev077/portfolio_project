import React, {useEffect, useState} from 'react';
import styles from "./iPhoneCards.module.scss";
import {NavLink} from "react-router-dom";

function IPhoneCards(props) {

    const [iphone, setIphone] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/iPhonePage');
                const data = await response.json();
                setIphone(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        }
        fetchData();
    }, [])

    const cartSvg = (
        <svg width="20" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1073 15.8203H3.93152C3.79166 15.8203 3.65753 15.7647 3.55863 15.6658C3.45973 15.5669 3.40417 15.4328 3.40417 15.2929V5.29346C3.40417 5.1536 3.45973 5.01946 3.55863 4.92057C3.65753 4.82167 3.79166 4.76611 3.93152 4.76611H13.1073C13.2472 4.76611 13.3813 4.82167 13.4802 4.92057C13.5791 5.01946 13.6346 5.1536 13.6346 5.29346V15.2929C13.6346 15.4328 13.5791 15.5669 13.4802 15.6658C13.3813 15.7647 13.2472 15.8203 13.1073 15.8203ZM4.45886 14.7656H12.58V5.8208H4.45886V14.7656Z" fill="#fff"/>
            <path d="M10.5757 7.66402C10.4358 7.66402 10.3017 7.60846 10.2028 7.50957C10.1039 7.41067 10.0483 7.27654 10.0483 7.13668V4.27145C10.0398 3.87153 9.87488 3.49088 9.58901 3.21108C9.30315 2.93128 8.91905 2.77459 8.51904 2.77459C8.11903 2.77459 7.73494 2.93128 7.44907 3.21108C7.16321 3.49088 6.99832 3.87153 6.98975 4.27145V7.13668C6.98975 7.27654 6.93419 7.41067 6.83529 7.50957C6.73639 7.60846 6.60226 7.66402 6.4624 7.66402C6.32254 7.66402 6.18841 7.60846 6.08951 7.50957C5.99062 7.41067 5.93506 7.27654 5.93506 7.13668V4.27145C5.94624 3.59351 6.2234 2.94713 6.70677 2.47166C7.19015 1.9962 7.84102 1.72974 8.51904 1.72974C9.19707 1.72974 9.84794 1.9962 10.3313 2.47166C10.8147 2.94713 11.0918 3.59351 11.103 4.27145V7.13668C11.103 7.27654 11.0475 7.41067 10.9486 7.50957C10.8497 7.60846 10.7155 7.66402 10.5757 7.66402Z" fill="#fff"/>
        </svg>
    )


    return (
        <div className={styles.parent}>
            <h1>iPhone</h1>
            <div className={styles.block}>
                <div className={styles['block_container']}>
                    {iphone.map((product, index) => (
                        <div className={styles['block_container_content']}>
                            <NavLink to={`/iphone/${product.id}`}>
                                <img src={product.image} className={styles['block_container_content_in_img']}
                                     alt=""
                                />
                            </NavLink>
                            <div className={styles['block_container_content_title']}>
                                <NavLink to={`/iphone/${product.id}`}>
                                    <h5 className={styles['block_container_content_title_paragraph']}>
                                        {product.name}
                                    </h5>
                                </NavLink>
                                <NavLink to={`/iphone/${product.id}`} className={styles['block_container_content_title_link']}>
                                    <span>{cartSvg}Choose</span>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IPhoneCards;