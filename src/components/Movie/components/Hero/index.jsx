import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import _ from 'lodash'

import UserScore from '../../../../global/components/UserScore'
import { getTMDBImage } from '../../../../global/helpers'
import Date from '../../../../global/components/Date'

import './styles.scss'

export default class Hero extends Component {
    static propTypes = {
        data: PropTypes.object,
        noId: PropTypes.bool,
        loading: PropTypes.bool,
    }

    constructor(props) {
        super(props)

        this.state = {
            idea: 0,
            effect: 0,
            cast: 0,
            overall: 0,
        }
    }

    handleRatingClick = (e, value, type) => this.setState({ [type]: value })

    renderTitle = () => {
        const { data, noId, loading } = this.props

        if (loading) return 'Loading...'

        if (noId) return 'No movie found'

        return data?.title ?? data?.name ?? 'Missing title'
    }

    getGenres = () => {
        const { data } = this.props

        const genres = data?.genres ?? null

        if (!genres) return null

        const genreString = data.genres.map((genre) => genre?.name).join(', ')

        return genreString
    }

    renderSubTitle = () => {
        const { data, loading, noId } = this.props

        if (loading || noId || _.isEmpty(data)) return null

        const adult = data?.adult
        const releaseDate = data?.release_date
        const runtime = `${data?.runtime ?? 'N/A'} m`
        const genres = this.getGenres()

        return (
            <div className="sub-title">
                <Typography className={'adult-pill'}>{adult ? '18+' : 'PG-13'}</Typography>
                <Typography className={'sub-title-item release-date'}>
                    <Date date={releaseDate} />
                </Typography>
                <Typography className={'sub-title-item genres'}>{genres}</Typography>
                <Typography className={'sub-title-item runtime'}>{runtime}</Typography>
            </div>
        )
    }

    render() {
        const { data, loading, noId } = this.props
        const { idea, effect, cast, overall } = this.state

        return (
            <div className={'movie-hero'}>
                <div
                    className="back-drop-container"
                    style={{
                        backgroundImage: data?.backdrop_path ? `url('${getTMDBImage(data?.backdrop_path)}')` : 'none',
                    }}
                >
                    <div className="overlay"></div>
                </div>
                <div className="hero-container">
                    <div className="image-container">
                        {!noId && !loading && (
                            <LazyLoadImage
                                alt={`${data?.title ?? data?.name ?? ''} poster image`}
                                src={`${getTMDBImage(data?.poster_path)}`}
                                placeholder={<div className={'poster-placeholder'} />}
                                visibleByDefault
                            />
                        )}
                    </div>
                    <div className="info-container">
                        <div className="title">
                            <Typography variant={'h4'}>{this.renderTitle()}</Typography>
                            {this.renderSubTitle()}
                        </div>
                        <Typography className={'user-score'}>
                            <UserScore score={data?.vote_average} />
                        </Typography>
                        <Typography className={'description'}>{data?.overview}</Typography>
                        {!noId && !loading && (
                            <div className="rating">
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Movie Idea'}</Typography>
                                    <Rating
                                        name="idea"
                                        value={idea}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'idea')}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Effects'}</Typography>
                                    <Rating
                                        name="effect"
                                        value={effect}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'effect')}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Cast'}</Typography>
                                    <Rating
                                        name="cast"
                                        value={cast}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'cast')}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Overall'}</Typography>
                                    <Rating
                                        name="overall"
                                        value={overall}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'overall')}
                                    />
                                </Box>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
