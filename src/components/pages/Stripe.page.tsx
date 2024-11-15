import React from 'react';
import {PostsList} from "@/components/PostsList";
import {Typography} from "@mui/material";
import PageFrame from "@/components/PageFrame";
import {getAllExhibits} from "@/api/actions/exhibit.api";
import {AllExhibit, AllExhibitResponse} from '@/common/types/types';
import {AxiosResponse} from "axios";
import SocketClient from "@/components/SocketClient";

const StripePage = async ({page}:{page:number}) => {
    try {
        const response:AxiosResponse<AllExhibitResponse, AllExhibitResponse> = await getAllExhibits(page, 10)
        const data:{data:AllExhibit[], lastPage:number} = response.data;
        return (
            <PageFrame>
                <Typography variant="h4" gutterBottom>All Posts</Typography>
                <PostsList
                    navigationLink={'/'}
                    page={page.toString()}
                    totalPages={data.lastPage}
                    exhibits={data.data}
                />
                <SocketClient page={page} />
            </PageFrame>
        );
    } catch (error) {
        console.log(error)
        return <div>Error</div>
    }
};

export default StripePage;