'use client'

import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import {userActions} from '../store/actions';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../common/types/types";
import {redirect, useRouter} from "next/navigation";

const Header = () => {
    const navigate = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector((state: RootState) => state.userData.username);


    const handleLogout = () => {
        dispatch(userActions.logout());
        redirect('/login');
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>Exhibit App</Typography>

                {username !== null ? (
                    <>
                        <Box display="flex" alignItems="center" ml={3}>
                            <Button
                                color="inherit"
                                onClick={() => navigate.push('/home')}
                                sx={{mr: 1}}
                            >
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate.push('/')}
                                sx={{mr: 1}}
                            >
                                Stripe
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate.push('/new-post')}
                                sx={{mr: 1}}
                            >
                                New Post
                            </Button>
                        </Box>

                        <Box ml="auto" display="flex" alignItems="center">
                            <Typography variant="body1" sx={{mr: 2}}>{username}</Typography>
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        </Box>
                    </>
                ) : (
                    <Box ml="auto">
                        <Button color="inherit" onClick={() => navigate.push('/login')}>Login</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;