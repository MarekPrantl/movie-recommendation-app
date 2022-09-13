import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Movies from './components/Movies'
import Hero from './components/Hero'

import './styles.scss'

export default class Home extends Component {
    static propTypes = {
        history: PropTypes.object,
    }

    render() {
        const { history } = this.props

        return (
            <div className={'home'}>
                <Hero />
                <Movies history={history} />
            </div>
        )
    }
}
