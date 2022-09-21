import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'

import Breadcrumbs from '../../global/components/Breadcrumbs'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Profile extends Component {
    static propTypes = {
        logout: PropTypes.func,
        push: PropTypes.func,
        user: PropTypes.object,
    }

    handleLogout = () => {
        const { logout, push } = this.props

        logout()
        push('/')
    }

    handleAddMovie = () => {
        const { push } = this.props

        push('/admin')
    }

    render() {
        const { user } = this.props

        return (
            <div className={'profile'}>
                <Breadcrumbs paths={[{ title: 'Home', path: '/' }, { title: 'Profile' }]} />
                <div className="card">
                    <Typography variant={'h4'}>{'Profile'}</Typography>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'username'}>
                                <Typography>{'Username'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'username'}
                                value={user?.username}
                                readOnly
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'email'}>
                                <Typography>{'Email'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'email'}
                                value={user?.email}
                                readOnly
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'first_name'}>
                                <Typography>{'First Name'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'first_name'}
                                value={user?.first_name}
                                readOnly
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'last_name'}>
                                <Typography>{'Last Name'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'last_name'}
                                value={user?.last_name}
                                readOnly
                            ></input>
                        </div>
                    </div>
                    {user?.admin && (
                        <div className="card-row">
                            <button className={'add-movie-btn btn-full-width'} onClick={this.handleAddMovie}>
                                {'Add Movie'}
                            </button>
                        </div>
                    )}
                    <div className="card-row">
                        <button className={'logout-btn btn-full-width'} onClick={this.handleLogout}>
                            <Typography>
                                <ExitToAppRoundedIcon className={'icon'} />
                                {'Logout'}
                            </Typography>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
