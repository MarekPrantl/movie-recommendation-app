import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { TRENDING_LOAD_DATA, TRENDING_LOAD_DATA_REQUEST } from './constants'
import { loadDataRequest, setData } from './actions'

const TRENDING_LOAD_DATA_REQUEST_SUCCESS = (mediaType, timeWindow) =>
    `${TRENDING_LOAD_DATA_REQUEST(mediaType, timeWindow)}_SUCCESS`
const TRENDING_LOAD_DATA_REQUEST_FAILED = (mediaType, timeWindow) =>
    `${TRENDING_LOAD_DATA_REQUEST(mediaType, timeWindow)}_FAILED`

function* loadData(action) {
    const mediaType = action?.data?.mediaType
    const timeWindow = action?.data?.timeWindow

    if (!mediaType || !timeWindow) {
        return null
    }

    const data = yield all({
        response: race({
            success: take(TRENDING_LOAD_DATA_REQUEST_SUCCESS(mediaType, timeWindow)),
            failed: take(TRENDING_LOAD_DATA_REQUEST_FAILED(mediaType, timeWindow)),
        }),
        request: put(loadDataRequest(mediaType, timeWindow)),
    })

    if (data?.response?.failed) {
        return null
    }

    const body = data?.response?.success?.payload?.response?.body?.results

    yield put(setData(mediaType, timeWindow, body))
    return null
}

export default function* trendingSaga() {
    yield all([takeEvery(TRENDING_LOAD_DATA, loadData)])
}
