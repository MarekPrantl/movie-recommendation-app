import { LOGIN, LOGOUT, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGIN_SET_LOADING } from './constants'

export const login = (username, password) => ({
    type: LOGIN,
    data: {
        username,
        password,
    },
})

export const loginSetLoading = (loading) => ({
    type: LOGIN_SET_LOADING,
    data: {
        loading,
    },
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESSFUL,
    data: {
        user,
    },
})

export const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    data: {
        error,
    },
})

export const logout = () => ({
    type: LOGOUT,
})
