import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={'hero'}>
                <Typography>{'Hero'}</Typography>
            </div>
        )
    }
}
