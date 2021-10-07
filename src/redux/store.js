import { applyMiddleware, createStore } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import tabletReducer from "./tablet/reducerTablet";
import commentsReducer from "./comments/reducerComments";
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';


// Create combined reducers
const combinedReducers = combineReducers({
    phoneReducer,
    tvReducer,
    tabletReducer,
    commentsReducer
});

// Crete Store with combined reducers
const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;