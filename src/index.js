import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HomePage/>
        </BrowserRouter>
    </React.StrictMode>,
    root
)