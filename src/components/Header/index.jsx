import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Header extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        isAuthorized: PropTypes.bool,
        user: PropTypes.object,
    }

    handleHomeClick = () => {
        const { push } = this.props

        push('/')
    }

    handleHomeKeyPress = (e) => {
        const { push } = this.props

        if (e.charCode === 13) {
            push('/')
        }
    }

    handleProfileOnClick = () => {
        const { isAuthorized, push } = this.props

        if (!isAuthorized) {
            push('/login')
            return null
        }

        push('/profile')
        return null
    }

    render() {
        const { isAuthorized, user } = this.props

        return (
            <div className={'header'}>
                <AppBar position={'static'} className={'header-bar'}>
                    <Container maxWidth="lg" className={'container'}>
                        <div className="app-bar-row">
                            <div
                                className={'home-btn'}
                                onClick={this.handleHomeClick}
                                onKeyPress={this.handleHomeKeyPress}
                                role={'link'}
                                tabIndex={0}
                            >
                                <Typography className={'title'} variant={'h6'} noWrap>
                                    {'Movie recommender'}
                                </Typography>
                            </div>
                            <div className="app-bar-btns">
                                <button onClick={this.handleProfileOnClick} className="profile">
                                    <PersonRoundedIcon />
                                    <Typography>{!isAuthorized ? 'Sign In' : user?.username}</Typography>
                                </button>
                            </div>
                        </div>
                    </Container>
                </AppBar>
            </div>
        )
    }
}
