import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from "../../redux/authReduser";
import { withRouter } from 'react-router-dom';


class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id,

    }
}

let withUrlDataContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, { logout })(withUrlDataContainerComponent);