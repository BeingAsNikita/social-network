import React from 'react';
import css from './NewPost.module.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../../utils/validators';
import { Element } from '../../../common/FormsControls/FormsControls';


const maxLength = maxLengthCreator(10)
const Textarea = Element("textarea");

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
  },
}));


const NewPost = (props) => {

  let onAddPost = (values) => {
    props.addPost(values.NewPostMessage)
  }

  return (
    <div className={css.posts__new}>
      <NewPostReduxForm {...props} onSubmit={onAddPost}/>
    </div>
  )
}

const NewPostForm = (props) => {
  const classes = useStyles();


  return (
    <form onSubmit={props.handleSubmit}>
      <div className={css.container}>
        <Field type="text"
          component={Textarea}
          name={'NewPostMessage'}
          placeholder="Введите сообщение..."
          validate={[maxLength]}
           />

        <Button
          type="submit"
          size={'medium'}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon></SendIcon>}>
          Send
    </Button>

      </div>
    </form>
  )
}

const NewPostReduxForm = reduxForm({ form: 'NewPostForm' })(NewPostForm)


export default NewPost;