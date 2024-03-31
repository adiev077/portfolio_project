import React from 'react';
import Header from "../../components/header/Header";
import MySwiper from "../../components/MySwipper/MySwipper";
import CardBlocks from "../../components/CardBlocks/CardBlocks";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

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
