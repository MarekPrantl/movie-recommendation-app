import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import BreadcrumbsRow from './components/BreadcrumbsRow'
import Hero from './components/Hero'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Movie extends Component {
    static propTypes = {
        history: PropTypes.object,
        loadMovieData: PropTypes.func.isRequired,
        deleteAllMovieData: PropTypes.func.isRequired,
        data: PropTypes.object,
    }

    constructor(props) {
        super(props)

        this.state = {
            noId: false,
        }
    }

    componentDidMount() {
        const { history, loadMovieData, data } = this.props

        const movieId = parseInt(history?.location?.pathname?.split('/').pop())

        if (!_.isFinite(movieId)) {
            this.setState({ noId: true })
            return null
        }

        if (!_.isEmpty(data)) return null

        loadMovieData(movieId)
    }

    componentWillUnmount() {
        const { deleteAllMovieData } = this.props

        deleteAllMovieData()
    }

    render() {
        const { data } = this.props
        const { noId } = this.state

        return (
            <div className={'movie'}>
                <BreadcrumbsRow data={data} noId={noId} />
                <Hero data={data} noId={noId} />
            </div>
        )
    }
}
