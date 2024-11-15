import React from 'react';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {MyExhibit} from "@/common/types/exhibit/myExhibit.type";
import {PostController} from "@/components/PostController";
import {StoreProvider} from "@/components/StoreProvider";

type PostProps = {
    exhibit: MyExhibit;
};

const Post: React.FC<PostProps> = ({exhibit}) => {
    return (
        <Card variant="outlined" sx={{mb: 2, pb: 2, pt:4, px:6, width: 1000, maxWidth: 800}}>
            <Typography variant="body1"  sx={{mb:3}}>
                {exhibit.user.username} - {new Date(exhibit.createdAt).toLocaleString()}
            </Typography>
            <CardMedia
                component="img"
                height="500"
                image={'http://ec2-13-49-67-34.eu-north-1.compute.amazonaws.com' + exhibit.imageUrl}
                alt={exhibit.description}
                sx={{objectFit: "contain"}}
            />
            <CardContent>
                <Typography variant="body1" gutterBottom>{exhibit.description}</Typography>
            </CardContent>
            <StoreProvider>
                <PostController postId={exhibit.id} authorId={exhibit.user.id}/>
            </StoreProvider>
        </Card>
    );
};

export default Post;