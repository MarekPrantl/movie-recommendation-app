import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from './actions'

function mapStateToProps(state) {
    return {
        loading: state.getIn(['authorization', 'loading'], false),
        error: state.getIn(['authorization', 'error'], null),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default function (InnerComponent) {
    @connect(mapStateToProps, mapDispatchToProps)
    class HocConnect extends Component {
        render() {
            return <InnerComponent {...this.props} />
        }
    }

    return HocConnect
}
