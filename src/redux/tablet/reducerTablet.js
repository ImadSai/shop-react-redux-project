import { BUY_TABLET } from "./type"

const initialStateTablet = {
    tablet: 12
}

const tabletReducer = (state = initialStateTablet, action) => {
    if (action.type === BUY_TABLET) {
        return {
            ...state,
            tablet: state.tablet - 1
        }
    }

    return state;
};

export default tabletReducer;