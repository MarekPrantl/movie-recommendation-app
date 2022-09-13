import { combineReducers } from 'redux-immutable'

import popularReducer from './components/Popular/reducer'
import topRatedReducer from './components/TopRated/reducer'
import trendingReducer from './components/Trending/reducer'

const moviesReducer = combineReducers({
    trending: trendingReducer,
    popular: popularReducer,
    topRated: topRatedReducer,
})

export default moviesReducer
