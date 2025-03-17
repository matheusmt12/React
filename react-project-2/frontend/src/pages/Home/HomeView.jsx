import './Home.css'
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getAllPhotos , resetMessage } from "../../slices/photoSlice";
import PhotoItemComponent from "../../components/PhotoItemComponent";
import LikeComponent from "../../components/LikeComponent";
import { Link } from "react-router-dom";
import {useLike} from '../../hooks/useLike.jsx';


const HomeView = () => {
  const dispatch = useDispatch();
  const {loading , photos} = useSelector((state) => state.photo);
  const {user} = useSelector((state) => state.auth);
  

  useEffect( () =>{
    dispatch(getAllPhotos())
  },[dispatch])

  const handleLike = (photo = null) =>{
    
    const like = useLike(photo._id,dispatch);
    like();
    resetMessage();
  }
  


  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='home'>
      {photos && photos.map((item) =>(
        <div key={item._id}>
          <PhotoItemComponent photo={item}></PhotoItemComponent>
          <LikeComponent photo={item} user={user} handleLike={handleLike}></LikeComponent>
        </div>
      ))}
      {photos.length === 0 && (
       <div className="no-photos">
        Ainda não ha fotos...
        <Link to={`/users/${user._id}`}>Clique aqui</Link>
       </div>
      )}
    </div>
  )
}

export default HomeView
