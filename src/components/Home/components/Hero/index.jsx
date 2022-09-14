import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Header extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
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
        const { push } = this.props
        const { searchValue } = this.state

        if (e.keyCode === 13) {
            push('/search', { searchValue })
        }
    }

    render() {
        return (
            <div className={'hero'}>
                <div className="overlay"></div>
                <div className="text-container">
                    <Typography variant={'h3'}>{'Welcome!'}</Typography>
                    <Typography variant={'h5'}>{'Looking for a movie recommendation? Look no further!'}</Typography>
                    <div className="search-bar">
                        <div className="search-icon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            className={'search-input'}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={this.handleSearchInputKeyDown}
                            onChange={this.handleSearchInputChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
