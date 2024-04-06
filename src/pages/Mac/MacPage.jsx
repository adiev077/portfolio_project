import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./MacPage.module.scss";
import MacCardsBlock from "./MacCards/MacCardsBlock";

function MacPage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <MacCardsBlock/>
            <Footer/>
        </div>
    );
}

export default MacPage;