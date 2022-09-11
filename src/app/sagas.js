import { all } from 'redux-saga/effects'

import apiSaga from '../services/api/saga'

/**
 * Root generator for all application sagas
 */
export default function* () {
    yield all([apiSaga()])
}
