'use client';

import React from 'react';
import LoginPage from "@/components/pages/Login.page";
import {Provider} from "react-redux";
import {store} from "@/store/store";

const LoginRoute = () => {
    return (
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );
};

export default LoginRoute;