import './HeaderMenu.css';
import HeaderMenuLink from './HeaderMenuLink/HeaderMenuLink';

const HeaderMenu = (props) => {
    return (
        <nav className="header__menu">
            <ul className="header__ul">
                <HeaderMenuLink />                
                <HeaderMenuLink />                
                <HeaderMenuLink />                
            </ul>
        </nav>
    );
}

export default HeaderMenu;