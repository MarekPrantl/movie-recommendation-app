import React, { Component } from 'react'

import Trending from './components/Trending'

import './styles.scss'

export default class Movies extends Component {
    render() {
        return (
            <div className={'movies'}>
                <Trending timeWindow={'day'} mediaType={'all'} />
                <Trending timeWindow={'week'} mediaType={'all'} />
            </div>
        )
    }
}
