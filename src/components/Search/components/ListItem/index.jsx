import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import { getTMDBImage } from '../../../../global/helpers'

import Date from '../../../../global/components/Date'

import hocConnect from './hocConnect'
import './styles.scss'
import UserScore from '../../../../global/components/UserScore'

@hocConnect
export default class ListItem extends Component {
    static propTypes = {
        data: PropTypes.object,
        push: PropTypes.func.isRequired,
    }

    handleHomeClick = () => {
        const { push, data } = this.props

        const movieId = data?.id

        push(`/movie/${movieId}`)
    }

    handleHomeKeyPress = (e) => {
        const { push, data } = this.props

        const movieId = data?.id

        if (e.charCode === 13) {
            push(`/movie/${movieId}`)
        }
    }

    render() {
        const { data } = this.props

        const adult = data?.adult
        const releaseDate = data?.release_date

        return (
            <div
                className={'search-movie'}
                onClick={this.handleHomeClick}
                onKeyPress={this.handleHomeKeyPress}
                role={'link'}
                tabIndex={0}
            >
                <div className="image-container">
                    <img
                        src={getTMDBImage(data?.poster_path)}
                        alt={`${data?.title ?? data?.name ?? 'Movie'} - Poster`}
                    />
                </div>
                <div className="text-container">
                    <div className="title">
                        <Typography variant={'h6'}>{data?.title ?? data?.name ?? 'Missing title'}</Typography>
                        <div className="sub-title">
                            <Typography className={'pill'}>{adult ? '18+' : 'PG-13'}</Typography>
                            <Typography className={'sub-title-item release-date'}>
                                <Date date={releaseDate} />
                            </Typography>
                        </div>
                    </div>
                    <div className="description-wrapper">
                        <Typography>{data?.overview ?? ''}</Typography>
                    </div>
                    <div className="score-wrapper">
                        <UserScore score={data?.vote_average} />
                    </div>
                </div>
            </div>
        )
    }
}
