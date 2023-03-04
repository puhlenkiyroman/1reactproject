import React, {useContext, useState} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context/context"
import Loader from '../Components/UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path = {route.path}
                        exact = {route.exact}
                        key = {route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace />} />)
            </Routes>
            :
            <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path = {route.path}
                    exact = {route.exact}
                />
            )}
            <Route path="/*" element={<Navigate to="/login" replace />} />)
            </Routes>
    );
};

export default AppRouter;