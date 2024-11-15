import {useEffect} from "react";
import {connectToSocket} from "@/api/socket/socket";

const useSocket = (event: string, callback: () => void) => {
    useEffect(() => {
        const socket = connectToSocket();
        socket.on(event, callback);

        return () => {
            socket.off(event, callback);
        };
    }, [event, callback]);
};

export { useSocket };