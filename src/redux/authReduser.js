import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

export const authSuccess = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReduser = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const getAuthData = () => {
    return async dispatch => {
        let res = await authAPI.me()
        if (res.data.resultCode === 0) {
            let { login, id, email } = res.data.data;
            dispatch(authSuccess(id, email, login, true));
        }

    }
}

export const login = (email, password, rememberMe) => {
    return async dispatch => {
        let res = await authAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('loginForm', { _error: message }))
        }
    }
}

export const logout = (id, email, login, ) => {
    return async dispatch => {
        let res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(authSuccess(null, null, null, false));
        }
    }
}

export default authReduser;