import _ from 'lodash'

import { NUMBER_BASES } from './constants'

/**
 * Returns a object containing number base based on input number
 * Returned object is specified in NUMBER_BASES constant
 * @param {number} value - Input value used to get base
 * @returns {object} Object containing base
 * */
export const getNumberBase = (value) => {
    if (!_.isFinite(value)) return null

    const numberLength = Math.abs(parseInt(value, 10)).toString().length

    return _.find(NUMBER_BASES, ({ range }) => _.inRange(numberLength, ...range))
}

/**
 * Formats input value based on base
 * @example
 * // Returns '12.69'
 * formatValueByBase(12694207, 1000000 ;
 * @param {number} value - Input value to be formatted
 * @param {number} base - Base used to format value
 * @returns {string} Formatted string
 */
export const formatValueByBase = (value, base = 1, decimalPlaces = 2, emptyValue = '-') => {
    if (!_.isFinite(value) || _.isNil(value) || base <= 0 || !_.isNumber(base)) return emptyValue

    const number = Math.abs(value)

    let output = (number / base)
        .toFixed(decimalPlaces)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    if (value < 0) output = `-${output}`

    return output
}
