import { call, put, retry } from 'redux-saga/effects'

import { createResultAction, takeTypeLatestDebounce } from './helpers/saga'
import fetch from './fetch'

const requestRegex = new RegExp(`^.*_${'REQUEST'}$`)

function isRequestAction(_action) {
    return _action.type && requestRegex.test(_action.type)
}

/**
 * Generator for redux-saga for api calls
 * @param {Object} _action - redux action for api call
 */
export function* requestCallSaga(_action) {
    try {
        const headers = {}

        // if retry is specified
        const _retry = _action?.optional?.retry ?? null // eslint-disable-line no-underscore-dangle

        let result = null
        if (_retry) {
            const maxTries = _retry?.maxTries ?? 1 // how many tries before we dispaych error action
            const delay = _retry?.delay ?? 5000 // delay between tries

            result = yield retry(maxTries, delay, fetch, { headers }, _action.payload)
        } else {
            result = yield call(fetch, { headers }, _action.payload)
        }

        yield put(createResultAction(_action, 'SUCCESS', { response: result }))
    } catch (_err) {
        yield put(createResultAction(_action, 'FAILED', { error: _err }))

        if (_err.code === 500) {
            console.error(_err)
        }
    } finally {
        yield put(createResultAction(_action, 'COMPLETE'))
    }
    return null
}

/**
 * Root generator for redux-saga for api calls to run them concurrently
 */
export default function* requestSaga() {
    yield takeTypeLatestDebounce(isRequestAction, requestCallSaga)
}
