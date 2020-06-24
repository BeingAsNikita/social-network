import React from 'react';
import css from './Message.module.css';


const Message = (props) => {
    return (
        <div className={css.item}>
            <div className={css.wrapper}>
                <div className={css.top}>
                    <div className={css.author}>Автор</div>
                    <span className={css.date}>{props.date}</span>
                </div>

                <p className={css.content}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Message;