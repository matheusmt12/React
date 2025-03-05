import './Profile.css';
import {useDispatch, useSelector} from 'react-redux';
import {BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { Link , useParams} from 'react-router-dom';
import { useEffect, useState , useRef} from 'react';
import Messagem from '../../components/MessageComponent.jsx';
import {details } from '../../slices/userSlice.jsx';
import { uploads } from '../../utils/config.jsx';

const Profile = () => {

  const {id} = useParams();

  const {user , loading} = useSelector((state) => state.user);
  const {user : auth} = useSelector((state) =>state.auth);
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(details(id));
  },[ dispatch], id)
  
  console.log(user.name);
  
if (loading) {
  return <p>Carregando ...</p>
}

  return (
    <div id='profile'>
      <div className="profile-header">
        {user.profileImg && 
          (<img src={`${uploads}/users/${user.profileImg}`} alt={user.name} />)
        }
        <div id='profile-description'>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
