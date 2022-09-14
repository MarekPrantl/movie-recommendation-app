import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getTMDBImage } from '../../../../global/helpers'
import { Typography } from '@material-ui/core'

export default class Hero extends Component {
    static propTypes = {
        data: PropTypes.object,
        noId: PropTypes.bool,
    }

    render() {
        const { data } = this.props

        console.log({ data })

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
                        <LazyLoadImage
                            alt={`${data?.title ?? data?.name ?? ''} poster image`}
                            src={`${getTMDBImage(data?.poster_path)}`}
                            placeholder={<div className={'poster-placeholder'} />}
                        />
                    </div>
                    <div className="info-container">
                        <div className="title">
                            <Typography variant={'h4'}>{data?.title ?? data?.name ?? 'Missing title'}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
