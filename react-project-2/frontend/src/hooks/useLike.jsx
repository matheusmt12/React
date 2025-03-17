import { photoLike } from "../slices/photoSlice";

export const useLike = (id, dispatch) => {
    return () => {        
        dispatch(photoLike(id));
    }
}