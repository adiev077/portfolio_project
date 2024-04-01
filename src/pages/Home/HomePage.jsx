import React from 'react';
import Header from "../../components/header/Header";
import MySwiper from "./MySwipper/MySwipper";
import CardBlocks from "./CardBlocks/CardBlocks";
import ScrollBar from "./ScrollBar/ScrollBar";
import IphoneCards from "./IphoneCards/IphoneCards";
import GarminCards from "./GarminiCards/GarminCards";

function HomePage() {

    return (
        <div>
            <Header/>
            <MySwiper/>
            <CardBlocks/>
            <ScrollBar/>
            <IphoneCards/>
            <GarminCards/>
        </div>
    );
}

export default HomePage;
