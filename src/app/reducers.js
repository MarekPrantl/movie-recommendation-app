import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import authReducer from '../components/Login/reducer'
import discoverReducer from '../components/Movie/components/Discover/reducer'
import movieReducer from '../components/Movie/reducer'
import moviesReducer from '../components/Home/components/Movies/reducer'
import searchReducer from '../components/Search/reducer'

const rootReducer = (history) =>
    combineReducers({
        authorization: authReducer,
        discover: discoverReducer,
        movie: movieReducer,
        movies: moviesReducer,
        router: connectRouter(history),
        search: searchReducer,
    })

export default rootReducer
