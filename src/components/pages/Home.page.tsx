import React, {useEffect} from 'react';
import {Typography} from '@mui/material';
import {PostsList} from "@/components/PostsList";
import PageFrame from "@/components/PageFrame";
import {MyExhibit} from "@/common/types/exhibit/myExhibit.type";
import {getMyExhibits} from "@/api/actions/exhibit.api";

const HomePage = ({page}: { page: number }) => {

    console.log('6  home load')
    const [data, setData] = React.useState<{ data: MyExhibit[], lastPage: number }>({
        data: [],
        lastPage: 0,
    });

    useEffect(() => {
        console.log('7 useEffect get exhibits')
        getMyExhibits(page, 10).then((resp) => {
            console.log('8 get exhibits success')
            setData(resp.data);
        });
    }, [])

    return (
        <PageFrame>
            <Typography variant="h4" gutterBottom>All Posts</Typography>
            <PostsList
                navigationLink={'/home'}
                page={page.toString()}
                totalPages={data.lastPage}
                exhibits={data.data}
            />
        </PageFrame>
    );
};

export default HomePage;