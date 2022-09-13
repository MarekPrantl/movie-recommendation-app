import { Map } from 'immutable'

import { TOP_SET_DATA } from './constants'

const initialState = Map({})

export default function topRatedReducer(state = initialState, action = {}) {
    switch (action.type) {
        case TOP_SET_DATA: {
            const data = action?.data?.data

            return state.set('data', data)
        }

        default:
            return state
    }
}
