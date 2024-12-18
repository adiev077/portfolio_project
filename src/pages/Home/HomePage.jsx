import React from 'react';
import Header from "../../components/header/Header";
import PromoSwipper from "./PromoSwipper/PromoSwipper";
import CardBlocks from "./CardBlocks/CardBlocks";
import ScrollBar from "./ScrollBar/ScrollBar";
import IphoneCards from "./IphoneCards/IphoneCards";
import GarminCards from "./GarminiCards/GarminCards";
import styles from './HomePage.module.scss';
import MacCards from "./MacCards/MacCards";
import Footer from "../../components/footer/Footer";

function HomePage() {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div style={{ paddingTop: 54}}>
                <PromoSwipper/>
                <CardBlocks/>
                <ScrollBar/>
                <IphoneCards/>
                <GarminCards/>
                <MacCards/>
                <Footer/>
            </div>
        </div>
    );
}

export default HomePage;
