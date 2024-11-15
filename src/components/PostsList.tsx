import {Box} from "@mui/material";
import Post from "./Post";
import Paginator from "./Paginator";
import React from "react";
import {MyExhibit, AllExhibit} from "../common/types/types";

interface PostsListProps {
    exhibits: MyExhibit[] | AllExhibit[];
    page: string;
    totalPages: number;
    navigationLink:string
}

export const PostsList: React.FC<PostsListProps> = ({exhibits, page, totalPages, navigationLink}) => {

    return (
        <>
            <Box display="flex" justifyContent="center" mt={2} mb={4}>
                <Paginator count={totalPages} page={Number(page)} navigationLink={navigationLink}/>
            </Box>
            <Box>
                {
                    exhibits.map((post) => (
                        <Post exhibit={post} key={`post ${post.id}`}/>
                    ))
                }
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
                <Paginator count={totalPages} page={Number(page)} navigationLink={navigationLink}/>
            </Box>
        </>
    );
};