import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { getScoreColor } from './helpers'

import './styles.scss'

export default class UserScore extends Component {
    static propTypes = {
        score: PropTypes.number,
    }

    render() {
        const { score } = this.props

        let scorePercentage = _.isFinite(score) ? parseInt(score * 10) : null

        return (
            <span className={'user-score'}>
                <span>{`User score:`}</span>
                <strong className={'score'} style={{ color: getScoreColor(scorePercentage) }}>
                    {scorePercentage ? `${scorePercentage} %` : 'N/A'}
                </strong>
            </span>
        )
    }
}
