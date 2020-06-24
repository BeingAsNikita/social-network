import React from 'react';
import css from './NewMessage.module.css';
import { Field, reduxForm } from 'redux-form';


const NewMessage = (props) => {

    let onSendMessageClick = (values) => {
       
         props.sendMessage(values.newMessage) 
    }


    return (
        <div className={css.wrapper}>
            <NewMessageReduxForm {...props} onSubmit={onSendMessageClick} />
        </div>
    )
}

const NewMessageForm = (props) => {


    return (
        <form className={css.newMessageForm} onSubmit={props.handleSubmit}>
            <Field
                name={"newMessage"}
                component={"textarea"}
                value={props.newMessageText}
                placeholder='Введите сообщение...'
            />
            <button type="submit" className={css.sub}>send message</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({ form: 'newMessageForm' })(NewMessageForm)


export default NewMessage;