import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill
} from 'react-icons/bs'

const NavbarComponent = () => {
  return (
    <nav id='nav'>
      <Link to={'/'}>Home</Link>
      <form id='search-form'>
        <BsSearch />
        <input type="text" />
      </form>
      <ul id='nav-links'>
        <li>
          <NavLink to={'/'}><BsHouseDoorFill /></NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to={'/register'}>Registrar</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarComponent
