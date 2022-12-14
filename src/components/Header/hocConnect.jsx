import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

function mapStateToProps(state) {
    return {
        isAuthorized: state.getIn(['authorization', 'isAuthorized'], false),
        user: state.getIn(['authorization', 'user'], false),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ push }, dispatch)
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
