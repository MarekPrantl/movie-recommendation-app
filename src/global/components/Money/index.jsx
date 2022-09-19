import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import NumberFormatter from './components/NumberFormatter'

export default class Money extends Component {
    static propTypes = {
        currencyStyle: PropTypes.object,
        emptyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        showCurrency: PropTypes.bool,
        value: PropTypes.object,
        valueStyle: PropTypes.object,
    }

    static defaultProps = {
        value: {},
        showCurrency: true,
    }

    render() {
        const { value, showCurrency, emptyValue, valueStyle, currencyStyle } = this.props

        const amount = _.get(value, 'amount', null)

        return (
            <NumberFormatter
                customBase={1}
                value={amount}
                emptyValue={emptyValue}
                currency={_.get(value, 'currency')}
                decimalPlaces={0}
                displayCurrency={showCurrency}
                displayUnits={false}
                valueStyle={valueStyle}
                currencyStyle={currencyStyle}
            />
        )
    }
}
