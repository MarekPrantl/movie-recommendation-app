import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import cx from 'classnames'

import './styles.scss'

export default class Notice extends Component {
    static propTypes = {
        type: PropTypes.string,
        errorType: PropTypes.string,
    }

    renderContent = () => {
        const { type, errorType } = this.props

        switch (type) {
            case 'error': {
                return (
                    <Typography>
                        {errorType === 'wrongCredentials' ? 'Invalid username and/or password' : 'INTERNAL_ERROR'}
                    </Typography>
                )
            }
        }
    }

    render() {
        const { type } = this.props

        return (
            <div className={cx('notice', `notice--${type}`)}>
                <div className={'notice-body'}>{this.renderContent()}</div>
            </div>
        )
    }
}
