import { BUY_TV } from "./type";

export const buyTv = (desiredTvs) => {
    return {
        type: BUY_TV,
        desiredTvs
    }
};

