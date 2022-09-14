import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import messages from '../i18n/messages'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Movie from '../components/Movie'
import Search from '../components/Search'

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

export default class App extends Component {
    render() {
        const locale = defaultLocale

        return (
            <IntlProvider textComponent="span" key={locale} locale={locale} messages={messages[locale]}>
                <ThemeProvider theme={theme}>
                    <div className={'app-container'}>
                        <Header />
                        <Container maxWidth="lg">
                            <Switch>
                                <Route path={'/'} exact render={() => <Home />} />
                                <Route path={'/movie/:id'} exact render={() => <Movie {...this.props} />} />
                                <Route path={'/movie'} exact render={() => <Movie {...this.props} />} />
                                <Route path={'/search'} exact render={() => <Search {...this.props} />} />
                            </Switch>
                        </Container>
                        <Footer />
                    </div>
                </ThemeProvider>
            </IntlProvider>
        )
    }
}
