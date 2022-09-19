import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import './styles.scss'
import Money from '../../../../global/components/Money'

@injectIntl
export default class AdditionalInfo extends Component {
    static propTypes = {
        data: PropTypes.object,
        intl: PropTypes.object,
    }

    render() {
        const { data, intl } = this.props

        return (
            <div className={'movie-additional-info'}>
                <div className="grid-wrapper">
                    <div className="grid-column">
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.status' })}
                            </Typography>
                            <Typography>{data?.status}</Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h6">{'Budget'}</Typography>
                            <Typography>
                                <Money value={{ amount: data?.budget, currency: 'USD' }} />
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h6">{'Revenue'}</Typography>
                            <Typography>
                                <Money value={{ amount: data?.revenue, currency: 'USD' }} />
                            </Typography>
                        </Box>
                    </div>
                    <div className="grid-column">
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.productionCountries' })}
                            </Typography>
                            {data?.production_countries?.map((country) => (
                                <Typography key={`production-country-${country?.name}`}>{country?.name}</Typography>
                            ))}
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.productionCompanies' })}
                            </Typography>
                            {data?.production_companies?.map((company) => (
                                <Typography key={`production-company-${company?.name}`}>
                                    {company?.name}
                                    {` (${company?.origin_country})`}
                                </Typography>
                            ))}
                        </Box>
                    </div>
                    <div className="grid-column">
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.voteCount' })}
                            </Typography>
                            <Typography>{data?.vote_count ? data?.vote_count : '-'}</Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.popularityScore' })}
                            </Typography>
                            <Typography>{data?.popularity ? parseInt(data?.popularity) : '-'}</Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant="h6">
                                {intl.formatMessage({ id: 'movie.additional.voteAverage' })}
                            </Typography>
                            <Typography>{`${
                                data?.vote_average ? `${parseInt(data?.vote_average * 10)} %` : '-'
                            }`}</Typography>
                        </Box>
                    </div>
                </div>
            </div>
        )
    }
}
