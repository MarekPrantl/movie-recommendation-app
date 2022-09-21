import { Map } from 'immutable'

import { SEARCH_SET_QUERY, SEARCH_SET_RESULTS, SEARCH_SET_LOADING, SEARCH_DELETE_ALL_DATA } from './constants'

const initialState = Map({
    searchQuery: '',
    loading: false,
    data: [],
})

export default function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEARCH_SET_QUERY: {
            const searchQuery = action?.data?.searchQuery

            return state.set('searchQuery', searchQuery)
        }
        case SEARCH_SET_LOADING: {
            const loading = action?.data?.loading

            return state.set('loading', loading)
        }
        case SEARCH_SET_RESULTS: {
            const data = action?.data?.data

            return state.set('data', data)
        }
        case SEARCH_DELETE_ALL_DATA: {
            return state.set('data', []).set('loading', false).set('searchQuery', '')
        }

        default:
            return state
    }
}
