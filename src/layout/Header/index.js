import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Nav from 'layout/Header/styles';
import Menu from 'layout/Header/Menu';

function Header() {
    return (
        <Nav.Container>
            <Nav.Logo>
                <Nav.Plus>
                    <span />
                    <span />
                </Nav.Plus>
                <Nav.Ex>
                    <span />
                    <span />
                </Nav.Ex>
            </Nav.Logo>
            {routes.map(({ id, path, label }) => (
                <NavLink className="header__partners" strict exact to={path} key={id} activeClassName="nav--active">
                    {label}
                </NavLink>
            ))}
            <Nav.MenuButton>
                <span className="line1" />
                <span className="line2" />
            </Nav.MenuButton>
            <Menu routes={routes} />
        </Nav.Container>
    );
}

export default Header;

const routes = [
    {
        id: 1,
        path: '/union',
        label: 'Union',
    },
    {
        id: 2,
        path: '/union/plus-x',
        label: 'Plus X',
    },
    {
        id: 3,
        path: '/union/plus-a',
        label: 'Plus A',
    },
    {
        id: 4,
        path: '/union/huskyfox',
        label: 'Huskyfox',
    },
    {
        id: 5,
        path: '/union/cosmicray',
        label: 'Cosmicray',
    },
];
