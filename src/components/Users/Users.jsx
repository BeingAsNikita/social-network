import React from 'react';
import css from './Users.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatarDefault from '../../assets/img/user.png'
import { CircularProgress } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Pagination from './Paginaton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));
const Classes = () => useStyles();

const Users = (props) => {
 /*     let pagesCount = Math.ceil(props.totalCount / props.pageSize); 
    let pages = [];
    for (let i = 1; i <=  pagesCount  20; i++) {
        pages.push(i)
    } */

    return (
        <div className={css.container}>

            <Pagination className={css.pageBtn_wrapper}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                totalCount = {props.totalCount} 
                pageSize = {props.pageSize}
                portionSize = {10}/>
{/*             <div className={css.pageBtn_wrapper}>
                {

                    pages.map((p, index) => {
                        return (
                            <span key={index}
                                onClick={() => { props.onPageChanged(p) }}
                                className={props.currentPage === p && css.current}>{p}</span>
                        )
                    })
                }
            </div> */}
            {

                <ul>
                    {
                        props.isFetching
                            ?
                            props.users.map(u => {
                                return (
                                    <li key={u.id} className={css.item}>
                                        <div className={css.wrapper}>
                                            <NavLink to={"/Profile/" + u.id}>
                                                <Avatar className={Classes.large + ' ' + css.avatar}
                                                    src={u.photos.small ? u.photos.small : avatarDefault}
                                                    alt='avatar' />
                                            </NavLink>
                                            {
                                                u.followed
                                                    ? <button
                                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                                        onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

                                                    : <button
                                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                                        onClick={() => { props.follow(u.id) }}>Follow</button>
                                            }
                                        </div>
                                        <div className={css.body}>
                                            <div className={css.top}>
                                                <div className={css.name}>{u.name}</div>
                                            </div>

                                            <div className={css.status}>{u.status}</div>
                                        </div>
                                    </li>
                                )
                            })
                            : <li className={css.progress}><CircularProgress color="secondary" /></li>
                    }

                </ul>

            }
        </div>
    )
}



export default Users;