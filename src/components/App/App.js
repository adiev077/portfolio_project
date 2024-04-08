import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // Изменение импорта на createHashRouter
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
import CartPage from "../../pages/CartPage/CartPage";
import IphoneDetail from "../IPhoneList/iphoneDetail/IphoneDetail";

function App() {
    const router = createHashRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
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
            path: "/iphone/:id",
            element: <IphoneDetail/>,
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
            path: "/cart",
            element: <CartPage/>,
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;

