import { getAuthData } from "./authReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    promise.then(() => {
        dispatch(setInitializedSuccess())
    })
    
}

export default appReduser;