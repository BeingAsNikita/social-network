import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectsHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const PICK_PAGE = 'PICK_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const FETCH_USERS = 'FETCH_USERS';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING_IN_PROGRESS';




export const followSuccess = (id) => ({ type: FOLLOW, payload: id, })
export const unfollowSuccess = (id) => ({ type: UNFOLLOW, payload: id, })
export const setUsers = (users) => ({ type: SET_USERS, payload: users, })
export const pickPage = (page) => ({ type: PICK_PAGE, payload: page, })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, payload: totalCount, })
export const fetch = () => ({ type: FETCH_USERS })
export const toggleFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: isFetching, id: id })




let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.payload, 'id', {followed: true})
 /*                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u
                }) */
            }
            return stateCopy

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
            return stateCopy
        }
        case SET_USERS: {
            return { ...state, users: action.payload.reverse(), isFetching: false }
        }

        case PICK_PAGE:
            return { ...state, currentPage: action.payload, isFetching: false }

        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.payload, isFetching: false }

        case FETCH_USERS:
            return { ...state, isFetching: true }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state
    }
}


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(fetch())
    }
}

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));

        let data = await usersAPI.followUser(id)

        if (data.resultCode === 0) {
            dispatch(followSuccess(id));
        }
        dispatch(toggleFollowingProgress(false));


    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));

        let data = await usersAPI.unfollowUser(id)
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(id))
        }
        dispatch(toggleFollowingProgress(false, id));


    }
}

export default usersReduser;