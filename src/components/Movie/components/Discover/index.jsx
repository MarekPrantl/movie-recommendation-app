import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

import List from '../../../Home/components/Movies/components/List'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Trending extends Component {
    static propTypes = {
        genre: PropTypes.string.isRequired,
        genreId: PropTypes.number.isRequired,
        loadData: PropTypes.func.isRequired,
        data: PropTypes.array,
    }

    componentDidMount() {
        const { genre, genreId, loadData, data } = this.props

        if (!genre || !_.isEmpty(data)) {
            return null
        }

        loadData(genre, genreId)
    }

    render() {
        const { genre, data } = this.props

        if (!genre) return null

        return (
            <div className={'trending-container'}>
                <div className="title-container">
                    <Typography variant="h4">
                        <span>{`Discover more - ${genre}`}</span>
                    </Typography>
                </div>
                <div className="list-container">
                    <List data={data || []} />
                </div>
            </div>
        )
    }
}
