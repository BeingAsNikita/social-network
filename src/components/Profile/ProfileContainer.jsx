import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUser, getUserStatus, updateUserStatus } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setUser(userId)
    this.props.getUserStatus(userId)
  }

  componentDidUpdate() {
    let userId = this.props.match.params.userId;
    this.props.setUser(userId)
  }


  render() {
    return (
      <Profile profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus} />
    )
  }
}

let mapStateToProps = (state) => ({

  profile: state.profile.profile,
  status: state.profile.status,
})


export default compose(
  connect(mapStateToProps, { setUser, getUserStatus, updateUserStatus }),
  withAuthRedirect, 
  withRouter,
)(ProfileContainer)