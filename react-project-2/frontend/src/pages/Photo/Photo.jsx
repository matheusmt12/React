import './Photo.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoId, photoLike, photoComment, resetMessage } from '../../slices/photoSlice';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useReseteMessagePhoto } from '../../hooks/useReseteMessagePhoto.jsx';
import { Link } from 'react-router-dom';

import MessageComponent from '../../components/MessageComponent.jsx'
import PhotoItemComponent from '../../components/PhotoItemComponent';
import LikeComponent from '../../components/LikeComponent';
import { uploads } from '../../utils/config.jsx';


function Photo() {

  const dispatch = useDispatch();
  const { loading, photo, error, message } = useSelector((state) => state.photo);
  const { user } = useSelector((state) => state.auth);
  const [comment, setComment] = useState('');

  const useResetMessage = useReseteMessagePhoto(dispatch);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhotoId(id));
  }, [dispatch, id])


  const handleLike = () => {

    dispatch(photoLike(photo._id));

    useResetMessage();
  }
  const handleComment = async (e) => {
    e.preventDefault();

    const data = {
      comment,
      id: photo._id
    }

    dispatch(photoComment(data));

    useResetMessage();

  }
  console.log(photo);


  if (loading) {
    return <p>Carregando...</p>
  }
  return (
    <div id='photo'>
      <PhotoItemComponent photo={photo} />
      <LikeComponent photo={photo} user={user} handleLike={handleLike} />
      <div className='message-container'>
        {error && <MessageComponent msg={error} type={'error'}></MessageComponent>}
        {message && <MessageComponent msg={message} type={'success'}></MessageComponent>}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários : {photo.comments.length}</h3>
            <form onSubmit={handleComment}>
              <input type="text"
                placeholder='Comentar'
                onChange={(e) => setComment(e.target.value)}
                value={comment || ''}
              />
              <input type="submit" value='Emviar' />
            </form>
            {photo.comments.length === 0 && (
              <p>Não há comentários</p>
            )}
            {
              photo.comments && (
                photo.comments.map((item) => (
                  <div className="comment" key={item.comment}>
                    <div className="author">
                      {item.userImage && (
                        <img src={`${uploads}/users/${item.userImage}`} alt={`${item.userName}`} />
                      )}

                      <Link to={`users/${item.idUser}`}>
                        <p>{item.userName}</p>
                      </Link>
                    </div>
                      <p>item.comment</p>
                  </div>
                ))
              )
            }
          </>
        )}
      </div>
    </div>
  )
}

export default Photo
