import './HeaderMenu.css';
import HeaderMenuLink from './HeaderMenuLink/HeaderMenuLink';

const HeaderMenu = (props) => {
    return (
        <nav className="header__menu">
            <ul className="header__ul">
                <HeaderMenuLink title="Main" href="/" />                
                <HeaderMenuLink title="About ToDo" href="about-to-do" />                
            </ul>
        </nav>
    );
}

export default HeaderMenu;