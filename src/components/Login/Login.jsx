import React from 'react';
import css from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators';
import { connect } from 'react-redux';
import { logout, login } from '../../redux/authReduser';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';


const LoginForm = ({ handleSubmit, error }) => {
    const Input = Element("input");
    return (
        <form onSubmit={handleSubmit}>
            <div className={css.wrapper}>
                <Field className={css.field}
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
                    validate={[requiredField]} />
                <Field className={css.field}
                    placeholder={"password"}
                    type="password"
                    name={"password"}
                    component={Input}
                    validate={[requiredField]} />
                <div className={css.checkboxWrap}>

                    <Field id="rememberMe"
                        type="checkbox"
                        name={"rememberMe"}
                        component={"input"}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                    <button type="submit">Login</button>

                </div>
            </div>
            {
                error && <div>{error}</div>
            }
        </form>

    )
}

const Login = ({ login, isAuth, id }) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={"/Profile/" + id} />
    }

    return (

        <div className={css.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}



const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
})

export default connect(mapStateToProps, { login, logout })(Login)



