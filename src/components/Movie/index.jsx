import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import BreadcrumbsRow from './components/BreadcrumbsRow'
import AdditionalInfo from './components/AdditionalInfo'
import Discover from './components/Discover'
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
        loading: PropTypes.bool,
        pathKey: PropTypes.string,
    }

    constructor(props) {
        super(props)

        this.state = {
            noId: false,
        }
    }

    componentDidMount() {
        const { history, loadMovieData } = this.props

        const movieId = parseInt(history?.location?.pathname?.split('/').pop())

        if (!_.isFinite(movieId)) {
            this.setState({ noId: true })
            return null
        }

        loadMovieData(movieId)
    }

    componentWillUnmount() {
        const { deleteAllMovieData } = this.props

        deleteAllMovieData()
    }

    render() {
        const { data, loading } = this.props
        const { noId } = this.state

        const genres = data?.genres || []

        return (
            <div className={'movie'}>
                <BreadcrumbsRow data={data} noId={noId} />
                <Hero data={data} loading={loading} noId={noId} />
                {!loading && !noId && <AdditionalInfo data={data} />}
                {!loading &&
                    !noId &&
                    genres?.map((genre) => (
                        <Discover key={`movie-discover-${genre?.name}`} genre={genre?.name} genreId={genre?.id} />
                    ))}
            </div>
        )
    }
}
