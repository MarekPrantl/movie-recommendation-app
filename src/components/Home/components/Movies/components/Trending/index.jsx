import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

import List from '../List'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Trending extends Component {
    static propTypes = {
        timeWindow: PropTypes.string.isRequired,
        mediaType: PropTypes.string.isRequired,
        loadData: PropTypes.func.isRequired,
        data: PropTypes.array,
    }

    componentDidMount() {
        const { timeWindow, mediaType, loadData, data } = this.props

        if (!timeWindow || !mediaType || !_.isEmpty(data)) {
            return
        }

        loadData(mediaType, timeWindow)
    }

    render() {
        const { timeWindow, data } = this.props

        return (
            <div className={'trending-container'}>
                <div className="title-container">
                    <Typography variant="h4">
                        <span>{`Trending ${timeWindow === 'day' ? 'Today' : 'This Week'}`}</span>
                    </Typography>
                </div>
                <div className="list-container">
                    <List data={data || []} />
                </div>
            </div>
        )
    }
}
