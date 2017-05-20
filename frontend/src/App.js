// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import typography from 'material-ui/styles/typography';
import { red500, grey50, grey900, lightWhite, white } from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FullWidthSection from './FullWidthSection';
import ShowPicker from './components/ShowPicker';
import CastList from './components/CastList';
import GithubIcon from './components/GithubIcon';

/* See http://stackoverflow.com/questions/37400648/cant-style-datepiker-popup-dialog */
const muiTheme = getMuiTheme({
    datePicker: {
        color: red500,
        selectColor: red500,
    },
    flatButton: {
        primaryTextColor: red500,
    },
});

class App extends React.Component {

    state = {
        currentShow: null,
    };

    onShowSelected = (show) => {
        this.setState({ currentShow: show });
    };

    header() {
        const styles = {
            root: {
                textAlign: 'center',
                backgroundColor: red500,
                overflow: 'hidden',
            },
            h1: {
                color: grey50,
                fontWeight: typography.fontWeightLight,
                fontSize: 48,
            },
            h2: {
                fontSize: 24,
            },
        };

        styles.h2 = Object.assign({}, styles.h1, styles.h2);

        return (
            <FullWidthSection style={styles.root}>
                <h1 style={styles.h1}>
                    Tanz der Vampire
                </h1>
                <h2 style={styles.h2}>
                    Castlisten
                </h2>
            </FullWidthSection>
        );
    };

    footer() {
        const styles = {
            root: {
                textAlign: 'center',
                backgroundColor: grey900,
                overflow: 'hidden',
            },
            p: {
                color: lightWhite,
            },
        };

        return (
            <FullWidthSection style={styles.root}>
                <div>
                    <p style={styles.p}>
                        Created by Ingo Bürk, 2017.
                    </p>
                    <IconButton href="https://github.com/tdv-casts/">
                        <GithubIcon color={white} />
                    </IconButton>
                </div>
            </FullWidthSection>
        );
    };

    search() {
        const styles = {
            root: {
                textAlign: 'center',
                backgroundColor: grey50,
                overflow: 'hidden',
            },
        };

        return (
            <FullWidthSection style={styles.root}>
                <ShowPicker
                    onChange={this.onShowSelected}
                />
            </FullWidthSection>
        );
    };

    content() {
        const { currentShow } = this.state;

        const styles = {
            root: {
                backgroundColor: grey50,
                overflow: 'hidden',
                textAlign: 'center',
            },
        };

        return (
            <div style={styles.root}>
                <CastList
                    show={currentShow}
                />
            </div>
        );
    };

    appBar() {
        const styles = {
            appBar: {
                backgroundColor: red500,
            },
        };

        return (
            <AppBar
                zDepth={0}
                style={styles.appBar}
                showMenuIconButton={false}
                iconElementRight={
                    <IconButton href="https://github.com/tdv-casts/">
                        <GithubIcon />
                    </IconButton>
                }
            />
        );
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {this.appBar()}

                    {this.header()}
                    {this.search()}
                    {this.content()}
                    {this.footer()}
                </div>
            </MuiThemeProvider>
        );
    };

}

export default App;