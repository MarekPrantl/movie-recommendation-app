import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'

import { searchLoadResults, searchSetQuery } from './actions'

function mapStateToProps(state) {
    return {
        searchQuery: state.getIn(['search', 'searchQuery'], ''),
        loading: state.getIn(['search', 'loading'], false),
        data: state.getIn(['search', 'data'], []),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchLoadResults, searchSetQuery, push }, dispatch)
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
