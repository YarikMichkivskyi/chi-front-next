import React from 'react';
import {redirect} from "next/navigation";
import { RootState } from '@/common/types/types';
import {useSelector} from "react-redux";

const ProtectedRoute = ({ children}: { children: React.ReactNode}) => {
    const userId = useSelector((state:RootState) => state.userData.id);
    return userId ? <>{children}</> :redirect('/login');
};

export default ProtectedRoute;