import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";
import axios from 'axios';

export const loadComments = () => {
    return {
        type: LOAD_COMMENTS
    }
};

export const loadCommentsSuccess = (comments) => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
};

export const loadCommentsError = (error) => {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
};

export const apiCall = () => {

    return dispatch => {

        dispatch(loadComments());

        axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
            setTimeout(() => {
                dispatch(loadCommentsSuccess(response.data));
            }, 3000);
        }).catch(error => {
            dispatch(loadCommentsError(error.message));
        });
    };

};

