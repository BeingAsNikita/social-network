import React from 'react';
import css from './ProfileAvatar.module.css'
import defaultAvatar from '../../../../assets/img/user.png'

const ProfileAvatar = (props) => {
debugger
  let onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

    return (
      <div className={css.profile__avatar}>
          {
            ( props.img) 
            ? <img src={props.img} alt="avatar"></img>
            : <img src={defaultAvatar} alt="avatar"></img>
          }
          {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}

      </div>
    )
}

export default ProfileAvatar;