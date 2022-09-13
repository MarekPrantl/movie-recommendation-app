import _ from 'lodash'
import { encode } from 'querystring'

import { getParamString, getParamObject, parametrize, getJsonResult, getBlobResult } from './helpers/fetch'
import ApiError from '../error/apiError'

export default function (...params) {
    // default request options
    let reqOptions = _.merge(
        {
            mode: 'cors',
        },
        ..._.map(params, (p) => _.omit(p, ['uri', 'body', 'formData', 'uriParams', 'qs']))
    )

    const skipHeaders = _.get(
        _.find(params, (p) => p.skipHeaders),
        'skipHeaders',
        false
    )

    if (!skipHeaders) {
        reqOptions = _.merge(
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
            reqOptions
        )
    }

    let uri = getParamString(params, 'uri')
    const body = getParamObject(params, 'body')
    const formData = getParamString(params, 'formData')
    const uriParams = getParamObject(params, 'uriParams')
    const qs = getParamObject(params, 'qs')

    if (!_.isEmpty(body)) {
        reqOptions.body = JSON.stringify(body)
    }

    if (formData) {
        reqOptions.body = formData
        reqOptions.headers = _.omit(reqOptions.headers, ['Content-Type', 'Accept'])
    }

    if (!_.isEmpty(uriParams)) {
        uri = parametrize(uri, uriParams)
    }

    const _qs = { ...qs, api_key: process.env.TMDB_API_KEY }

    if (!_.isEmpty(_qs)) {
        uri = `${uri}?${encode(_qs)}`
    }

    // eslint-disable-next-line no-undef
    return fetch(uri, reqOptions)
        .then((_response) => {
            if (!_response.ok) {
                throw new ApiError(_response.statusText, null, _response.status, _response, uri)
            }

            if (_response.headers.get('content-type') && _response.headers.get('content-type').indexOf('json') > -1) {
                return getJsonResult(_response)
            }

            if (
                (_response.headers.get('content-disposition') &&
                    _response.headers.get('content-disposition').indexOf('attachment') > -1) ||
                (_response.headers.get('content-type') &&
                    (_response.headers.get('content-type').indexOf('application/octet-stream') > -1 ||
                        _response.headers.get('content-type').indexOf('application/pdf') > -1 ||
                        _response.headers.get('content-type').indexOf('application/xls') > -1))
            ) {
                return getBlobResult(_response)
            }

            return _response
        })
        .catch((_err) => {
            if (_.isFinite(_err.code)) throw _err
            throw new ApiError(null, null, 500, null, uri)
        })
}
