import { Map } from 'immutable'

import { LOGOUT, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGIN_SET_LOADING } from './constants'

const initialState = Map({
    isAuthorized: false,
    user: null,
    error: null,
    loading: false,
})

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL: {
            const user = action?.data?.user

            return state.set('isAuthorized', true).set('user', user)
        }
        case LOGIN_SET_LOADING: {
            const loading = action?.data?.loading

            return state.set('loading', loading)
        }
        case LOGIN_FAILED: {
            const error = action?.data?.error

            return state.set('isAuthorized', false).set('error', error)
        }
        case LOGOUT: {
            return state.set('isAuthorized', false).set('user', null).set('error', null)
        }
        default:
            return state
    }
}
