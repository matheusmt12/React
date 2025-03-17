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
      <p className="photo-author">
        Publicada por:{" "}
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  )
}

export default PhotoItemComponent
