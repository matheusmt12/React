import { resetMessage } from "../slices/photoSlice";

export const useReseteMessagePhoto = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000)
    };
};