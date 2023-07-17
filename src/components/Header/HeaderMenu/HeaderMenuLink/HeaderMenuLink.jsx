import { Link } from 'react-router-dom';
import './HeaderMenuLink.css';

const HeaderMenuLink = ({title, href}) => {
    return (
        <li>
            <Link to={href} >{title}</Link>
        </li>
    );
}

export default HeaderMenuLink;