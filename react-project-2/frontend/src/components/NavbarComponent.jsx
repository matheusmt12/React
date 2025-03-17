import { Link, NavLink, useNavigate } from 'react-router-dom'

import './Navbar.css'

import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill
} from 'react-icons/bs'
import { useAuth } from '../hooks/useAuth.jsx';
import { useSelector } from 'react-redux';

import { logout, reset } from '../slices/authSlice.jsx';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NavbarComponent = () => {

  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleLogout = () => {

    dispatch(logout());
    dispatch(reset());


    navigate('/login');
  }


  const handleSearch = (e) =>{
    e.preventDefault();

    if (query) {
      return navigate('/search?q='+query);
    }
  }




  return (
    <nav id='nav'>
      <Link to={'/'}>Home</Link>
      <form id='search-form' onSubmit={handleSearch}>
        <BsSearch />
        <input type="text" value={query || ''} onChange={(e) => setQuery(e.target.value)} />
      </form>
      <ul id='nav-links'>
        {
          auth ? (<>
            <li>
              <NavLink to={'/'}><BsHouseDoorFill /></NavLink>
            </li>
            {user &&(<li>
              <NavLink to={`/users/${user._id}`}>
                <BsFillCameraFill></BsFillCameraFill>
              </NavLink>
            </li>)}
            <li>
              <NavLink to={'/profile'}>
                <BsFillPersonFill></BsFillPersonFill>
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>)
            :
            (<>
              <li>
                <NavLink to={'/login'}>Entrar</NavLink>
              </li>
              <li>
                <NavLink to={'/register'}>Registrar</NavLink>
              </li>
            </>)
        }


      </ul>
    </nav>
  )
}

export default NavbarComponent
