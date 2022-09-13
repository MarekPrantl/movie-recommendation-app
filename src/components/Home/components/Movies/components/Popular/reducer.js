import { Map } from 'immutable'

import { POPULAR_SET_DATA } from './constants'

const initialState = Map({})

export default function popularReducer(state = initialState, action = {}) {
    switch (action.type) {
        case POPULAR_SET_DATA: {
            const data = action?.data?.data

            return state.set('data', data)
        }

        default:
            return state
    }
}
