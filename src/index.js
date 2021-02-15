import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
    </ThemeProvider>,
    document.getElementById('root')
);
