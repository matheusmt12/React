import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { details } from '../../slices/userSlice.jsx';
import { uploads } from '../../utils/config.jsx';
import MessageComponent from '../../components/MessageComponent.jsx';

import { insertPhoto, resetMessage, getAllPhotosUser, deletePhoto } from '../../slices/photoSlice.jsx';


const Profile = () => {

  const { id } = useParams();

  //selector
  const { user, loading } = useSelector((state) => state.user);
  const { user: auth } = useSelector((state) => state.auth);
  const { loading: loadingPhoto, errorsPhoto, message, success, photos } = useSelector((state) => state.photo)
  // 
  const dispatch = useDispatch();

  //photo

  const newPhotoForm = useRef();
  const editPhotoForm = useRef();


  useEffect(() => {
    dispatch(details(id));
    dispatch(getAllPhotosUser(id));
  }, [dispatch, id])






  //submit

  const [titulo, setTitulo] = useState('');
  const [photo, setPhoto] = useState('');


  const resMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: titulo,
      image: photo
    }

    const formData = new FormData();

    // Aqui usamos forEach corretamente
    Object.keys(data).forEach((key) => formData.append(key, data[key]));



    await dispatch(insertPhoto(formData));

    setTitulo('')

    resMessage();

  }

  const handleFile = (e) => {

    const image = e.target.files[0];

    setPhoto(image);

  }

  const handleDelete = async (id) => {
    dispatch(deletePhoto(id));
    resMessage();

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
            {loadingPhoto ? <input type="submit" value={'Aguarde'} disabled /> : <input type="submit" value={'Postar'} />}
            {errorsPhoto && <MessageComponent msg={errors} type={'error'}></MessageComponent>}
            {success && <MessageComponent msg={message} type={'success'}></MessageComponent>}

          </form>

        </div>
      </>}
      <div className="user-photos">
        <h2>Fotos de {user.name}</h2>
        <div className="photos-container">

          {photos && photos.map((item) => (
            <div className='photo' key={item._id}>
              {item.image && (
                <img src={`${uploads}/photos/${item.image}`} alt={item.title} />
              )}
              {id === auth._id ? (
                <div className="actions" >
                  <Link><BsFillEyeFill /></Link>
                  <Link><BsPencilFill /></Link>
                  <BsXLg  onClick={() => handleDelete(item._id)}></BsXLg>
                </div>
              ) :

                (<Link className='btn' to={`/photos/${item._id}`}></Link>)}
            </div>

          ))}
          {photos.length === 0 && <p>{user.name} ainda não possui foto publicadas </p>}
        </div>

      </div>
    </div>
  )
}

export default Profile
