import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsReducer from './posts-reducer'


let reducers = combineReducers({
    content: postsReducer,
});

let store = configureStore({
    reducer: reducers
});


export default store;