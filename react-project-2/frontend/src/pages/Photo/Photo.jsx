import './Photo.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoId } from '../../slices/photoSlice';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function Photo() {

    const dispatch = useDispatch();
    const {loading, photo} = useSelector((state) => state.photo);

    const {id} = useParams();

    useEffect(() =>{
        dispatch(getPhotoId(id));
    },[dispatch, id])

    console.log(photo);
    
  return (
    <div>
      div photo
    </div>
  )
}

export default Photo
