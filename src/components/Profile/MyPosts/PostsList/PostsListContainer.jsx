import { connect } from 'react-redux'
import PostsList from './PostsList';



let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts
  }
}

const PostsListContainer = connect(mapStateToProps)(PostsList);

export default PostsListContainer;