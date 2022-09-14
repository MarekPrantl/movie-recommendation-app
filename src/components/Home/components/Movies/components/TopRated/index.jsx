import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import _ from 'lodash'

import List from '../List'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class TopRated extends Component {
    static propTypes = {
        loadData: PropTypes.func.isRequired,
        data: PropTypes.array,
    }

    componentDidMount() {
        const { loadData, data } = this.props

        if (!_.isEmpty(data)) return null

        loadData()
    }

    render() {
        const { data } = this.props

        return (
            <div className={'top-rated-container'}>
                <div className="title-container">
                    <Typography variant="h4">
                        <span>{'Top Rated'}</span>
                        <Box
                            style={{ paddingLeft: '8px', opacity: '0.75' }}
                            component="span"
                            fontWeight={'fontWeightLight'}
                            fontSize={12}
                        >
                            {'(based on vote count and vote average)'}
                        </Box>
                    </Typography>
                </div>
                <div className="list-container">
                    <List data={data || []} />
                </div>
            </div>
        )
    }
}
