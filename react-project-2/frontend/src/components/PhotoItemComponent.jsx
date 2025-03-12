import './PhotoItem.css'

import { uploads } from '../utils/config'
import { Link } from 'react-router-dom'
function PhotoItemComponent({ photo }) {

  
  return (
    <div className='photo-item'>
      {
        photo.image && (
          <img src={`${uploads}/photos/${photo.image}`} alt={`${photo.title}`} />
        )
      }
      <h2 className='photo-author'>{photo.title}</h2>
      <p>Publicado por :{" "}</p>
      <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
    </div>
  )
}

export default PhotoItemComponent
