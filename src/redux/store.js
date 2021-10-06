import { createStore } from "redux";
import phoneReducer from "./phone/reducerPhone";
import tvReducer from "./tv/reducerTv";
import tabletReducer from "./tablet/reducerTablet";
import { combineReducers } from 'redux'


// Create combined reducers
const combinedReducers = combineReducers({
    phoneReducer,
    tvReducer,
    tabletReducer
});

// Crete Store with combined reducers
const store = createStore(combinedReducers);

export default store;