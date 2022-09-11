import React, { Component } from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import List from './components/List'

import './styles.scss'

export default class Home extends Component {
    render() {
        return (
            <div className={'home'}>
                <Header />
                <Container maxWidth="xl">
                    <List />
                </Container>
            </div>
        )
    }
}
