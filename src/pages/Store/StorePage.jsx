import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from './StorePage.module.scss'
import PromoBlock from "./PromoBlock/PromoBlock";
import MacSwipper from "./MacSwipper/MacSwipper";
import ScrollBar from "../Home/ScrollBar/ScrollBar";

function StorePage(props) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Header/>
            </header>
            <PromoBlock/>
            <MacSwipper/>
            <ScrollBar/>
            <Footer/>
        </div>
    );
}

export default StorePage;