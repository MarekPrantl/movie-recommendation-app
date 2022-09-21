import config from '../../../../config'

import { DISCOVER_LOAD_DATA, DISCOVER_LOAD_DATA_REQUEST, DISCOVER_SET_DATA } from './constants'

export const loadData = (genre, genreId) => ({
    type: DISCOVER_LOAD_DATA,
    data: {
        genre,
        genreId,
    },
})

export const loadDataRequest = (genreId) => ({
    type: DISCOVER_LOAD_DATA_REQUEST(genreId),
    payload: {
        ...config.api.movies.discover,
        qs: {
            with_genres: genreId,
            sort_by: ['vote_average.desc', 'vote_count.desc'],
            include_adult: false,
        },
    },
})

export const setData = (genre, data) => ({
    type: DISCOVER_SET_DATA,
    data: {
        genre,
        data,
    },
})
