import { profileAPI, usersAPI } from "../api/api";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const DELETE_POST = 'DELETE_POST';
const GET_PROFILE_STATUS = 'GET_PROFILE_STATUS';
const GET_PROFILE_PHOTO = 'GET_PROFILE_PHOTO';



let initialState = {
  profile: null,
  status: '',
  posts: [
    {
      id: 1,
      name: 'Morgenshtern',
      message: 'Здарова, ублюдки!',
      url: 'https://i.pinimg.com/736x/ed/16/b9/ed16b9f0a63be6e6ab3a35da48031fb9.jpg'
    },
    {
      id: 2,
      name: 'Юра',
      message: 'Погнали в маунтэнблейд!!!!',
      url: 'https://sun9-31.userapi.com/c849020/v849020113/195ec6/dm8KtRenxiQ.jpg'
    },
    {
      id: 3,
      name: 'Марго',
      message: 'Я НЕ КРЫЫЫСАА!!!',
      url: 'https://sun9-2.userapi.com/c855620/v855620606/2bb8b/G1QRRFVfHhs.jpg'
    },
    {
      id: 4,
      name: 'Никита',
      message: 'Я летаю словно рыс!',
      url: 'https://scontent-hel2-1.cdninstagram.com/v/t51.2885-19/s150x150/83175097_608160346627556_1983433867435966464_n.jpg?_nc_ht=scontent-hel2-1.cdninstagram.com&_nc_ohc=I6kC_JJCgZIAX_qJjLq&oh=732502044e9338ee2b5b63e7f40b23d4&oe=5EB726D1'
    },
  ],

}

export const profileReduser = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let postMessage = action.payload
      return {
        ...state,
        posts: [...state.posts, { id: 5, name: 'Никита', message: postMessage }]
      }
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: { ...state, posts: state.posts.filter(p => action.payload !== p.id) }
      }
    }
    // eslint-disable-next-line

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload }

    case GET_PROFILE_STATUS:
      return { ...state, status: action.payload }

    case GET_PROFILE_PHOTO:
      debugger
      return {
        ...state,
        profile: {...state.profile, photos: action.payload}
      }

    default:
      return state
  }
}

export const addPostActionCreator = (message) => ({ type: ADD_POST, payload: message })
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, payload: id })


export const setUserProfileSuccess = (data) => {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  }
}

export const getUserStatusSuccess = (status) => {
  return {
    type: GET_PROFILE_STATUS,
    payload: status,
  }
}

export const savePhotoSuccess = (photos) => {
  return {
    type: GET_PROFILE_PHOTO,
    payload: {
      small: photos.small,
      large: photos.large
    },
  }
}



export const setUser = (id) => {
  return async dispatch => {
    let res = await usersAPI.getProfile(id)
    dispatch(setUserProfileSuccess(res))
    dispatch(getUserStatus(id))
  }
}

export const getUserStatus = (id) => {
  return async dispatch => {
    let res = await profileAPI.getStatus(id);
    dispatch(getUserStatusSuccess(res))
  }
}

export const updateUserStatus = (status) => {
  return async dispatch => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(getUserStatusSuccess(status))
    }
  }
}

export const savePhoto = (file) => {
  return async dispatch => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
      dispatch(savePhotoSuccess(res.data.data.photos))
    }
  }
}
export default profileReduser;