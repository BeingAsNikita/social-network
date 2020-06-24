import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import appReduser from "./appReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    app: appReduser,
    profile: profileReduser,
    dialogs: dialogsReduser,
    users: usersReduser,
    auth: authReduser,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

/* let store = createStore(reducers, applyMiddleware(thunkMiddleware)); */
/* window.store = store;   */
export default store;