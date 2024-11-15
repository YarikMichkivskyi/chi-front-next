'use client'

import React from 'react';
import {Link, Pagination, PaginationItem} from '@mui/material';

type PaginationProps = {
    count: number;
    page: number;
    navigationLink: string;
};

const Paginator = ({count, page, navigationLink}: PaginationProps) => {
    return (
        <Pagination
            count={count} page={page}
            renderItem={(item) => {
                return (
                    <Link href={`${navigationLink}?page=${item.page}`}>
                        <PaginationItem {...item}/>
                    </Link>
                )
            }}
        />
    )
};

export default Paginator;