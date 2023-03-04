import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Routes, Route, Link, Navigate} from "react-router-dom";
import './styles/App.css';
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from './Components/AppRouter';
import {AuthContext} from "../src/context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect ( () => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    },[] )

    return (
        <AuthContext.Provider value = {{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;