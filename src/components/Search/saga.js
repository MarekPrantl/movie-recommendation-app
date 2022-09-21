import { all, put, race, take, takeEvery } from 'redux-saga/effects'

import { SEARCH_LOAD_RESULTS, SEARCH_LOAD_RESULTS_REQUEST } from './constants'
import { searchLoadResultsRequest, searchSetLoading, searchSetResults } from './actions'

const SEARCH_LOAD_RESULTS_REQUEST_SUCCESS = `${SEARCH_LOAD_RESULTS_REQUEST}_SUCCESS`
const SEARCH_LOAD_RESULTS_REQUEST_FAILED = `${SEARCH_LOAD_RESULTS_REQUEST}_FAILED`

function* loadData(action) {
    const searchQuery = action?.data?.searchQuery

    if (!searchQuery) return null

    yield put(searchSetLoading(true))

    const data = yield all({
        response: race({
            success: take(SEARCH_LOAD_RESULTS_REQUEST_SUCCESS),
            failed: take(SEARCH_LOAD_RESULTS_REQUEST_FAILED),
        }),
        request: put(searchLoadResultsRequest(searchQuery)),
    })

    if (data?.response?.failed) {
        yield put(searchSetLoading(false))
        return null
    }

    const body = data?.response?.success?.payload?.response?.body?.results

    yield put(searchSetResults(body))
    yield put(searchSetLoading(false))
    return null
}

export default function* searchSaga() {
    yield all([takeEvery(SEARCH_LOAD_RESULTS, loadData)])
}
