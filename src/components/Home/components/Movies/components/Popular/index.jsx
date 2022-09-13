import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import List from '../List'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Popular extends Component {
    static propTypes = {
        loadData: PropTypes.func.isRequired,
        data: PropTypes.array,
    }

    componentDidMount() {
        const { loadData } = this.props

        loadData()
    }

    render() {
        const { data } = this.props

        return (
            <div className={'popular-container'}>
                <div className="title-container">
                    <Typography variant="h4">
                        <span>{'Popular'}</span>
                    </Typography>
                </div>
                <div className="list-container">
                    <List data={data || []} />
                </div>
            </div>
        )
    }
}
