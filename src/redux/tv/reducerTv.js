import { BUY_TV } from "./type"

const initialStateTv = {
    tv: 10
}

const tvReducer = (state = initialStateTv, action) => {
    if (action.type === BUY_TV) {
        return {
            ...state,
            tv: state.tv - 1
        }
    }

    return state;
};

export default tvReducer;