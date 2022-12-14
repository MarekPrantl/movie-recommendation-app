import React, { Component } from 'react'

import Trending from './components/Trending'
import Popular from './components/Popular'
import TopRated from './components/TopRated'

import './styles.scss'

export default class Movies extends Component {
    render() {
        return (
            <div className={'movies'}>
                <Trending timeWindow={'day'} mediaType={'movie'} />
                <Trending timeWindow={'week'} mediaType={'movie'} />
                <Popular />
                <TopRated />
            </div>
        )
    }
}
