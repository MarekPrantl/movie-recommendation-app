import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        isAuthorized: state.getIn(['authorization', 'isAuthorized']),
    }
}

export default function (UnauthorizedComponent = null) {
    return (AuthorizedComponent) => {
        @connect(mapStateToProps)
        class Authorization extends Component {
            static propTypes = {
                isAuthorized: PropTypes.bool.isRequired,
            }

            render() {
                const { isAuthorized, ...hocProps } = this.props

                if (isAuthorized) {
                    return <AuthorizedComponent {...hocProps} />
                }

                // if (!UnauthorizedComponent || typeof UnauthorizedComponent !== 'function') {
                if (!UnauthorizedComponent) {
                    return null
                }

                return <UnauthorizedComponent {...hocProps} />
            }
        }

        return Authorization
    }
}
