import React from 'react';
import Header from "../../components/header/Header";
import MySwiper from "../../components/MySwipper/MySwipper";
import CardBlocks from "../../components/CatalogBlocks/CardBlocks";

function HomePage() {

    return (
        <div>
            <Header/>
            <MySwiper/>
            <CardBlocks/>
        </div>
    );
}

export default HomePage;
