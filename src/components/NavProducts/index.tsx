import { NavLink } from 'react-router-dom';
import './styles.css'

export default function NavProducts(){

    return(
              <div className='products-container'>
                <ul className='products-menu-container'>
                    <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "products-menu-container"} to={'computers'}> Computadores </NavLink> </li>
                    <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "products-menu-container"} to={'electronics'}> Eletrônicos </NavLink> </li>
                    <li> <NavLink className={({ isActive }) => isActive ? "menu-item" : "products-menu-container"} to={'books'}> Livros </NavLink> </li>
                </ul>
            </div>
    );



}