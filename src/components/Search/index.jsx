import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

import Breadcrumbs from '../../global/components/Breadcrumbs'

import ListItem from './components/ListItem'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class Search extends Component {
    static propTypes = {
        history: PropTypes.object,
        searchQuery: PropTypes.string,
        searchLoadResults: PropTypes.func.isRequired,
        searchSetQuery: PropTypes.func.isRequired,
        data: PropTypes.array,
        loading: PropTypes.bool,
    }

    constructor(props) {
        super(props)

        this.state = {
            searchValue: props?.searchQuery ?? '',
        }
    }

    handleSearchInputChange = (e) => {
        const value = e.target.value

        this.setState({ searchValue: value })
    }

    handleSearchInputKeyDown = (e) => {
        const { searchSetQuery, searchLoadResults } = this.props
        const { searchValue } = this.state

        if (e.keyCode === 13) {
            searchSetQuery(searchValue)
            searchLoadResults(searchValue)
        }
    }

    componentDidMount() {
        const { searchQuery, searchLoadResults } = this.props

        if (!searchQuery) {
            return null
        }

        searchLoadResults(searchQuery)
    }

    componentDidUpdate(prevProps) {
        const { searchQuery: prevSearchQuery } = prevProps
        const { searchQuery, searchLoadResults } = this.props

        if (prevSearchQuery !== searchQuery) {
            searchLoadResults(searchQuery)
            return null
        }
    }

    renderData = () => {
        const { loading, data } = this.props

        if (loading) {
            return <Typography>{'Loading...'}</Typography>
        }

        if (_.isEmpty(data)) {
            return <Typography>{'No results found'}</Typography>
        }

        return data?.map((movie, index) => <ListItem key={index} data={movie} />)
    }

    render() {
        const { searchValue } = this.state
        const { searchQuery } = this.props

        return (
            <div className="search">
                <Breadcrumbs paths={[{ title: 'Home', path: '/' }, { title: 'Search' }]} />
                <Typography variant={'h5'}>{'Search'}</Typography>
                <div className="input-field">
                    <input
                        type={'text'}
                        className={'text-input'}
                        name={'search'}
                        placeholder={'Search...'}
                        value={searchValue ?? ''}
                        onChange={this.handleSearchInputChange}
                        onKeyDown={this.handleSearchInputKeyDown}
                    ></input>
                    <Typography>
                        <small>{'The search is not perfect. Write whole words for the search to work the best.'}</small>
                    </Typography>
                </div>
                <div className="search-results">
                    <div className="results-title">
                        <Typography variant={'h6'}>{`Search results for: ${searchQuery}`}</Typography>
                    </div>
                    <div className={'results-list'}>{this.renderData()}</div>
                </div>
            </div>
        )
    }
}
