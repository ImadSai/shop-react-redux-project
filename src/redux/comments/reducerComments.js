import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";

const initialStateComments = {
    isLoading: false,
    comments: [],
    error: ''
}

const commentsReducer = (state = initialStateComments, action) => {

    if (action.type === LOAD_COMMENTS) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === LOAD_COMMENTS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            comments: state.comments.concat(action.payload),
            error: ''
        }
    }

    if (action.type === LOAD_COMMENTS_ERROR) {
        return {
            ...state,
            isLoading: false,
            comments: [],
            error: action.payload
        }
    }

    return state;
};

export default commentsReducer;