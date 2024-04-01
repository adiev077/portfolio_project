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
            <Header/>
            <PromoSwipper/>
            <CardBlocks/>
            <ScrollBar/>
            <IphoneCards/>
            <GarminCards/>
            <MacCards/>
            <Footer/>
        </div>
    );
}

export default HomePage;
