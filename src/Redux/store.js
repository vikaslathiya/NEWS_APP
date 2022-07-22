import {combineReducers,applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage';
import {SocketReducer} from "./Reducers/socketReducers";
import persistReducer from "redux-persist/es/persistReducer";
import {persistStore} from "redux-persist";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    socket: SocketReducer,
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'socket',
    ]
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store);
export default store;
