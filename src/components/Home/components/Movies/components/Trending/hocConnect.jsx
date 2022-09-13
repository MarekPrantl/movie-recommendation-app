import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadData } from './actions'

function mapStateToProps(state, hocProps) {
    const mediaType = hocProps?.mediaType
    const timeWindow = hocProps?.timeWindow

    console.log({ mediaType, timeWindow, state })

    return {
        loading: state.getIn(['movies', 'trending', hocProps?.mediaType, hocProps?.timeWindow, 'loading'], true),
        data: state.getIn(['movies', 'trending', hocProps?.mediaType, hocProps?.timeWindow, 'data'], []),
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
