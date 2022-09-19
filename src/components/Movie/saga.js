import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { MOVIE_LOAD_DATA, MOVIE_LOAD_DATA_REQUEST } from './constants'
import { loadMovieDataRequest, movieSetData, movieSetLoading } from './actions'

const MOVIE_LOAD_DATA_REQUEST_SUCCESS = (id) => `${MOVIE_LOAD_DATA_REQUEST(id)}_SUCCESS`
const MOVIE_LOAD_DATA_REQUEST_FAILED = (id) => `${MOVIE_LOAD_DATA_REQUEST(id)}_FAILED`

function* loadData(action) {
    const movieId = action?.data?.id

    if (!movieId) return null

    yield put(movieSetLoading(true))

    const data = yield all({
        response: race({
            success: take(MOVIE_LOAD_DATA_REQUEST_SUCCESS(movieId)),
            failed: take(MOVIE_LOAD_DATA_REQUEST_FAILED(movieId)),
        }),
        request: put(loadMovieDataRequest(movieId)),
    })

    if (data?.response?.failed) {
        yield put(movieSetLoading(false))
        return null
    }

    const body = data?.response?.success?.payload?.response?.body

    yield put(movieSetData(body))
    yield put(movieSetLoading(false))
    return null
}

export default function* movieSaga() {
    yield all([takeEvery(MOVIE_LOAD_DATA, loadData)])
}
