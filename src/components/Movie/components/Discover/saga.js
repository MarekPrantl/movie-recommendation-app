import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { DISCOVER_LOAD_DATA, DISCOVER_LOAD_DATA_REQUEST } from './constants'
import { loadDataRequest, setData } from './actions'

const DISCOVER_LOAD_DATA_REQUEST_SUCCESS = (genre) => `${DISCOVER_LOAD_DATA_REQUEST(genre)}_SUCCESS`
const DISCOVER_LOAD_DATA_REQUEST_FAILED = (genre) => `${DISCOVER_LOAD_DATA_REQUEST(genre)}_FAILED`

function* loadData(action) {
    const genre = action?.data?.genre
    const genreId = action?.data?.genreId

    if (!genre) {
        return null
    }

    const data = yield all({
        response: race({
            success: take(DISCOVER_LOAD_DATA_REQUEST_SUCCESS(genreId)),
            failed: take(DISCOVER_LOAD_DATA_REQUEST_FAILED(genreId)),
        }),
        request: put(loadDataRequest(genreId)),
    })

    console.log({ data })

    if (data?.response?.failed) {
        return null
    }

    const body = data?.response?.success?.payload?.response?.body?.results

    yield put(setData(genre, body))
    return null
}

export default function* discoverSaga() {
    yield all([takeEvery(DISCOVER_LOAD_DATA, loadData)])
}
