import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Typography } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import _ from 'lodash'

import { getTMDBImage } from '../../../../global/helpers'

import UserScore from '../../../../global/components/UserScore'
import Date from '../../../../global/components/Date'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Hero extends Component {
    static propTypes = {
        data: PropTypes.object,
        noId: PropTypes.bool,
        loading: PropTypes.bool,
        isAuthorized: PropTypes.bool,
        user: PropTypes.object,
        push: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            idea: 0,
            effect: 0,
            cast: 0,
            overall: 0,
            adminMenuElAnchor: null,
        }
    }

    handleRatingClick = (e, value, type) => this.setState({ [type]: value })

    handleAdminMenuOpen = (e) => this.setState({ adminMenuElAnchor: e.currentTarget })

    handleAdminMenuClose = () => this.setState({ adminMenuElAnchor: null })

    handleEditMovie = () => {
        const { push, data } = this.props

        this.setState({ adminMenuElAnchor: null })
        console.log('Edit movie MOCK')
        push('/admin', { data, edit: true })
    }

    handleRemoveMovie = () => {
        const { push } = this.props

        this.setState({ adminMenuElAnchor: null })
        console.log('Remove movie MOCK')
        push('/')
    }

    renderTitle = () => {
        const { data, noId, loading, user } = this.props
        const { adminMenuElAnchor } = this.state

        if (loading) return 'Loading...'

        if (noId) return 'No movie found'

        const title = data?.title ?? data?.name ?? 'Missing title'
        const admin = user?.admin

        return (
            <Typography variant={'h4'}>
                {title}
                {admin && (
                    <>
                        <MoreHorizIcon className={'admin-menu-icon'} onClick={this.handleAdminMenuOpen} />
                        <Menu
                            id={'movie-admin-menu'}
                            anchorEl={adminMenuElAnchor}
                            keepMounted
                            open={Boolean(adminMenuElAnchor)}
                            onClose={this.handleAdminMenuClose}
                        >
                            <MenuItem onClick={this.handleEditMovie}>{'Edit Movie'}</MenuItem>
                            <MenuItem onClick={this.handleRemoveMovie}>{'Delete Movie'}</MenuItem>
                        </Menu>
                    </>
                )}
            </Typography>
        )
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
                <Typography className={'pill'}>{adult ? '18+' : 'PG-13'}</Typography>
                <Typography className={'sub-title-item release-date'}>
                    <Date date={releaseDate} />
                </Typography>
                <Typography className={'sub-title-item genres'}>{genres}</Typography>
                <Typography className={'sub-title-item runtime'}>{runtime}</Typography>
            </div>
        )
    }

    render() {
        const { data, loading, noId, isAuthorized } = this.props
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
                            {this.renderTitle()}
                            {this.renderSubTitle()}
                        </div>
                        <div className={'user-score'}>
                            <UserScore score={data?.vote_average} />
                        </div>
                        <Typography className={'description'}>{data?.overview}</Typography>
                        {!noId && !loading && (
                            <div className="rating">
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Movie Idea'}</Typography>
                                    <Rating
                                        name="idea"
                                        value={idea}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'idea')}
                                        disabled={!isAuthorized}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Effects'}</Typography>
                                    <Rating
                                        name="effect"
                                        value={effect}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'effect')}
                                        disabled={!isAuthorized}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Cast'}</Typography>
                                    <Rating
                                        name="cast"
                                        value={cast}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'cast')}
                                        disabled={!isAuthorized}
                                    />
                                </Box>
                                <Box className={'rating-wrapper'} component="fieldset" borderColor="transparent">
                                    <Typography component="legend">{'Overall'}</Typography>
                                    <Rating
                                        name="overall"
                                        value={overall}
                                        onChange={(e, value) => this.handleRatingClick(e, value, 'overall')}
                                        disabled={!isAuthorized}
                                    />
                                </Box>
                                {!isAuthorized && (
                                    <Box className={'info-text'}>
                                        <Typography>{'Sign In to rate the movie'}</Typography>
                                    </Box>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
