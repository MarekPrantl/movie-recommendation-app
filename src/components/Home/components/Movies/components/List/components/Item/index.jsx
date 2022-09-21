import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { getTMDBImage } from '../../../../../../../../global/helpers'

import UserScore from '../../../../../../../../global/components/UserScore'
import Date from '../../../../../../../../global/components/Date'

import hocConnect from './hocConnect'
import './styles.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

@hocConnect
export default class Item extends Component {
    static propTypes = {
        data: PropTypes.object,
        index: PropTypes.number,
        push: PropTypes.func,
    }

    handleMovieClick = () => {
        const { data, push } = this.props

        push(`/movie/${data?.id}`)
    }

    handleMovieKeyPress = (e) => {
        const { data, push } = this.props

        if (e.charCode === 13) {
            push(`/movie/${data?.id}`)
        }
    }

    render() {
        const { data } = this.props

        if (data?.length <= 0) return null

        return (
            <div
                className={'movies-list-item'}
                onClick={this.handleMovieClick}
                onKeyPress={this.handleMovieKeyPress}
                role={'link'}
                tabIndex={0}
            >
                <figure className={'movie-item-poster'}>
                    <LazyLoadImage
                        alt={`${data?.title ?? data?.name} - poster image`}
                        src={`${getTMDBImage(data?.poster_path)}`}
                        placeholder={<div className={'figure-placeholder'} />}
                    />
                </figure>
                <div className={'overlay'} />
                <div className="content">
                    <Typography>
                        <Box component="span" fontWeight={'fontWeightBold'}>
                            {data?.title ?? data?.name ?? ''}
                        </Box>
                    </Typography>
                    <Typography>
                        <Box component="span" fontWeight={'fontWeightLight'}>
                            <Date date={data?.release_date} />
                        </Box>
                    </Typography>
                    <Box component="span">
                        <UserScore score={data?.vote_average} />
                    </Box>
                </div>
            </div>
        )
    }
}
