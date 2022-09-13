import { Map } from 'immutable'

import { TRENDING_SET_DATA } from './constants'

const initialState = Map({})

export default function trendingReducer(state = initialState, action = {}) {
    switch (action.type) {
        case TRENDING_SET_DATA: {
            const mediaType = action?.data?.mediaType
            const timeWindow = action?.data?.timeWindow
            const data = action?.data?.data

            if (!mediaType || !timeWindow) return state

            return state.setIn([mediaType, timeWindow, 'data'], data)
        }

        default:
            return state
    }
}
