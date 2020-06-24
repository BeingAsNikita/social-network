import React from 'react';
import css from './MyPosts.module.css'
import PostsListContainer from './PostsList/PostsListContainer';
import NewPostContainer from './NewPost/NewPostContainer';


const MyPosts= (props) => {
    return (
        <div className={css.posts}>
          <h2>My Posts</h2>
          <NewPostContainer />
          <PostsListContainer />
        </div>
    )
}

/* let mapStateToProps = (state) => {
  return {
    posts: state.profile
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }

  }
}

const SuperMyPosts = connect(mapStateToProps,mapDispatchToProps)(MyPosts); */

export default MyPosts;