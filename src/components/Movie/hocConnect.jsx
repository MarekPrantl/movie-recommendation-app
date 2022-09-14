import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadMovieData, deleteAllMovieData } from './actions'

function mapStateToProps(state) {
    return {
        data: state.getIn(['movie', 'data'], {}),
        loading: state.getIn(['movie', 'loading'], false),
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loadMovieData, deleteAllMovieData }, dispatch)
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
