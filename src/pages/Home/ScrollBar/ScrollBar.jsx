import React, { useState, useEffect } from 'react';
import styles from './ScrollBar.module.scss';
import {NavLink} from "react-router-dom";
import image1 from "../../../assets/images/fc_apple_intelligence__dnpeq34arlg2_large_2x.jpg";
import image2 from "../../../assets/images/fc_productivity__d55aee5so6ky_large_2x.jpg";
import image3 from "../../../assets/images/fc_creativity__gcfv7x90x42u_large_2x.jpg";
import image4 from "../../../assets/images/fc_learning__es1tt702bf6u_large_2x.jpg";
import image5 from "../../../assets/images/fc_entertainment__dcynvyyoe7iq_large_2x.jpg";
import image6 from "../../../assets/images/fc_pencil__coz76i7lwsuq_large_2x.jpg";
import image7 from "../../../assets/images/fc_ipados__urrua12bwaqy_large_2x.jpg";


function ScrollBar(props) {

    const [data, setData] = useState([
        { image: image1, id: 1, name: 'Apple Intelligence', description: 'Personal, private, powerful.', link: '' },
        { image: image2, id: 2, name: 'Productivity', description: 'Your workplace, can be any place.', link: '' },
        { image: image3, id: 3, name: 'Creativity', description: 'Take your inner artist, out and about.', link: '' },
        { image: image4, id: 4, name: 'Learning', description: 'Your classroom, can be anywhere.', link: '' },
        { image: image5, id: 5, name: 'Entertainment', description: 'Kick back. Tune in. Game on.', link: '' },
        { image: image6, id: 6, name: 'Apple Pencil', description: 'Dream it up. Jot it down.', link: '' },
        { image: image7, id: 7, name: 'iPadOS + Apps', description: 'Everyday superpowers. Built right in.', link: '' },
    ]);

    return (
        <div className={styles.scrollBar}>
            <div className={styles.slider_container}>
                <div className={styles.slider_container_list}>
                    {data.map((product, index) => (
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
                                        <img src={product.image} alt={product.name}/>
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
