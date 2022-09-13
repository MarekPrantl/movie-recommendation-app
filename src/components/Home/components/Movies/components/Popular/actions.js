import config from '../../../../../../config'

import { POPULAR_LOAD_DATA, POPULAR_LOAD_DATA_REQUEST, POPULAR_SET_DATA } from './constants'

export const loadData = () => ({
    type: POPULAR_LOAD_DATA,
})

export const loadDataRequest = () => ({
    type: POPULAR_LOAD_DATA_REQUEST,
    payload: {
        ...config.api.movies.discover,
        qs: {
            sort_by: 'popularity.desc',
        },
    },
})

export const setData = (data) => ({
    type: POPULAR_SET_DATA,
    data: {
        data,
    },
})
