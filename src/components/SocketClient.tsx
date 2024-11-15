"use client";

import React from "react";
import { toast } from "react-toastify";
import { useSocket } from "@/hooks/hooks";

interface SocketClientProps {
    page: number;
}

const SocketClient: React.FC<SocketClientProps> = ({ page }) => {
    const handleNewPost = React.useCallback(() => {
        toast("New post!");
        if (page === 1) {
            window.location.reload();
        }
    }, [page]);

    useSocket("newPost", handleNewPost);

    return null;
};

export default SocketClient;