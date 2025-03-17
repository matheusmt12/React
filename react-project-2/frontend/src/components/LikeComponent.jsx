import './Like.css'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
function LikeComponent({ user, photo, handleLike }) {    
    return (
        <div className='like'>
            {
                photo.likes && user && (
                    <>
                        {photo.likes.includes(user._id) ? (<BsHeartFill />)
                            : (<BsHeart onClick={() => handleLike(photo)} />)}

                        <p>Curtida(s) {photo.likes.length}</p>
                    </>
                )
            }
        </div>
    )
}

export default LikeComponent
