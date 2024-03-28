import React from 'react';
import styles from './CardBlocks.module.scss'
import {Link} from "react-router-dom";

function CardBlocks(props) {
    return (
        <div className={styles["product_catalog"]}>
            <div className={styles.catalog}>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>MacBook Air "15.3"</p>
                                <p className={styles['card_text_p']}>Amazingly thin and fast.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className="image">
                            <img src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/MacBook.png?updatedAt=1711639027129" alt=""/>
                            </div>
                            <Link to="/" className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>Pitaka</p>
                                <p className={styles['card_text_p']}>Discounts on Pitaka cases!</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className={styles["card_image"]}>
                                <div className="image">
                                    <img
                                        src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/iPhone.png?updatedAt=1711639026562"
                                        alt=""/>
                                </div>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>AppleWatch Ultra</p>
                                <p className={styles['card_text_p']}>Adventures await.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/AppleWatch.png?updatedAt=1711639027142"
                                    alt=""/>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>Apple TV 4K</p>
                                <p className={styles['card_text_p']}>Cinematic in every sense.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/AppleTv.png?updatedAt=1711643915577"
                                    alt=""/>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>HomePod</p>
                                <p className={styles['card_text_p']}>Deep sounding.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/HomePod.png?updatedAt=1711644554811"
                                    alt=""/>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>HomePod</p>
                                <p className={styles['card_text_p']}>Deep sounding.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className={styles["image"]}>
                                <img
                                    src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/AirTag.png?updatedAt=1711639026259"
                                    alt=""/>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['card']}>
                        <div className={styles["card_text"]}>
                            <div className="text">
                                <p className={styles['card_text_head']}>HomePod</p>
                                <p className={styles['card_text_p']}>Deep sounding.</p>
                            </div>
                        </div>
                        <div className={styles.cardBtnImg}>
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/kvsf72hfx/ProductBlocks/AirpodsMax.png?updatedAt=1711639026348"
                                    alt=""/>
                            </div>
                            <Link to='/' className={styles['cardBtnImg_btn']}>
                                Choose
                                <svg width="11" height="14" viewBox="0 0 14 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.2925 5.25118L4.41613 1.60056C4.33476 1.53961 4.22666 1.50562 4.11425 1.50562C4.00184 1.50562 3.89374 1.53961 3.81238 1.60056L3.80713 1.60468C3.76754 1.63422 3.73603 1.66979 3.71449 1.7092C3.69295 1.74862 3.68185 1.79107 3.68185 1.83396C3.68185 1.87686 3.69295 1.9193 3.71449 1.95872C3.73603 1.99814 3.76754 2.0337 3.80713 2.06324L8.39913 5.50074L3.80713 8.93687C3.76754 8.96641 3.73603 9.00197 3.71449 9.04139C3.69295 9.08081 3.68185 9.12325 3.68185 9.16615C3.68185 9.20904 3.69295 9.25149 3.71449 9.29091C3.73603 9.33032 3.76754 9.36589 3.80713 9.39543L3.81238 9.39956C3.89374 9.4605 4.00184 9.4945 4.11425 9.4945C4.22666 9.4945 4.33476 9.4605 4.41613 9.39956L9.2925 5.74893C9.33539 5.71683 9.36953 5.67821 9.39286 5.63543C9.41618 5.59265 9.42821 5.5466 9.42821 5.50006C9.42821 5.45351 9.41618 5.40746 9.39286 5.36468C9.36953 5.3219 9.33539 5.28329 9.2925 5.25118Z"
                                        fill="#5E8BCE"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default CardBlocks;