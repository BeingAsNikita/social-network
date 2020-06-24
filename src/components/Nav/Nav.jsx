import React from 'react';
import css from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => {
  
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <NavLink to={"/Profile/" + props.id} activeClassName={css.active}>Profile</NavLink>

        </li>
        <li>
          <NavLink to="/Messages" activeClassName={css.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/Users" activeClassName={css.active}>Users</NavLink>
        </li>
        <li>
          <NavLink to="/News" activeClassName={css.active}>News</NavLink>
        </li>
        <li>
          <NavLink to="/Music" activeClassName={css.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/Settings" activeClassName={css.active}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

let mapStateToProps = (state) => ({
  id: state.auth.id,
})


export default connect(mapStateToProps)(Nav);