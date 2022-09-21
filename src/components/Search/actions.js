import config from '../../config'

import {
    SEARCH_SET_QUERY,
    SEARCH_LOAD_RESULTS,
    SEARCH_LOAD_RESULTS_REQUEST,
    SEARCH_SET_RESULTS,
    SEARCH_SET_LOADING,
    SEARCH_DELETE_ALL_DATA,
} from './constants'

export const searchSetQuery = (searchQuery) => ({
    type: SEARCH_SET_QUERY,
    data: {
        searchQuery,
    },
})

export const searchLoadResults = (searchQuery) => ({
    type: SEARCH_LOAD_RESULTS,
    data: {
        searchQuery,
    },
})

export const searchLoadResultsRequest = (searchQuery) => ({
    type: SEARCH_LOAD_RESULTS_REQUEST,
    payload: {
        ...config.api.movies.search,
        qs: {
            query: encodeURIComponent(searchQuery),
            include_adult: false,
        },
    },
})

export const searchSetLoading = (loading) => ({
    type: SEARCH_SET_LOADING,
    data: {
        loading,
    },
})

export const searchSetResults = (data) => ({
    type: SEARCH_SET_RESULTS,
    data: {
        data,
    },
})

export const searchDeleteAllData = () => ({
    type: SEARCH_DELETE_ALL_DATA,
})
