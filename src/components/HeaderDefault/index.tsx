import './styles.css'
import homeIcon from '../../assets/home-svgrepo-com 1.svg'

export default function HeaderDefault(){

    return(
         <header>
            <nav className='nav-container container'>
                <ul className='menu-container'>
                    <li> <a href=""> Início </a></li>
                    <li> <a href=""> Produtos </a></li>
                    <li> <a href=""> Sobre nós </a></li>
                </ul>
                <img src={homeIcon} alt="Home Img" />
            </nav>
        </header>
    );



}