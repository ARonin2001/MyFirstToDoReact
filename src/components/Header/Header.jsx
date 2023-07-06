import './Header.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Logo from './Logo/Logo';

const Header = (props) => {
    return (
        <header class="header">
            <div class="header__container">
                <Logo />
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header;