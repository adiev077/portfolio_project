import React from 'react';
import {Routes, Route, Navigate, Router, BrowserRouter} from 'react-router-dom';
import HomePage from "../../pages/Home/HomePage";
import StorePage from "../../pages/Store/StorePage";
import MacPage from "../../pages/Mac/MacPage";
import IPhonePage from "../../pages/iPhone/IPhonePage";
import IPadPage from "../../pages/iPad/IPadPage";
import AppleWatchPage from "../../pages/AppleWatch/AppleWatchPage";
import VisionPage from "../../pages/Vision/VisionPage";
import AirPodsPage from "../../pages/AirPods/AirPodsPage";
import TvHomePage from "../../pages/TvHome/TvHomePage";
import AccessoriesPage from "../../pages/Accessories/AccessoriesPage";
import SupportPage from "../../pages/Support/SupportPage";
import SearchBarPage from "../../pages/SearchBar/SearchBarPage";
import BasketPage from "../../pages/BasketPage/BasketPage";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                        <Route path={"/"} element={ <HomePage/> } />
                        <Route path={"/store"} element={<StorePage/>} />
                        <Route path={"/mac"} element={<MacPage />} />
                        <Route path={"/ipad"} element={<IPadPage/>} />
                        <Route path={"/iphone"} element={<IPhonePage />} />
                        <Route path={"/apple_watch"} element={<AppleWatchPage />} />
                        <Route path={"/vision"} element={<VisionPage />} />
                        <Route path={"/airpods"} element={<AirPodsPage />} />
                        <Route path={"/tv&home"} element={<TvHomePage />} />
                        <Route path={"/accessories"} element={<AccessoriesPage />} />
                        <Route path={"/support"} element={<SupportPage />} />
                        <Route path={"/search"} element={<SearchBarPage />} />
                        <Route path={"/basket"} element={<BasketPage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
