import { all } from 'redux-saga/effects'

import apiSaga from '../services/api/saga'
import trendingSaga from '../components/Home/components/Movies/components/Trending/saga'
import popularSaga from '../components/Home/components/Movies/components/Popular/saga'
import topRatedSaga from '../components/Home/components/Movies/components/TopRated/saga'

/**
 * Root generator for all application sagas
 */
export default function* () {
    yield all([apiSaga(), trendingSaga(), popularSaga(), topRatedSaga()])
}
