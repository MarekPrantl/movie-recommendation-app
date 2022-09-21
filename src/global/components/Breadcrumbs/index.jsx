import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import cx from 'classnames'

import hocConnect from './hocConnect'
import './styles.scss'

@hocConnect
export default class BreadcrumbsComponent extends Component {
    static propTypes = {
        paths: PropTypes.array,
        push: PropTypes.func.isRequired,
    }

    handleClick = (path) => {
        const { push } = this.props

        if (!path) return null

        push(path)
    }

    render() {
        const { paths } = this.props

        return (
            <div className="breadcrumbs-row">
                <Breadcrumbs separator="››" aria-label="breadcrumb">
                    {paths?.map((path) => (
                        <Link
                            key={`breadcrumbs-path-${path?.title}`}
                            className={cx('breadcrumb-link', path?.path && 'clickable')}
                            color={'inherit'}
                            onClick={() => this.handleClick(path?.path)}
                        >
                            <Typography>{path?.title}</Typography>
                        </Link>
                    ))}
                </Breadcrumbs>
            </div>
        )
    }
}
