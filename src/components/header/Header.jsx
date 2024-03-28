import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss';
function Header(props) {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.block}>
                <p>The products, services and functions of the operating system are available in this section.</p>
            </div>
            <nav className={styles.globalNav}>
                <div className={styles['globalNav_content']}>
                    <ul className={styles['globalNav_list']}>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>
                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0776 17.28C11.1731 18.23 10.1854 18.08 9.23464 17.63C8.22852 17.17 7.30546 17.15 6.24395 17.63C4.91476 18.25 4.21324 18.07 3.41942 17.28C-1.08508 12.25 -0.42048 4.59 4.69323 4.31C5.93935 4.38 6.80702 5.05 7.53623 5.11C8.62543 4.87 9.66848 4.18 10.8315 4.27C12.2253 4.39 13.2776 4.99 13.9699 6.07C11.09 7.94 11.773 12.05 14.413 13.2C13.8868 14.7 13.2038 16.19 12.0684 17.29L12.0776 17.28ZM7.44392 4.25C7.30546 2.02 8.97619 0.18 10.8961 0C11.1638 2.58 8.73619 4.5 7.44392 4.25Z"
                                        fill="#333333"
                                        className={styles['nav_item']} activeClassName={styles.active}
                                    />
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
                            <NavLink to="/iphone"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>iPhone</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apple_watch"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Apple
                                Watch</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vision"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Vision</NavLink>
                        </li>
                        <li>
                            <NavLink to="/airpods"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>AirPods</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv&home"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>TV
                                & Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/accessories"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Accessories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>Support</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>
                                <svg width="18" height="18" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M11.4494 9.02057C12.2287 8.01579 12.5961 6.75184 12.4766 5.48586C12.3571 4.21987 11.7598 3.04696 10.8062 2.20573C9.85265 1.3645 8.61441 0.918143 7.34341 0.957473C6.07241 0.996803 4.86413 1.51886 3.96438 2.41744C3.06386 3.31665 2.54009 4.52539 2.49982 5.79736C2.45955 7.06932 2.90581 8.30878 3.74765 9.26315C4.5895 10.2175 5.76357 10.815 7.03062 10.9337C8.29766 11.0525 9.56233 10.6837 10.5669 9.90244L10.5938 9.93057L13.245 12.5824C13.3031 12.6405 13.372 12.6866 13.4479 12.718C13.5238 12.7494 13.6051 12.7656 13.6872 12.7656C13.7693 12.7656 13.8506 12.7494 13.9265 12.718C14.0024 12.6866 14.0713 12.6405 14.1294 12.5824C14.1875 12.5244 14.2335 12.4554 14.2649 12.3796C14.2964 12.3037 14.3125 12.2224 14.3125 12.1403C14.3125 12.0581 14.2964 11.9768 14.2649 11.9009C14.2335 11.8251 14.1875 11.7561 14.1294 11.6981L11.4775 9.04682C11.4684 9.03781 11.459 9.02906 11.4494 9.02057ZM10.1519 3.30182C10.5048 3.64899 10.7854 4.0626 10.9776 4.51878C11.1699 4.97496 11.2699 5.46468 11.2719 5.95971C11.2739 6.45473 11.1779 6.94525 10.9894 7.40298C10.8009 7.86071 10.5236 8.27659 10.1736 8.62663C9.82353 8.97666 9.40765 9.25393 8.94992 9.44244C8.49219 9.63095 8.00167 9.72696 7.50665 9.72494C7.01162 9.72293 6.5219 9.62292 6.06572 9.43069C5.60954 9.23847 5.19593 8.95782 4.84876 8.60494C4.15496 7.89975 3.76792 6.94897 3.77195 5.95971C3.77598 4.97044 4.17075 4.02285 4.87027 3.32332C5.56979 2.6238 6.51738 2.22903 7.50665 2.22501C8.49591 2.22098 9.44669 2.60802 10.1519 3.30182Z"
                                          fill="#333333"
                                          className={styles['nav_item']} activeClassName={styles.active}
                                    />
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/basket"
                                     className={({isActive}) => `${styles['nav_item']} ${isActive ? styles.active : ""}`}>
                                <svg width="20" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.1073 15.8203H3.93152C3.79166 15.8203 3.65753 15.7647 3.55863 15.6658C3.45973 15.5669 3.40417 15.4328 3.40417 15.2929V5.29346C3.40417 5.1536 3.45973 5.01946 3.55863 4.92057C3.65753 4.82167 3.79166 4.76611 3.93152 4.76611H13.1073C13.2472 4.76611 13.3813 4.82167 13.4802 4.92057C13.5791 5.01946 13.6346 5.1536 13.6346 5.29346V15.2929C13.6346 15.4328 13.5791 15.5669 13.4802 15.6658C13.3813 15.7647 13.2472 15.8203 13.1073 15.8203ZM4.45886 14.7656H12.58V5.8208H4.45886V14.7656Z"
                                        fill="#333333"/>
                                    <path
                                        d="M10.5757 7.66402C10.4358 7.66402 10.3017 7.60846 10.2028 7.50957C10.1039 7.41067 10.0483 7.27654 10.0483 7.13668V4.27145C10.0398 3.87153 9.87488 3.49088 9.58901 3.21108C9.30315 2.93128 8.91905 2.77459 8.51904 2.77459C8.11903 2.77459 7.73494 2.93128 7.44907 3.21108C7.16321 3.49088 6.99832 3.87153 6.98975 4.27145V7.13668C6.98975 7.27654 6.93419 7.41067 6.83529 7.50957C6.73639 7.60846 6.60226 7.66402 6.4624 7.66402C6.32254 7.66402 6.18841 7.60846 6.08951 7.50957C5.99062 7.41067 5.93506 7.27654 5.93506 7.13668V4.27145C5.94624 3.59351 6.2234 2.94713 6.70677 2.47166C7.19015 1.9962 7.84102 1.72974 8.51904 1.72974C9.19707 1.72974 9.84794 1.9962 10.3313 2.47166C10.8147 2.94713 11.0918 3.59351 11.103 4.27145V7.13668C11.103 7.27654 11.0475 7.41067 10.9486 7.50957C10.8497 7.60846 10.7155 7.66402 10.5757 7.66402Z"
                                        fill="#333333"
                                        className={styles['nav_item']} activeClassName={styles.active}
                                    />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;