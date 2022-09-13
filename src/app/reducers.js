import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'
import moviesReducer from '../components/Home/components/Movies/reducer'

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        movies: moviesReducer,
    })

export default rootReducer
