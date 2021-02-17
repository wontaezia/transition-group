import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from 'timelines';
import Cursor from 'layout/Cursor';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Intro from 'shared/Intro';
import Main from 'pages/Main';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Portfolio from 'pages/Portfolio';
import Detail from 'pages/Detail';

function Routes() {
    const [playOnce, setPlayOnce] = useState(false);

    return (
        <Router>
            <Cursor />
            <Header />
            {playOnce ? '' : <Intro />}
            <Route
                render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) =>
                                    play(pathname, node, appears, playOnce, setPlayOnce)
                                }
                                onExit={(node, appears) => exit(node, appears)}
                                timeout={{ enter: 750, exit: 600 }}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" render={() => <Main />} />
                                    <Route exact path="/about" render={() => <About />} />
                                    <Route exact path="/contact" render={() => <Contact />} />
                                    <Route
                                        exact
                                        path="/portfolio"
                                        render={() => <Portfolio playOnce={playOnce} />}
                                    />
                                    <Route exact path="/portfolio/:id" render={() => <Detail />} />
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
