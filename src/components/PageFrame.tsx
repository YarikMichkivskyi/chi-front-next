import React from 'react';
import Header from "./Header";
import {Container} from "@mui/material";
import {StoreProvider} from "@/components/StoreProvider";

const PageFrame = (props: { children?: React.ReactNode }) => {

    return (
        <>
            <StoreProvider>
                <Header/>
            </StoreProvider>
            <Container sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                minHeight: "90vh",
                paddingY: 4,
                marginTop: 8,
            }}>
                {props.children}
            </Container>
        </>
    )
};

export default PageFrame;