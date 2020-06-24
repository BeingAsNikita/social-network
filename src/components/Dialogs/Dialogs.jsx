import React from 'react';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
import { Route } from 'react-router-dom';



const Dialogs = (props) => {


    let dialogs = props.state.users.map(item => {
        return (
            <Dialog key={item.id}
                id={item.id}
                name={item.name}
                message={item.message}
            />
        )
    })

    let messages = props.state.message.map(item => {
        return (
            <Message key={item.id}
                text={item.text}
                date={item.date}
            />
        )
    })

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }
    
    let onSendMessageClick = (message) => {
        props.sendMessage(message)
    }


    return (
        <div className={css.wrapper}>
            <div className={css.chat}>
                <div className={css.sidebar}>
                    <ul className={css.list}>

                        {dialogs}

                    </ul>
                </div>
                
                <div className={css.messages}>
                    <Route path='/Messages/2' exact render={() =>  messages  }>
                    
                    </Route>
                    
                </div>
                <NewMessage 
                    newMessageText={props.state.newMessageText}
                    sendMessage={onSendMessageClick}
                    updateNewMessageText={onChangeMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs;