import React from 'react';
import css from './ProfileInfo.module.css'
import Description from './Description/Description';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import { CircularProgress } from '@material-ui/core';



const ProfileInfo = (props) => {

  if (!props.profile) {
    return <CircularProgress></CircularProgress>
  }
  return (
    <div>


      <div className={css.profile__info}>
        <ProfileAvatar img={props.profile.photos.large}
          isOwner={props.isOwner}
          savePhoto={props.savePhoto} />

        <Description fullName={props.profile.fullName}
          aboutMe={props.profile.aboutMe}
          updateStatus={props.updateStatus}
          status={props.status} />
      </div>
    </div>
  )
}

export default ProfileInfo;