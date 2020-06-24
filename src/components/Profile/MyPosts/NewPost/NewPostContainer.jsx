
import { connect } from 'react-redux';
import NewPost from './NewPost';
import { addPostActionCreator } from '../../../../redux/profileReduser'



let mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

    addPost: (message) => {
      dispatch(addPostActionCreator(message))
    }

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewPost);