import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={'home-header'}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Typography className={'home-title'} variant={'h6'} noWrap>
                            {'Movie recommender'}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
