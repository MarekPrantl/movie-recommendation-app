import config from '../../../../../../config'

import { TRENDING_LOAD_DATA, TRENDING_LOAD_DATA_REQUEST, TRENDING_SET_DATA } from './constants'

export const loadData = (mediaType, timeWindow) => ({
    type: TRENDING_LOAD_DATA,
    data: {
        mediaType,
        timeWindow,
    },
})

export const loadDataRequest = (mediaType, timeWindow) => ({
    type: TRENDING_LOAD_DATA_REQUEST(mediaType, timeWindow),
    payload: {
        ...config.api.movies.trending,
        uriParams: {
            media_type: mediaType,
            time_window: timeWindow,
        },
    },
})

export const setData = (mediaType, timeWindow, data) => ({
    type: TRENDING_SET_DATA,
    data: {
        mediaType,
        timeWindow,
        data,
    },
})
