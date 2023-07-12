import './Header.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Logo from './Logo/Logo';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header;