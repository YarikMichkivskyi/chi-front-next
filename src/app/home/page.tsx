'use client';

import React from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";
import HomePage from "@/components/pages/Home.page";
import {useSearchParams} from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/store/store";

const HomeRoute: React.FC = () => {

    const searchParams = useSearchParams()
    const page = Number(searchParams.get("page"))||1;

    return (
        <Provider store={store}>
            <ProtectedRoute>
                <HomePage page={page}/>
            </ProtectedRoute>
        </Provider>
    );
};

export default HomeRoute;