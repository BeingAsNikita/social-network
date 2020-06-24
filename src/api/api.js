import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "f64aa0a3-5381-4ea9-a875-2691583154bb" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },

    followUser(id) {
        return instance.post(`/follow/${id}`).then(res => res.data)
    },
    
    unfollowUser(id) {
        return instance.delete(`/follow/${id}`).then(res => res.data)
    },

    getProfile(id) {
        return instance.get(`/profile/${id}`).then( res => res.data)
    },
    
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`/profile/${id}`).then(res => res.data)
    },

    getStatus(id) {
        return instance.get(`/profile/status/${id}`).then(res => res.data)
    },

    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`/auth/login`);
    },
}