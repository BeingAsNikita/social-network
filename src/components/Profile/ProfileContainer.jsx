import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUser, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setUser(userId)
    this.props.getUserStatus(userId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.props.setUser(this.props.match.params.userId)
  }


  render() {
    return (
      <Profile profile={this.props.profile}
        status={this.props.status}
        isOwner={(this.props.ownerId == this.props.match.params.userId)}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state) => ({
  ownerId: state.auth.id,
  profile: state.profile.profile,
  status: state.profile.status,
})


export default compose(
  connect(mapStateToProps, { setUser, getUserStatus, updateUserStatus, savePhoto }),
  withAuthRedirect,
  withRouter,
)(ProfileContainer)