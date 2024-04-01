import React from 'react';
import styles from './Footer.module.scss';
import logo from './../../assets/images/footer_logo.png';
import instagram from './../../assets/images/footer-instagram.svg';
import facebook from './../../assets/images/footer-facebook.svg';
import youtube from './../../assets/images/footer-youtube.svg';
import {Link, NavLink} from "react-router-dom";
import clsx from "clsx";

function Footer(props) {

    return (
        <footer>
            <div className={styles.footerBlock}>
                <div className={styles['footer_wrap']}>
                    <div className={styles['footer_wrap_content']}>
                        <div className={styles['footer_wrap_content_logo']}>
                            <div className={styles['footer_wrap_content_logo_img']}>
                                <img className={styles['footer_wrap_content_logo_img_i']} src={logo} alt=""/>
                            </div>
                            <p className={styles['footer_wrap_content_logo_paragraph']}>
                                Apple hardware store in Bishkek
                            </p>
                        </div>
                        <div className={styles['footer_wrap_content_links']}>
                            <Link className={styles["link"]} to="#">
                                <img
                                    className={styles["footer_wrap_content_links-img"]}
                                    src={instagram}
                                    alt=""
                                />
                            </Link>
                            <Link className={styles["link"]} to="#">
                                <img
                                    className={styles["footer_wrap_content_links-img"]}
                                    src={facebook}
                                    alt=""
                                />
                            </Link>
                            <Link className={styles["link"]} to="#">
                                <img
                                    className={styles["footer_wrap_content_links-img"]}
                                    src={youtube}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <h6 className={styles['footer_wrap_content_title']}>
                            Operating mode
                        </h6>
                        <p className={styles['footer_wrap_content_paragraph']}>Mon - Sun 10:00 - 20:00</p>
                    </div>
                    <nav className={styles.navBar}>
                        <div className={clsx(styles['navBar_products'], styles['general-padding'])}>
                            <h6 className={styles['navBar_products_title']}>
                                Products
                            </h6>
                            <ul className={styles['navBar_products_list']}>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/mac' className={styles['navBar_products_list_item_link']}>
                                        Mac
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/ipad' className={styles['navBar_products_list_item_link']}>
                                        iPad
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/iphone' className={styles['navBar_products_list_item_link']}>
                                        iPhone
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/apple_watch' className={styles['navBar_products_list_item_link']}>
                                        Watch
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/airpods' className={styles['navBar_products_list_item_link']}>
                                        AirPods
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/accessories' className={styles['navBar_products_list_item_link']}>
                                        Accessories
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={clsx(styles['navBar_about'], styles['general-padding'])}>
                            <h6 className={styles['navBar_products_title']}>
                                10 years with you!
                            </h6>
                            <ul className={styles['navBar_products_list']}>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/support' className={styles['navBar_products_list_item_link']}>
                                        About us
                                    </NavLink>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <NavLink to='/support' className={styles['navBar_products_list_item_link']}>
                                        Feedback
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={clsx(styles['navBar_contacts'], styles['general-padding'])}>
                            <h6 className={styles['navBar_products_title']}>
                                Contacts
                            </h6>
                            <ul className={styles['navBar_products_list']}>
                                <li className={styles['navBar_products_list_item']}>
                                    <p className={styles['navBar_products_list_item_p']}>40 Manas Ave</p>
                                    <p className={styles['navBar_products_list_item_p']}>(Kievskaya Street lane)</p>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <p className={styles['navBar_products_list_item_p']}>+996 (555) 802 000</p>
                                    <p className={styles['navBar_products_list_item_p']}>+996 (505) 802 000</p>
                                </li>
                                <li className={styles['navBar_products_list_item']}>
                                    <p className={styles['navBar_products_list_item_p']}>office@istore.kg</p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles['block_in']}>
                    <div className={styles['block_in_links']}>
                        <p className={styles['block_in_links_p']}>Copyright 2013-2023 istore.kg all rights reserved</p>
                        <p className={styles['block_in_links_p']}>
                            made in
                            <span className={styles['block_in_links_p_span']}>MOORE STUDIO</span>
                        </p>
                        <p className={styles['block_in_links_p']}>Privacy policy</p>
                        <p className={styles['block_in_links_p']}>User agreement</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;