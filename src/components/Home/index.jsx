import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Movies from './components/Movies'
import Hero from './components/Hero'
import Footer from './components/Footer'

import './styles.scss'

export default class Home extends Component {
    static propTypes = {
        history: PropTypes.object,
    }

    render() {
        const { history } = this.props

        return (
            <div className={'home'}>
                <Header />
                <Container maxWidth="lg">
                    <Hero />
                    <Movies history={history} />
                </Container>
                <Footer />
            </div>
        )
    }
}
