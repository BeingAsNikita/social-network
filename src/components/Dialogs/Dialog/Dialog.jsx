import React from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    let path = "/Messages/" + props.id

    return (
        <li className={css.item}>
            <NavLink to={path} activeClassName={css.active}>
                <h3>{props.name}</h3>
                <p className={css.text}>
                    {props.message}
                </p>
            </NavLink>
        </li>
    )
}

export default Dialog;