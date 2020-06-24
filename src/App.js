import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializedApp } from './redux/appReduser';
import { CircularProgress } from '@material-ui/core';

import { Route, withRouter } from 'react-router-dom';
/* import DialogsContainer from './components/Dialogs/DialogsContainer'; */
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }

  render() {
    if (!this.props.initialized) return <CircularProgress></CircularProgress>

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper__content">
          <Route path='/Messages' render={() => {
            return (
              <React.Suspense fallback={'Loadding...'}>
                <div>
                  <DialogsContainer />
                </div>
              </React.Suspense>

            )
          }
          } />
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Login' render={() => <Login />} />





        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp }))(App);