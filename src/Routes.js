import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from 'timelines';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Main from 'pages/Main';
import About from 'pages/About';

function Routes() {
    return (
        <Router>
            <Header />
            <Route
                render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                        <TransitionGroup component={null}>
                            <Transition key={key} appear={true} onEnter={(node, appears) => play(pathname, node, appears)} onExit={(node, appears) => exit(node, appears)} timeout={{ enter: 750, exit: 150 }}>
                                <Switch location={location}>
                                    <Route exact path="/" component={Main} />
                                    <Route exact path="/about" component={About} />
                                </Switch>
                            </Transition>
                        </TransitionGroup>
                    );
                }}
            />
            <Footer />
        </Router>
    );
}

export default Routes;
