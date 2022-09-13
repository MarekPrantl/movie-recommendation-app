import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import './styles.scss'

export default class Header extends Component {
    render() {
        return (
            <div className={'home-header'}>
                <AppBar position={'static'} className={'home-header-bar'}>
                    <Container maxWidth="lg">
                        <Typography className={'home-title'} variant={'h6'} noWrap>
                            {'Movie recommender'}
                        </Typography>
                    </Container>
                </AppBar>
            </div>
        )
    }
}
