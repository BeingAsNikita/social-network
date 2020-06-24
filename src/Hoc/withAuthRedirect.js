import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class Redirectcomponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to="/Login" />

            return <Component {...this.props} />
        }
    }



    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(Redirectcomponent)

    return ConnectedAuthRedirectComponent;
}
