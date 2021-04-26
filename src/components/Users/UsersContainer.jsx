import React from 'react';
import Users from './Users';
import { follow, unfollow, pickPage, toggleFollowingProgress,getUsersThunkCreator } from "../../redux/usersReduser";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/userSelectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.pickPage(p);
        this.props.getUsers(p, this.props.pageSize)  
    }

    render() {
        return <Users pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            isFetching={this.props.isFetching}
            toggleFollowingProgress = {this.props.toggleFollowingProgress}
            followingInProgress = {this.props.followingInProgress}
        />
    }
}

/* let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
} */

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, 
        {follow, unfollow, pickPage, toggleFollowingProgress, 
        getUsers: getUsersThunkCreator})
)(UsersContainer)
