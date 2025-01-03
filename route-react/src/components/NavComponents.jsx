
import './Nav.css';
import { Link } from "react-router-dom"
const NavComponents = () => {
  return (
    <nav>
        <Link to={'/'}> Home </Link>
        <Link to={'/about'}> About </Link>
    </nav>
  )
}

export default NavComponents