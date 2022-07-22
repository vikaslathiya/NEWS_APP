export const SocketReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SOCKET_CONNECT':
            return {socket: action.payload};
        default:
            return state;
    }
}