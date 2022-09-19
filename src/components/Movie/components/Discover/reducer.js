import { Map } from 'immutable'

import { DISCOVER_SET_DATA } from './constants'

const initialState = Map({})

export default function discoverReducer(state = initialState, action = {}) {
    switch (action.type) {
        case DISCOVER_SET_DATA: {
            const genre = action?.data?.genre
            const data = action?.data?.data

            if (!genre) return state

            return state.setIn([genre, 'data'], data)
        }

        default:
            return state
    }
}
