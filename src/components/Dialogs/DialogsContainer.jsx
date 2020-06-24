
import { sendMessageActionCreator } from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
      state: state.dialogs,
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {

      sendMessage: (message) => {
          dispatch(sendMessageActionCreator(message))
      }
    }
  }

/* compose(
  withAuthRedirect,
  connect(mapStateToProps,{updateNewMessageActionCreator,sendMessageActionCreator})
)(Dialogs) */
  
/* let AuthRedirectComponent = withAuthRedirect(Dialogs); */

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,mapDispatchToProps)
)(Dialogs)