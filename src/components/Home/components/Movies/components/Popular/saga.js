import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { POPULAR_LOAD_DATA, POPULAR_LOAD_DATA_REQUEST } from './constants'
import { loadDataRequest, setData } from './actions'

const POPULAR_LOAD_DATA_REQUEST_SUCCESS = `${POPULAR_LOAD_DATA_REQUEST}_SUCCESS`
const POPULAR_LOAD_DATA_REQUEST_FAILED = `${POPULAR_LOAD_DATA_REQUEST}_FAILED`

function* loadData() {
    const data = yield all({
        response: race({
            success: take(POPULAR_LOAD_DATA_REQUEST_SUCCESS),
            failed: take(POPULAR_LOAD_DATA_REQUEST_FAILED),
        }),
        request: put(loadDataRequest()),
    })

    if (data?.response?.failed) {
        return null
    }

    const body = data?.response?.success?.payload?.response?.body?.results

    yield put(setData(body))
    return null
}

export default function* popularSaga() {
    yield all([takeEvery(POPULAR_LOAD_DATA, loadData)])
}
