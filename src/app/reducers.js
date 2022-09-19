import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import moviesReducer from '../components/Home/components/Movies/reducer'
import movieReducer from '../components/Movie/reducer'
import discoverReducer from '../components/Movie/components/Discover/reducer'
import authReducer from '../components/Login/reducer'

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        movies: moviesReducer,
        movie: movieReducer,
        discover: discoverReducer,
        authorization: authReducer,
    })

export default rootReducer
