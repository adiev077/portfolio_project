import React, {useEffect, useState} from 'react';
import styles from './MacCardsBlock.module.scss'

function MacCardsBlock(props) {

    const [products, setProducts] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://demo1755075.mockable.io/Mac_page');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Ошибка!!!!!!");
            }
        }
        fetchData();
    }, [])


    return (
        <div className={styles.parent}>
            <h1>Mac</h1>
            <div className={styles.block}>
                <div className={styles['block_container']}>
                    {products.map((product, index) => (
                        <div className={styles['block_container_content']}>
                            <div className={styles['block_container_content_in']}>
                                <img src={product.image} className={styles['block_container_content_in_img']}
                                         alt=""
                                />
                                <p className={styles['block_container_content_in_paragraph']}>
                                    {product.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MacCardsBlock;