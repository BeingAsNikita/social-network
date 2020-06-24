import React from 'react';
import css from './Post.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Post = (props) => {
  const classes = useStyles();

  const avatarDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHiPzh4W55zPbpTUBJBJSYV0MwPEyOjzRaCoYtEuVVB_hutk5h&usqp=CAU'

  return (
    <li className={css.item}>
      <div className={css.avatar}>
        <Avatar className={classes.large}
          src={props.imgUrl ? props.imgUrl : avatarDefault}
          alt={props.imgAl} />
      </div>

      <div className={css.content}>
        <p>{props.message}</p>
      </div>
      <p>{props.date}</p>
    </li>
  )
}

export default Post;