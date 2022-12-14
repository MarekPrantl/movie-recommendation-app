import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import Login from '../components/Login'
import Profile from '../components/Profile'
import Admin from '../components/Admin'

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
    static propTypes = {
        history: PropTypes.object,
    }

    render() {
        const { history } = this.props
        const locale = defaultLocale

        const pathKey = history?.location?.key

        return (
            <IntlProvider textComponent="span" key={locale} locale={locale} messages={messages[locale]}>
                <ThemeProvider theme={theme}>
                    <div className={'app-container'}>
                        <Header />
                        <Container maxWidth="lg">
                            <Switch>
                                <Route path={'/'} exact render={() => <Home key={pathKey} />} />
                                <Route
                                    path={'/movie/:id'}
                                    exact
                                    render={() => <Movie history={history} key={pathKey} />}
                                />
                                <Route path={'/movie'} exact render={() => <Movie history={history} key={pathKey} />} />
                                <Route
                                    path={'/search'}
                                    exact
                                    render={() => <Search history={history} key={pathKey} />}
                                />
                                <Route path={'/login'} exact render={() => <Login history={history} key={pathKey} />} />
                                <Route path={'/profile'} exact render={() => <Profile key={pathKey} />} />
                                <Route path={'/admin'} exact render={() => <Admin history={history} key={pathKey} />} />
                            </Switch>
                        </Container>
                        <Footer />
                    </div>
                </ThemeProvider>
            </IntlProvider>
        )
    }
}
