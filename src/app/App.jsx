import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'

import messages from '../i18n/messages'

// import auth from '../services/auth'

// import Auth from '../components/Auth'
import Home from '../components/Home'
import Movie from '../components/Movie'

import './styles.scss'

const defaultLocale = 'en'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#161b22',
            contrastText: '#fff',
        },
        secondary: {
            main: '#58a6ff',
            contrastText: '#fff',
        },
    },
})

// @auth(Auth)
export default class App extends Component {
    render() {
        const locale = defaultLocale

        return (
            <IntlProvider textComponent="span" key={locale} locale={locale} messages={messages[locale]}>
                <ThemeProvider theme={theme}>
                    <div className={'app-container'}>
                        <Switch>
                            <Route path={'/'} exact render={() => <Home />} />
                            <Route path={'/movie/:id'} exact render={() => <Movie />} />
                            <Route path={'/movie'} exact render={() => <Movie />} />
                        </Switch>
                    </div>
                </ThemeProvider>
            </IntlProvider>
        )
    }
}
