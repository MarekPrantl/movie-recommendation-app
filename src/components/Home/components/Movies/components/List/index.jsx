import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from './components/Item'

import './styles.scss'

export default class List extends Component {
    static propTypes = {
        data: PropTypes.array,
        listId: PropTypes.string,
    }

    render() {
        const { data, listId } = this.props

        if (data?.length <= 0) return null

        return (
            <div id={listId} className={'movies-list'}>
                {data?.map((movie, indx) => (
                    <Item key={`${listId}-movie-${indx}`} index={indx} data={movie || {}} />
                ))}
            </div>
        )
    }
}
