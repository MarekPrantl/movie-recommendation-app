import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './app/store'

import Root from './app/Root'

const { store, history } = configureStore()

const app = document.getElementById('root')

ReactDOM.render(<Root store={store} history={history} />, app)

if (module.hot) {
    module.hot.accept('./app/Root', () => {
        // eslint-disable-next-line global-require
        const NewRoot = require('./app/Root').default

        ReactDOM.render(<NewRoot store={store} history={history} />, app)
    })
}
