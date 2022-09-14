import config from '../../config'

import {
    MOVIE_LOAD_DATA,
    MOVIE_LOAD_DATA_REQUEST,
    MOVIE_SET_DATA,
    MOVIE_DELETE_ALL_DATA,
    MOVIE_SET_LOADING,
} from './constants'

export const movieSetLoading = (loading) => ({
    type: MOVIE_SET_LOADING,
    data: {
        loading,
    },
})

export const loadMovieData = (id) => ({
    type: MOVIE_LOAD_DATA,
    data: {
        id,
    },
})

export const loadMovieDataRequest = (id) => ({
    type: MOVIE_LOAD_DATA_REQUEST(id),
    payload: {
        ...config.api.movies.movie,
        uriParams: {
            movie_id: id,
        },
    },
})

export const movieSetData = (data) => ({
    type: MOVIE_SET_DATA,
    data: {
        data,
    },
})

export const deleteAllMovieData = () => ({
    type: MOVIE_DELETE_ALL_DATA,
})
