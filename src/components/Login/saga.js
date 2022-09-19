import { takeLatest, put, all, delay } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import _ from 'lodash'

import { ADMIN_USER, NORMAL_USER } from '../../assets/mock/users/constants'
import * as adminJSON from '../../assets/mock/users/admin.json'
import * as userJSON from '../../assets/mock/users/user.json'

import { loginSetLoading, loginSuccess, loginFailed } from './actions'

import { LOGIN } from './constants'

export function* loginProcessSaga(action) {
    const username = action?.data?.username
    const password = action?.data?.password

    const user = { username, password }

    yield put(loginSetLoading(true))

    yield delay(5000)

    // Normally this saga would look different
    // There would be a request and an error handler
    // The result of the request would determine the user and the authorization
    // Also here would be any other side effect regarding the login process
    if (!_.isEqual(user, ADMIN_USER) && !_.isEqual(user, NORMAL_USER)) {
        yield put(loginFailed({ code: 401, message: 'Unauthorized' }))
        yield put(loginSetLoading(false))
        return null
    }

    if (_.isEqual(user, ADMIN_USER)) {
        yield put(loginSuccess(JSON.parse(JSON.stringify(adminJSON))))
        yield put(loginSetLoading(false))
        yield put(push('/'))
        return null
    }

    if (_.isEqual(user, NORMAL_USER)) {
        yield put(loginSuccess(JSON.parse(JSON.stringify(userJSON))))
        yield put(loginSetLoading(false))
        yield put(push('/'))
        return null
    }

    return null
}

export default function* authorizationSaga() {
    yield all([takeLatest(LOGIN, loginProcessSaga)])
}
