import config from '../../../../../../config'

import { TOP_LOAD_DATA, TOP_LOAD_DATA_REQUEST, TOP_SET_DATA } from './constants'

export const loadData = () => ({
    type: TOP_LOAD_DATA,
})

export const loadDataRequest = () => ({
    type: TOP_LOAD_DATA_REQUEST,
    payload: {
        ...config.api.movies.discover,
        qs: {
            sort_by: ['vote_average.desc', 'vote_count.desc'],
            include_adult: false,
        },
    },
})

export const setData = (data) => ({
    type: TOP_SET_DATA,
    data: {
        data,
    },
})
