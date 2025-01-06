import './Nav.css';
import { NavLink, Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/Product'}>Product</NavLink>
    </nav>
  )
}

export default NavComponent