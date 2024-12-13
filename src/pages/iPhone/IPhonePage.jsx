import React from 'react';
import Header from "../../components/header/Header";
import IPhoneCards from "../../components/IPhoneList/IPhoneCards";
import styles from './IPhonePage.module.scss'
import Footer from "../../components/footer/Footer";

function IPhonePage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div style={{ paddingTop: 54}}>
                <IPhoneCards/>
                <Footer/>
            </div>
        </div>
    );
}

export default IPhonePage;