import { useState, useEffect } from 'react';
import './EditProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { uploads } from '../../utils/config';
import { profile, resetMessage, update } from '../../slices/userSlice.jsx';
import MessageComponent from '../../components/MessageComponent.jsx';


const EditProfile = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const { errors, loading, user, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(message);
  
  // get user

  useEffect(() => {
    dispatch(profile())
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setBio(user.bio);
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
    };

    if (file) {
      data.image = file;
    }

    if (bio) {
      data.bio = bio;
    }

    if (password) {
      data.password = password;
    }

    const formData = new FormData();

    // Aqui usamos forEach corretamente
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    await dispatch(update(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);


  }


  const handleFile = (e) => {

    const image = e.target.files[0];

    setPreviewImage(image);

    setFile(image);
  }

  return (
    <div id='edit-profile'>
      <h2>Edite seus dados</h2>
      <p className="subititle">Adicione uma imagem de perfil e fale mais sobre voce</p>
      {(user.profileImg || previewImage) &&
        (
          <img className='profile-image' src={
            previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImg}`

          }
            alt={user.name}
          />
        )
      }

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' value={name || ''} onChange={(e) => setName(e.target.value)} />
        <input type="email" disabled placeholder='Email' value={email || ''} />
        <label>
          <span>Imagem do perfil:</span>
          <input type="file" onChange={handleFile} />
        </label>
        <label>
          <span>Bio</span>
          <input type="text" placeholder='Descrição do perfil' value={bio || ''} onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          <span>Quer Alterar a sua senha ?</span>
          <input type="password" placeholder='Digite a sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {!loading ? <input type="submit" value={'Atualizar'} /> : <input type="submit" value={'Aguarde'} disabled />}
        {errors && <MessageComponent msg={errors} type={'error'}></MessageComponent>}
        {message && <MessageComponent msg={message} type={'success'}></MessageComponent>}
      </form>
    </div>
  )
}

export default EditProfile
