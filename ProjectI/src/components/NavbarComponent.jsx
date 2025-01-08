import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const NavbarComponent = () => {
  return (
    <>
      <nav className={styles.my_nav}>
        <NavLink className={styles.brand} to={'/'}>
          Mini <span>blog</span>
        </NavLink>
        <ul className={styles.link_list}>
          <li>
            <NavLink to={'/'} className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/About'} className={({isActive}) => isActive ? styles.active : ''}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to={'/login'} className={({isActive}) => isActive ? styles.active : ''}>Login</NavLink>
          </li>
          <li>
            <NavLink to={'/logout'} className={({isActive}) => isActive ? styles.active : ''}>Sair</NavLink>
          </li>
          <li>
            <NavLink to={'/register'} className={({isActive}) => isActive ? styles.active : ''}>Registrar-se</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarComponent