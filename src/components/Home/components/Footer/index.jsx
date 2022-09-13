import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Container maxWidth="lg">
                    <Typography>{'Footer'}</Typography>
                </Container>
            </footer>
        )
    }
}
