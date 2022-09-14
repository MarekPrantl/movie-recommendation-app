import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import moviesReducer from '../components/Home/components/Movies/reducer'
import movieReducer from '../components/Movie/reducer'

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        movies: moviesReducer,
        movie: movieReducer,
    })

export default rootReducer
