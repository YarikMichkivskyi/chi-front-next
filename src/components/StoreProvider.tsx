"use client";

import {store} from "@/store/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface Props {
    readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {

    useEffect(() => {
        return setupListeners(store.dispatch)
    }, []);

    return <Provider store={store}>{children}</Provider>;
};