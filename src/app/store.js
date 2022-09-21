import { Map } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { batchedSubscribe } from 'redux-batched-subscribe'
import { routerMiddleware } from 'connected-react-router/immutable'

import { createBrowserHistory } from 'history'

import createSagaMiddleware from 'redux-saga'
import multi from 'redux-multi'

import _ from 'lodash'

import rootReducer from './reducers'
import rootSaga from './sagas'

import config from '../config'

const history = createBrowserHistory(config.history)

export default function configureStore(initialState = Map()) {
    const sagaMiddleware = createSagaMiddleware()
    const routingMiddleware = routerMiddleware(history)

    const middleware = applyMiddleware(multi, sagaMiddleware, routingMiddleware)

    const notifyFunction = (notify) => {
        notify()
    }
    const debounceNotifyFunction = _.throttle(notifyFunction, 50)
    const batchSubscribe = batchedSubscribe(config.batchNotify ? debounceNotifyFunction : notifyFunction)

    let enhancer = compose(middleware, batchSubscribe)

    if (config.devTools) {
        if (window.__REDUX_DEVTOOLS_EXTENSION__) {
            enhancer = compose(
                middleware,
                // eslint-disable-next-line no-underscore-dangle
                window.__REDUX_DEVTOOLS_EXTENSION__(),
                batchSubscribe
            )
        } else {
            console.warn("You don't have dev tools extension in your browser!")
        }
    }

    const store = createStore(rootReducer(history), initialState, enhancer)
    let sagaTask = sagaMiddleware.run(rootSaga)

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default

            store.replaceReducer(newRootReducer)
        })

        module.hot.accept('./sagas', () => {
            const getNewSagas = require('./sagas').default

            sagaTask.cancel()
            sagaTask.toPromise().then(() => {
                sagaTask = sagaMiddleware.run(getNewSagas)
            })
        })
    }

    return {
        store,
        history,
    }
}
