import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import AuthContextProvider from "./context/authContextProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
           <App />
        </AuthContextProvider>
    </BrowserRouter>
);
