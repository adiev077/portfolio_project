import React, { useState, useEffect } from 'react';
import styles from './ScrollBar.module.scss';
import {NavLink} from "react-router-dom";

function ScrollBar(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo1755075.mockable.io/cardBlocks');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.scrollBar}>
            <div className={styles.slider_container}>
                <div className={styles.slider_container_list}>
                    {products.map((product, index) => (
                        <NavLink to={product.link} className={styles.slider_container_list_slide} key={index}>
                            <div className={styles.slider_container_list_slide_card}>
                                <div className={styles.slider_container_list_slide_card_content}>
                                    <div className={styles.slider_container_list_slide_card_content_text}>
                                        <h6 className={styles.slider_container_list_slide_card_content_text_title}>
                                            {product.name}
                                        </h6>
                                        <p className={styles.slider_container_list_slide_card_content_text_paragraph}>
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className={styles.slider_container_list_slide_card_content_bg}>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScrollBar;
