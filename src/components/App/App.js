import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        } ,
        {
            path: "/store",
            element: <StorePage/>,
        },
        {
            path: "/mac",
            element: <MacPage/>,
        },
        {
            path: "/ipad",
            element: <IPadPage/>,
        },
        {
            path: "/iphone",
            element: <IPhonePage/>,
        },
        {
            path: "/apple_watch",
            element: <AppleWatchPage/>,
        },
        {
            path: "/vision",
            element: <VisionPage/>,
        },
        {
            path: "/airpods",
            element: <AirPodsPage/>,
        },
        {
            path: "/tv&home",
            element: <TvHomePage/>,
        },
        {
            path: "/accessories",
            element: <AccessoriesPage/>,
        },
        {
            path: "/support",
            element: <SupportPage/>,
        },
        {
            path: "/search",
            element: <SearchBarPage/>,
        },
        {
            path: "/basket",
            element: <BasketPage/>,
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
