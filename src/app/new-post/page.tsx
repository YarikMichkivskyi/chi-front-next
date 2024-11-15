'use client';

import React from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";
import NewPost from "@/components/pages/NewPost.page";
import {Provider} from "react-redux";
import {store} from "@/store/store";

const NewPostRoute = () => {
    return (
        <Provider store={store}>
            <ProtectedRoute>
                <NewPost/>
            </ProtectedRoute>
        </Provider>
    );
};

export default NewPostRoute;