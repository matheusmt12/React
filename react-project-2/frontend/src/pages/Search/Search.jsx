import './Search.css';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from '../../hooks/useQuery';

import { resetMessage, searchPhotos } from '../../slices/photoSlice';

import LikeComponent from '../../components/LikeComponent';
import PhotoItemComponent from '../../components/PhotoItemComponent';
import { useLike } from '../../hooks/useLike';

const Search = () => {

  const query = useQuery();
  const search = query.get('q');
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { loading, photos } = useSelector((state) => state.photo);


  useEffect(() => {

    dispatch(searchPhotos(query));
  }, [query, dispatch]);

  const handleLike = (photo = null) => {

    const like = useLike(photo._id, dispatch);
    like();
    resetMessage();
  }


  if (loading) {
    return <p>Carregando...</p>
  }
  return (
    <div id='search'>
      <h2>Voce esta procurando por : {search}</h2>
      {photos && photos.map((item, i) => (
        <div key={item._id}>
          <PhotoItemComponent photo={item}></PhotoItemComponent>
          <LikeComponent photo={item} user={user} handleLike={handleLike}></LikeComponent>
        </div>
      ))}
      {photos.length === 0 && (
        <div className="no-photos">
          Nenhuma foto encontrada
        </div>
      )}
    </div>
  )
}

export default Search
