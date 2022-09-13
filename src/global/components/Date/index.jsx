import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './styles.scss'

const defaultPrecision = 'DD. MM. YYYY'

export default class Date extends Component {
    static propTypes = {
        date: PropTypes.string,
        precision: PropTypes.string,
    }

    render() {
        const { date, precision } = this.props

        if (!date) return null

        return <span>{moment(date).format(precision ?? defaultPrecision)}</span>
    }
}
