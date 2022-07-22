import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {socketActions} from "./Redux/Actions/socketActions";

const Socket = ({children}) => {
    const [connect, setConnect] = useState(false);
    const dispatch = useDispatch()
    const {socket} = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(socketActions())
    }, [])

    useEffect(() => {
        if (socket?.connect && !connect) {
            setConnect(true)
        } else if (socket?.connect === false && connect) {
            setConnect(false)
        }
    }, [socket])

    return <>{children}</>;
}

export default Socket;