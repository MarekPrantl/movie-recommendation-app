import { combineReducers } from 'redux-immutable'
import trendingReducer from './components/Trending/reducer'

const moviesReducer = combineReducers({
    trending: trendingReducer,
})

export default moviesReducer
