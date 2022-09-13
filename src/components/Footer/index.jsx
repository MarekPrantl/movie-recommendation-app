import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import './styles.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer className={'app-footer'}>
                <Container maxWidth="lg">
                    <div className="content-container">
                        <div className="disclaimer">
                            <Typography>
                                <Box component="span">{'Disclaimer: '}</Box>
                            </Typography>
                            <Typography>
                                <Box component="span" fontWeight={'fontWeightLight'}>
                                    {'This product uses the TMDB API but is not endorsed or certified by TMDB.'}
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component="span" fontWeight={'fontWeightLight'}>
                                    {
                                        'Since this application uses the TMDB API, all interactive features (admin, rating) are only mock ups.'
                                    }
                                </Box>
                            </Typography>
                        </div>
                        <div className="credits">
                            <Typography>
                                <Box component="span" fontWeight={'fontWeightBold'}>
                                    {'Created by Marek Prantl'}
                                </Box>
                            </Typography>
                        </div>
                    </div>
                </Container>
            </footer>
        )
    }
}
