import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Messagem from '../../components/MessageComponent.jsx';
import { details } from '../../slices/userSlice.jsx';
import { uploads } from '../../utils/config.jsx';
import { insertPhoto , resetMessage } from '../../slices/photoSlice.jsx';

const Profile = () => {

  const { id } = useParams();

  const { user, loading } = useSelector((state) => state.user);
  const { user: auth } = useSelector((state) => state.auth);
  const { loading: loadingPhoto, photo: newPhoto, errors } = useSelector((state) => state.photo)
  const dispatch = useDispatch();

  //photo

  const newPhotoForm = useRef();
  const editPhotoForm = useRef();


  useEffect(() => {
    dispatch(details(id));
  }, [dispatch], id)


  //submit

  const [titulo, setTitulo] = useState('');
  const [photo, setPhoto] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title : titulo,
      image: photo
    }

    const formData = new FormData();

    // Aqui usamos forEach corretamente
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    

    await dispatch(insertPhoto(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);

  }

  const handleFile = (e) =>{

    const image = e.target.files[0];

    setPhoto(image);

  }



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
      {id == auth._id && <>
        <div className='new-photo' ref={newPhotoForm}>
          <p>Compartilhe algum momento eu:</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título da imagem</span>
              <input type="text" placeholder='Insira um título' value={titulo || ''} onChange={(e) => setTitulo(e.target.value)} />
            </label>
            <label>
              <span>Imagem</span>
              <input type="file" onChange={handleFile} />
            </label>
            <input type="submit" value={'Postar'} />
          </form>
        </div>
      </>}
    </div>
  )
}

export default Profile
