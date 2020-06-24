import React from 'react';
import css from './ProfileAvatar.module.css'
import defaultAvatar from '../../../../assets/img/user.png'

const ProfileAvatar = (props) => {
    return (
      <div className={css.profile__avatar}>
          {
            ( props.img) 
            ? <img src={props.img} alt="avatar"></img>
            : <img src={defaultAvatar} alt="avatar"></img>
          }

      </div>
    )
}

export default ProfileAvatar;