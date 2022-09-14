import { Map } from 'immutable'

import { MOVIE_SET_DATA, MOVIE_DELETE_ALL_DATA } from './constants'

const initialState = Map({})

export default function movieReducer(state = initialState, action = {}) {
    switch (action.type) {
        case MOVIE_SET_DATA: {
            const data = action?.data?.data

            return state.set('data', data)
        }
        case MOVIE_DELETE_ALL_DATA: {
            return state.set('data', {})
        }

        default:
            return state
    }
}
