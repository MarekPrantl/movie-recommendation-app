import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import './styles.scss'

export default class Header extends Component {
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
                        />
                    </div>
                </div>
            </div>
        )
    }
}
