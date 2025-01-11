import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const NavbarComponent = () => {

  const { user } = useAuthValue();

  return (
    <>
      <nav className={styles.my_nav}>
        <NavLink className={styles.brand} to={'/'}>
          Mini <span>blog</span>
        </NavLink>
        <ul className={styles.link_list}>
          <li>
            <NavLink to={'/'} className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/About'} className={({ isActive }) => isActive ? styles.active : ''}>Sobre</NavLink>
          </li>

          <li>
            <NavLink to={'/logout'} className={({ isActive }) => isActive ? styles.active : ''}>Sair</NavLink>
          </li>
          {user && <>
            <li>
              <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? styles.active : ''}>Dashboard</NavLink>
            </li>

            <li>
              <NavLink to={'/post/create'} className={({ isActive }) => isActive ? styles.active : ''}>Criar Post</NavLink>
            </li>
          </>}
          {!user &&
            <>
              <li>
                <NavLink to={'/register'} className={({ isActive }) => isActive ? styles.active : ''}>Registrar-se</NavLink>
              </li>
              <li>
                <NavLink to={'/login'} className={({ isActive }) => isActive ? styles.active : ''}>Login</NavLink>
              </li>
            </>}
        </ul>
      </nav>
    </>
  )
}

export default NavbarComponent