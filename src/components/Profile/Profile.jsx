import React from 'react';
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import topImg from '../../assets/img/profileTop.jpg';

const Profile = (props) => {

  return (
    <div className={css.profile}>
      <div className={css.profile__top}>
        <img alt="img" src={topImg}></img>
      </div>
      <ProfileInfo profile={props.profile}
        status={props.status}
        updateStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
         />
      <MyPosts data={props.data} dispatch={props.dispatch} store={props.store} />
    </div>
  )
}

export default Profile;