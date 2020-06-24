import React from 'react';
import css from './Description.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusHook from '../ProfileStatus/ProfileStatusHook';


const Description = (props) => {
  return (
    
    <div className={css.description__wrap}>
      <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
      <div className={css.profile__description}>
        <h2>{props.fullName}</h2>
        <p>Обо мне: {props.aboutMe}</p>
        <p>Соц сети</p>
        <p>Образование</p>
        <p>Сайт</p>

      </div>
    </div>
  )
}

export default Description;