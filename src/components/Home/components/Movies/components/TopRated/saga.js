import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { TOP_LOAD_DATA, TOP_LOAD_DATA_REQUEST } from './constants'
import { loadDataRequest, setData } from './actions'

const TOP_LOAD_DATA_REQUEST_SUCCESS = `${TOP_LOAD_DATA_REQUEST}_SUCCESS`
const TOP_LOAD_DATA_REQUEST_FAILED = `${TOP_LOAD_DATA_REQUEST}_FAILED`

function* loadData() {
    const data = yield all({
        response: race({
            success: take(TOP_LOAD_DATA_REQUEST_SUCCESS),
            failed: take(TOP_LOAD_DATA_REQUEST_FAILED),
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

export default function* topRatedSaga() {
    yield all([takeEvery(TOP_LOAD_DATA, loadData)])
}
