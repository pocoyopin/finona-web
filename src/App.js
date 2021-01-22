import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#f48fb1'
            },
            secondary: {
                main: '#4dd0e1'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route
                            path="/"
                            render={({location}) => (
                                <>
                                    <Header location={location} />
                                    <Switch>
                                        <Route path="/" component={Home} exact />
                                        <Route path="/product" component={Product} exact />
                                        <Route path="/order" component={Order} exact />
                                    </Switch>
                                </>
                            )}
                        />
                    </div>
                </BrowserRouter>      
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
