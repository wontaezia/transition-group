import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from 'timelines';
import Cursor from 'components/Cursor';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'components/Intro';
import Main from 'pages/Main';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Portfolio from 'pages/Portfolio';
import Detail from 'pages/Detail';

function Routes() {
    const [isPlayedOnce, setIsPlayedOnce] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkDevice = () => {
        const isMatch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        setIsMobile(isMatch);
    };

    useEffect(() => {
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return (
        <Router>
            <Header />
            {isMobile ? '' : <Cursor />}
            {isPlayedOnce ? '' : <Intro />}
            <Route
                render={({ location }) => {
                    const { pathname, key } = location;

                    return (
                        <TransitionGroup component={null}>
                            <Transition key={key} appear={true} onEnter={(node, appears) => play(pathname, node, appears, isPlayedOnce, setIsPlayedOnce)} onExit={(node, appears) => exit(node, appears)} timeout={{ enter: 750, exit: 600 }}>
                                <Switch location={location}>
                                    <Route exact path="/" render={() => <Main />} />
                                    <Route exact path="/about" render={() => <About />} />
                                    <Route exact path="/contact" render={() => <Contact />} />
                                    <Route exact path="/portfolio" render={() => <Portfolio isPlayedOnce={isPlayedOnce} />} />
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
