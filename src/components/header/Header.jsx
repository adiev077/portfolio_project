import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss';
import appleIcon from './../../assets/icons/apple_icons.svg'

function Header(props) {
    return (
        <nav className={styles.globalNav}>
            <div className={styles['globalNav_content']}>
                <ul className={styles['globalNav_list']}>
                    <li>
                        <NavLink to="/" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.0776 17.28C11.1731 18.23 10.1854 18.08 9.23464 17.63C8.22852 17.17 7.30546 17.15 6.24395 17.63C4.91476 18.25 4.21324 18.07 3.41942 17.28C-1.08508 12.25 -0.42048 4.59 4.69323 4.31C5.93935 4.38 6.80702 5.05 7.53623 5.11C8.62543 4.87 9.66848 4.18 10.8315 4.27C12.2253 4.39 13.2776 4.99 13.9699 6.07C11.09 7.94 11.773 12.05 14.413 13.2C13.8868 14.7 13.2038 16.19 12.0684 17.29L12.0776 17.28ZM7.44392 4.25C7.30546 2.02 8.97619 0.18 10.8961 0C11.1638 2.58 8.73619 4.5 7.44392 4.25Z"
                                    fill="white"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store"
                                 className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Store</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mac"
                                 className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Mac</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ipad"
                                 className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>iPad</NavLink>
                    </li>
                    <li>
                        <NavLink to="/iphone" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>iPhone</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apple_watch" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Apple Watch</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vision" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Vision</NavLink>
                    </li>
                    <li>
                        <NavLink to="/airpods" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>AirPods</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv&home" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>TV & Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/accessories" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/basket" className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Basket</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;