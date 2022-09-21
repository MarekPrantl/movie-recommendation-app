import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded'
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded'
import cx from 'classnames'

import Breadcrumbs from '../../global/components/Breadcrumbs'

import Notice from './components/Notice'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        error: PropTypes.object,
        loading: PropTypes.bool,
    }

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            emptyUsername: false,
            emptyPassword: false,
            showPassword: false,
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { login, loading } = this.props
        const { username, password } = this.state

        if (loading) return null

        if (username === '') {
            this.setState({ emptyUsername: true })
            return null
        }

        if (password === '') {
            this.setState({ emptyPassword: true })
            return null
        }

        login(username, password)
    }

    handlePasswordVisibilityClick = () => {
        const { showPassword } = this.state

        this.setState({ showPassword: !showPassword })
    }

    handleInputChange = (e, type) => {
        const { loading } = this.props

        if (loading) return null

        if (type === 'username') this.setState({ emptyUsername: false })
        if (type === 'password') this.setState({ emptyPassword: false })

        this.setState({ [type]: e.target.value })
    }

    renderContent = () => {
        const { error, loading } = this.props
        const { emptyUsername, emptyPassword, showPassword } = this.state

        return (
            <div className="form-wrapper">
                <Typography variant={'h1'} className={'form-title'}>
                    {'Login'}
                </Typography>
                {error && (
                    <Notice type={'error'} errorType={error?.code === 401 ? 'wrongCredentials' : 'commonError'} />
                )}

                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-field">
                        <label
                            className={cx(
                                'input-label',
                                loading && 'disabled',
                                error?.code === 401 && 'error',
                                emptyUsername && 'error'
                            )}
                            htmlFor={'username'}
                        >
                            <Typography>{'Username'}</Typography>
                        </label>
                        <input
                            type={'text'}
                            className={cx(
                                'text-input with-icon',
                                error?.code === 401 && 'error',
                                emptyUsername && 'error'
                            )}
                            name={'username'}
                            disabled={loading}
                            onChange={(e) => this.handleInputChange(e, 'username')}
                            required
                        ></input>
                        <PersonRoundedIcon
                            className={cx('input-icon', error?.code === 401 && 'error', emptyUsername && 'error')}
                        />
                        {emptyUsername && <p className={'input-subtext error'}>{'This field cannot be empty'}</p>}
                    </div>
                    <div className="input-field">
                        <label
                            className={cx(
                                'input-label',
                                loading && 'disabled',
                                error?.code === 401 && 'error',
                                emptyPassword && 'error'
                            )}
                            htmlFor={'password'}
                        >
                            <Typography>{'Password'}</Typography>
                        </label>
                        <input
                            type={!showPassword ? 'password' : 'text'}
                            className={cx(
                                'text-input with-icon with-visib-icon',
                                error?.code === 401 && 'error',
                                emptyPassword && 'error'
                            )}
                            name={'password'}
                            disabled={loading}
                            onChange={(e) => this.handleInputChange(e, 'password')}
                            required
                        ></input>
                        <LockRoundedIcon
                            className={cx('input-icon', error?.code === 401 && 'error', emptyPassword && 'error')}
                        />
                        {!showPassword ? (
                            <VisibilityRoundedIcon
                                className={'pass-visib-icon'}
                                onClick={this.handlePasswordVisibilityClick}
                            />
                        ) : (
                            <VisibilityOffRoundedIcon
                                className={'pass-visib-icon'}
                                onClick={this.handlePasswordVisibilityClick}
                            />
                        )}
                        {emptyPassword && <p className={'input-subtext error'}>{'This field cannot be empty'}</p>}
                    </div>
                    <div className="submit-button-wrapper">
                        <button
                            disabled={loading}
                            className={'submit-btn'}
                            onClick={this.handleFormSubmit}
                            type={'submit'}
                        >
                            {loading && <CircularProgress size={20} className={'spinner'} />}
                            <Typography>{'Continue'}</Typography>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <>
                <Breadcrumbs paths={[{ title: 'Home', path: '/' }, { title: 'Login' }]} />
                <div className={'login'}>{this.renderContent()}</div>
            </>
        )
    }
}
