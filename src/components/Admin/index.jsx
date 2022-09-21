import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import Breadcrumbs from '../../global/components/Breadcrumbs'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Admin extends Component {
    static propTypes = {
        history: PropTypes.object,
        user: PropTypes.object,
        isAuthorized: PropTypes.bool,
        push: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            data: props?.history?.location?.state?.data ?? {},
            edit: props?.history?.location?.state?.edit ?? false,
        }
    }

    handleInputChange = (e, type) => {
        let { data } = this.state

        data = { ...data, [type]: e.target.value }

        this.setState({ data: data })
    }

    handleFormSubmit = () => {
        const { push } = this.props

        push('/')
    }

    handleGoHomeClick = () => {
        const { push } = this.props

        push('/')
    }

    render() {
        const { data, edit } = this.state
        const { user, isAuthorized } = this.props

        if (!isAuthorized || !user?.admin) {
            return (
                <div className="admin-page">
                    <div className="unauthorized-notice">
                        <Typography variant={'h6'}>{'Unauthorized'}</Typography>
                        <Typography>
                            {'Login as Admin or'}
                            <button className={'buttonAsAnchor'} onClick={this.handleGoHomeClick}>
                                {'Go to Homepage'}
                            </button>
                        </Typography>
                    </div>
                </div>
            )
        }

        return (
            <div className={'admin-page'}>
                <Breadcrumbs paths={[{ title: 'Home', path: '/' }, { title: 'Admin' }]} />
                <div className="card">
                    <Typography variant={'h4'}>{edit ? 'Edit Movie' : 'Add Movie'}</Typography>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'title'}>
                                <Typography>{'Title'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'title'}
                                value={data?.title ?? data?.name ?? ''}
                                onChange={(e) => this.handleInputChange(e, data?.title ? 'title' : 'name')}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'description'}>
                                <Typography>{'Description'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'description'}
                                value={data?.overview ?? ''}
                                onChange={(e) => this.handleInputChange(e, 'overview')}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'genres'}>
                                <Typography>{'Genres'}</Typography>
                            </label>
                            <input
                                type={'text'}
                                className={'text-input'}
                                name={'genres'}
                                value={
                                    edit
                                        ? data?.genres?.map((genre) => genre?.name)?.join(', ') ?? ''
                                        : data?.genres ?? ''
                                }
                                onChange={(e) => this.handleInputChange(e, 'genres')}
                                disabled={edit}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'posterImage'}>
                                <Typography>{'Poster Image'}</Typography>
                            </label>
                            <input
                                type={'file'}
                                className={'text-input'}
                                name={'posterImage'}
                                accept="image/png, image/jpeg"
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'backdropImage'}>
                                <Typography>{'Backdrop Image'}</Typography>
                            </label>
                            <input
                                type={'file'}
                                className={'text-input'}
                                name={'backdropImage'}
                                accept="image/png, image/jpeg"
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'releaseDate'}>
                                <Typography>{'Release Date'}</Typography>
                            </label>
                            <input
                                type={'date'}
                                className={'date-input'}
                                name={'releaseDate'}
                                value={data?.release_date ?? ''}
                                onChange={(e) => this.handleInputChange(e, 'release_date')}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'adult'}>
                                <Typography>{'Adult'}</Typography>
                            </label>
                            <input
                                type={'checkbox'}
                                className={'checkbox'}
                                name={'adult'}
                                value={data?.adult ?? false}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="input-field">
                            <label className={'input-label'} htmlFor={'runtime'}>
                                <Typography>{'Runtime'}</Typography>
                            </label>
                            <input
                                type={'number'}
                                className={'number-input'}
                                name={'runtime'}
                                value={data?.runtime ?? ''}
                                onChange={(e) => this.handleInputChange(e, 'runtime')}
                            ></input>
                        </div>
                    </div>
                    <div className="card-row">
                        <div className="submit-button-wrapper">
                            <button className={'submit-btn'} onClick={this.handleFormSubmit} type={'submit'}>
                                <Typography>{edit ? 'Edit Movie' : 'Add Movie'}</Typography>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
