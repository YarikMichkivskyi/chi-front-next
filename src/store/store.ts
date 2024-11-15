import {configureStore} from '@reduxjs/toolkit';
import userApi from '../api/actions/user.api'
import {rootReducer} from "@/store/rootReducer";
import {setupListeners} from "@reduxjs/toolkit/query";

const extraArgument = {
    userApi
};

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument },
            }),
    });

export const store = makeStore();
setupListeners(store.dispatch)
export {extraArgument, makeStore};
