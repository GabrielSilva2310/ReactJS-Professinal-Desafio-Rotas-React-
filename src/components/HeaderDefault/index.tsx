import './styles.css'
import homeIcon from '../../assets/home-svgrepo-com 1.svg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HeaderDefault(){

    return(
         <header>
            <nav className='nav-container container'>
                <ul className='menu-container'>
                <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "menu-container"} to={'/home'}> Início </NavLink> </li>
                <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "menu-container"} to={'/products'}> Produtos </NavLink> </li>
                <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "menu-container"} to={'/about'}> Sobre nós </NavLink> </li>
                </ul>
                <Link to={'/home'} >  <img  src={homeIcon} alt="Home Img" /> </Link>
            </nav>
        </header>
    );



}