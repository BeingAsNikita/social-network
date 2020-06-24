import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
    return (
        <header className={css.header}>
            <div>
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"></img>
            </div>
            <div className={css.loginWrapper}>
                {
                    !props.isAuth
                    ? < NavLink to="/Login">Login</NavLink>  
                    : <div className={css.loginInner}><span>{props.login}</span> <button className={css.logout} onClick={props.logout}><ExitToAppIcon></ExitToAppIcon></button></div>  
                }

            </div> 
        </header >
    )
}

export default Header;