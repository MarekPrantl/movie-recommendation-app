import { Map } from 'immutable'

import { MOVIE_SET_DATA, MOVIE_DELETE_ALL_DATA, MOVIE_SET_LOADING } from './constants'

const initialState = Map({
    data: {},
    loading: false,
})

export default function movieReducer(state = initialState, action = {}) {
    switch (action.type) {
        case MOVIE_SET_DATA: {
            const data = action?.data?.data

            return state.set('data', data)
        }
        case MOVIE_DELETE_ALL_DATA: {
            return state.set('data', {})
        }
        case MOVIE_SET_LOADING: {
            const loading = action?.data?.loading

            return state.set('loading', loading)
        }

        default:
            return state
    }
}
