import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getTMDBImage } from '../../../../../../../../global/helpers'

import hocConnect from './hocConnect'
import './styles.scss'

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

    handleMovieKeyPress = () => {}

    render() {
        const { data, index } = this.props

        if (data?.length <= 0) return null

        return (
            <div
                className={'movies-list-item'}
                style={{ backgroundImage: `url(${getTMDBImage(data?.poster_path)})` }}
                onClick={this.handleMovieClick}
                onKeyPress={this.handleMovieKeyPress}
                role={'link'}
                tabIndex={index}
            >
                <div className={'overlay'} />
                <div className="content">
                    <p>{data?.title ?? data?.name}</p>
                </div>
            </div>
        )
    }
}
