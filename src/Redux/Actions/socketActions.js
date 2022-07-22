import socketIo from "socket.io-client";

export const socketActions = () => (dispatch) => {
    const socket = socketIo("http://localhost:5000");

    if (socket) {
        dispatch({type: 'SOCKET_CONNECT', payload: socket})
    }
}
