import { BUY_PHONE } from "./type"

const initialStatePhone = {
    phones: 5
}

const phoneReducer = (state = initialStatePhone, action) => {
    if (action.type === BUY_PHONE) {
        return {
            ...state,
            phones: state.phones - 1
        }
    }

    return state;
};

export default phoneReducer;