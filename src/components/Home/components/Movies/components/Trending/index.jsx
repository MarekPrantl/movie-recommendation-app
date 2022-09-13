import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

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
        loading: PropTypes.bool,
    }

    componentDidMount() {
        const { timeWindow, mediaType, loadData } = this.props

        if (!timeWindow || !mediaType) {
            console.log('Missing props in Trending')
            return
        }

        loadData(mediaType, timeWindow)
    }

    render() {
        const { timeWindow, data, loading } = this.props
        console.log({ data, loading })

        return (
            <div className={'trending-container'}>
                <div className="title-container">
                    <Typography variant="h4">
                        <span>{`Trending ${timeWindow === 'day' ? 'Today' : 'This Week'}`}</span>
                    </Typography>
                </div>
                <div className="list-container">{loading ? <p>{'Loading...'}</p> : <List data={data || []} />}</div>
            </div>
        )
    }
}
