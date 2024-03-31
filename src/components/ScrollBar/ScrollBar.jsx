import React from 'react';
import styles from './ScrollBar.module.scss';
import {CARD_CATALOG_API} from "../CatalogAPI/CatalogAPI.jsx";

function ScrollBar(props) {

    return (
        <div className={styles.scrollBar}>
            <div className={styles.slider_container}>
                <div className={styles.slider_container_list}>
                    {CARD_CATALOG_API.map((product, index) => (
                        <div className={styles.slider_container_list_slide} key={index}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScrollBar;
