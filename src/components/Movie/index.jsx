import React, { Component } from 'react'

import './styles.scss'

export default class Movie extends Component {
    render() {
        console.log(this.props)

        return <div className={'movie'}>{'Movie'}</div>
    }
}
