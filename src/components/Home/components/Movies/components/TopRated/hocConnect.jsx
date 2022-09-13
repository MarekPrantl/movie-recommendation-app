import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadData } from './actions'

function mapStateToProps(state) {
    return {
        data: state.getIn(['movies', 'topRated', 'data'], []),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadData }, dispatch)
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
