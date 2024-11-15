'use client'

import {Box, Button} from "@mui/material";
import React, {useState} from "react";
import CommentList from "@/components/CommentList";
import {useRequest} from "ahooks";
import {deleteExhibit} from "@/api/actions/exhibit.api";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import { RootState } from "@/common/types/types";

export const PostController = ({postId, authorId}:{postId:number, authorId:number})=>{
    const [showComments, setShowComments] = useState(false);
    const userId = useSelector((state: RootState) => state.userData.id)


    const { run: handleDelete } = useRequest(() => deleteExhibit(postId.toString()), {
        manual: true,
        onSuccess: () => {
            toast.success('Exhibit deleted successfully.');
            window.location.reload();
        },
        onError: (error: any) => {
            toast.error(`Error deleting exhibit: ${error.message}`);
        },
    });

    return(
        <>
            <Box display="flex" justifyContent="space-between">
                <Button variant="outlined" color="primary" onClick={() => setShowComments(!showComments)}>
                    Comments
                </Button>
                {userId===authorId && <Button variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>}
            </Box>
            <CommentList exhibitId={postId} isOpen={showComments}/>
        </>
    )
}