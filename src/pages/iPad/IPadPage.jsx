import React from 'react';
import Header from "../../components/header/Header";
import styles from "./IPadPage.module.scss";
import Footer from "../../components/footer/Footer";
import IPadCards from "./IPadCards/IPadCards";

function IPadPage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <IPadCards/>
            <Footer/>
        </div>
    );
}

export default IPadPage;