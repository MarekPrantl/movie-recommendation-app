import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class BreadcrumbsRow extends Component {
    static propTypes = {
        data: PropTypes.object,
        push: PropTypes.func.isRequired,
        noId: PropTypes.bool,
    }

    handleClick = (path) => {
        const { push } = this.props

        if (!path) return null

        push(path)
    }

    render() {
        const { data, noId } = this.props

        return (
            <div className="breadcrumbs-row">
                {!noId ? (
                    <Breadcrumbs separator="››" aria-label="breadcrumb">
                        <Link className={'breadcrumb-link'} color="inherit" onClick={() => this.handleClick('/')}>
                            {'Home'}
                        </Link>
                        <Link className={'breadcrumb-link'} color="textPrimary" onClick={() => this.handleClick(null)}>
                            {data?.title ?? data?.name ?? 'Missing title'}
                        </Link>
                    </Breadcrumbs>
                ) : (
                    <Link className={'breadcrumb-link'} color="inherit" onClick={() => this.handleClick('/')}>
                        {'Home'}
                    </Link>
                )}
            </div>
        )
    }
}
