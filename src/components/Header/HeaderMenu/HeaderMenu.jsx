import './HeaderMenu.css';
import HeaderMenuLink from './HeaderMenuLink/HeaderMenuLink';

const HeaderMenu = (props) => {
    return (
        <nav class="header__menu">
            <ul class="header__ul">
                <HeaderMenuLink />                
                <HeaderMenuLink />                
                <HeaderMenuLink />                
            </ul>
        </nav>
    );
}

export default HeaderMenu;