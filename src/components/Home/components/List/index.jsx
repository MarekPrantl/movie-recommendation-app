import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import './styles.scss'

export default class List extends Component {
    render() {
        return (
            <div className={'movies-list'}>
                <Typography className={'movies-list-title'} variant={'h2'} noWrap>
                    {'Movies'}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>{'Movie'}</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
