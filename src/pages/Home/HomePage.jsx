import React from 'react';
import Header from "../../components/header/Header";
import MySwiper from "./MySwipper/MySwipper";
import CardBlocks from "./CardBlocks/CardBlocks";
import ScrollBar from "./ScrollBar/ScrollBar";

function HomePage() {

    return (
        <div>
            <Header/>
            <MySwiper/>
            <CardBlocks/>
            <ScrollBar/>
        </div>
    );
}

export default HomePage;
