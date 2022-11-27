
import { NavLink } from "react-router-dom";

import '../styles/header.scss';

const Header = () => {
    return (
        <div className = 'main'>
            <NavLink to = '/'  className = 'sobre'  activeclassname = 'selected'>sobre</NavLink>
            <NavLink to = '/projects'  className = 'projetos'  activeclassname = 'selected'>projetos</NavLink>
            <a href="https://www.linkedin.com/in/christian-prants/" className = 'linkedin' target="_blank" rel="noopener noreferrer">
                linkedin
            </a>
        </div>
    )
}

export default Header;