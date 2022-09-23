import { Map } from 'immutable'

import { actionTypes, Action } from './actionTypes'
import { IReducerState } from './interfaces'

const initialState = {
    searchQuery: '',
    loading: false,
    data: [],
}

export default function searchReducer(state: IReducerState = initialState, action: Action) {
    switch (action?.type) {
        case actionTypes.SEARCH_SET_QUERY: {
            const searchQuery = action?.data?.searchQuery

            return state.searchQuery = searchQuery
        }
        case actionTypes.SEARCH_SET_LOADING: {
            const loading = action?.data?.loading

            return state.loading = loading
        }
        case actionTypes.SEARCH_SET_RESULTS: {
            const data = action?.data?.data

            return state.data = data
        }
        case actionTypes.SEARCH_DELETE_ALL_DATA: {
            return initialState
        }

        default:
            return state
    }
}
