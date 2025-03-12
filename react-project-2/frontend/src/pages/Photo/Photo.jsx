import './Photo.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoId ,photoLike} from '../../slices/photoSlice';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PhotoItemComponent from '../../components/PhotoItemComponent';
import LikeComponent from '../../components/LikeComponent';


function Photo() {

    const dispatch = useDispatch();
    const {loading, photo} = useSelector((state) => state.photo);
    const {user} = useSelector((state) => state.auth );

    const {id} = useParams();

    useEffect(() =>{
        dispatch(getPhotoId(id));
    },[dispatch, id])

    
    const handleLike = () =>{

      dispatch(photoLike(id));

    }

    if (loading) {
      return <p>Carregando...</p>
    }
  return (
    <div id='photo'>
      <PhotoItemComponent photo={photo}/>
      <LikeComponent photo={photo} user={user}  handleLike={handleLike} />
    </div>
  )
}

export default Photo
