import React from 'react';
import css from './NewMessage.module.css';
import { connect } from 'react-redux';
import {sendMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogsReduser'


const NewMessage = (props) => {
    
    return (
        <NewMessage />
    )
}




let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
        dispatch(updateNewMessageActionCreator(text))
    },
    sendMessage: () => {
        dispatch(sendMessageActionCreator())
    }
  }
}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage)

export default NewMessageContainer;