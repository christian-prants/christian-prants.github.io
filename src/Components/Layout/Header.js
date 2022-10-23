import { Fragment } from 'react';
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <NavLink to="/" className={classes.navlink} activeclassname="selected">Home</NavLink>
                </div>
 
                <nav className={classes.nav}>
                    <NavLink to="/projects" className={classes.navlink} activeclassname="selected">Projetos</NavLink>
                    <NavLink to="/resume" className={classes.navlink} activeclassname="selected">Currículo</NavLink>
                </nav>     
            </header>
        </Fragment>
    )
}

export default Header;
