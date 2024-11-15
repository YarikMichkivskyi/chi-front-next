'use client';

import React from 'react';
import Register from "@/components/pages/Register.page";
import {Provider} from "react-redux";
import {store} from "@/store/store";

const RegisterRoute = () => {
    return (
        <Provider store={store}>
            <Register/>
        </Provider>
    );
};

export default RegisterRoute;