import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import cx from 'classnames'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Header extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        searchSetQuery: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            searchValue: '',
        }
    }

    handleSearchInputChange = (e) => {
        const value = e.target.value

        this.setState({ searchValue: value })
    }

    handleSearchInputKeyDown = (e) => {
        const { push, searchSetQuery } = this.props
        const { searchValue } = this.state

        if (e.keyCode === 13) {
            searchSetQuery(searchValue)
            push('/search')
        }
    }

    render() {
        return (
            <div className={'hero'}>
                <div className="overlay"></div>
                <div className="text-container">
                    <Typography variant={'h3'}>{'Welcome!'}</Typography>
                    <Typography variant={'h5'}>{'Looking for a movie recommendation? Look no further!'}</Typography>
                    <div className="input-field search-bar without-label">
                        <input
                            type={'text'}
                            className={cx('text-input with-icon')}
                            name={'search'}
                            placeholder={'Search...'}
                            onChange={this.handleSearchInputChange}
                            onKeyDown={this.handleSearchInputKeyDown}
                        ></input>
                        <SearchIcon className={'input-icon'} />
                    </div>
                </div>
            </div>
        )
    }
}
