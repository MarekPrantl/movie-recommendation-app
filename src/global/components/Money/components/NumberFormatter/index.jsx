import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { getNumberBase, formatValueByBase } from './helpers'

import styles from './NumberFormatter.module.scss'

export default class NumberFormatter extends PureComponent {
    static propTypes = {
        currency: PropTypes.string,
        currencyStyle: PropTypes.object,
        customBase: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
        decimalPlaces: PropTypes.number,
        displayCurrency: PropTypes.bool,
        displayNegativesRed: PropTypes.bool,
        displayUnits: PropTypes.bool,
        dontFormatValue: PropTypes.bool,
        emptyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        unitsStyle: PropTypes.object,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        valueStyle: PropTypes.object,
    }

    static defaultProps = {
        currency: 'CZK',
        customBase: null,
        decimalPlaces: 0,
        displayCurrency: false,
        displayNegativesRed: false,
        displayUnits: false,
        emptyValue: '-',
    }

    formatNumber = (inputValue) => {
        const {
            currency,
            currencyStyle,
            customBase,
            decimalPlaces,
            displayCurrency,
            displayNegativesRed,
            displayUnits,
            dontFormatValue,
            emptyValue,
            unitsStyle,
            valueStyle,
        } = this.props

        let base = getNumberBase(inputValue)
        if (!_.isNil(customBase) && typeof customBase === 'number') base = getNumberBase(customBase)
        if (!_.isNil(customBase) && typeof customBase === 'object') base = customBase

        if (dontFormatValue) {
            return (
                <span className={classnames(displayNegativesRed && inputValue < 0 && styles.negative)}>
                    <span className={styles.value} style={{ ...valueStyle }}>
                        {!_.isNil(inputValue) ? inputValue : emptyValue}
                    </span>
                    {displayUnits && base?.translate && !_.isNil(inputValue) && (
                        <span className={styles.units} style={{ ...unitsStyle }}>
                            <FormattedMessage id={`global.${base?.translate}`} defaultMessage={' '} />
                        </span>
                    )}
                    {displayCurrency && !_.isNil(inputValue) && (
                        <span className={styles.currency} style={{ ...currencyStyle }}>
                            <FormattedMessage id={`global.${currency}`} defaultMessage={' '} />
                        </span>
                    )}
                </span>
            )
        }

        return (
            <span className={classnames(displayNegativesRed && inputValue < 0 && styles.negative)}>
                <span className={styles.value} style={{ ...valueStyle }}>
                    {formatValueByBase(inputValue, base?.base, decimalPlaces, emptyValue)}
                </span>
                {displayUnits && base?.translate && !_.isNil(inputValue) && (
                    <span className={styles.units} style={{ ...unitsStyle }}>
                        <FormattedMessage id={`global.${base?.translate}`} defaultMessage={' '} />
                    </span>
                )}
                {displayCurrency && !_.isNil(inputValue) && (
                    <span className={styles.currency} style={{ ...currencyStyle }}>
                        <FormattedMessage id={`global.${currency}`} defaultMessage={' '} />
                    </span>
                )}
            </span>
        )
    }

    render() {
        const { value, emptyValue } = this.props

        if (_.isNil(value)) return emptyValue

        return this.formatNumber(value)
    }
}
