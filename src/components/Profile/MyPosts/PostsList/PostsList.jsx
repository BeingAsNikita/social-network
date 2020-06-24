import React from 'react';
import css from './PostsList.module.css'
import Post from '../Post/Post';


const PostsList = (props) => {

    return (
          <ul className={css.posts__list}>

            {props.posts.sort((a,b) => b.id - a.id).map(item => {
              return (<Post message={item.message} 
                           name={item.name}
                           imgUrl={item.url}
                           key={item.id}
                           date={item.date}
                    />)
            })}
          </ul>
    )
}

export default PostsList;