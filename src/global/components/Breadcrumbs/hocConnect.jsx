import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ push }, dispatch)
}

export default function (InnerComponent) {
    @connect(null, mapDispatchToProps)
    class HocConnect extends Component {
        render() {
            return <InnerComponent {...this.props} />
        }
    }

    return HocConnect
}
