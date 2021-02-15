import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Menu from 'layout/Header/Menu';

function Header() {
    return (
        <Container>
            <Logo>
                <Plus>
                    <span />
                    <span />
                </Plus>
                <Ex>
                    <span />
                    <span />
                </Ex>
            </Logo>
            {routes.map(({ id, path, label }) => (
                <NavLink className="header__partners" strict exact to={path} key={id} activeClassName="nav--active">
                    {label}
                </NavLink>
            ))}
            <MenuButton>
                <span className="line1" />
                <span className="line2" />
            </MenuButton>
            <Menu routes={routes} />
        </Container>
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

export const Container = styled.nav`
    ${({ theme }) => theme.flex('center', 'center')}

    .nav--active {
        color: #f00;
    }
`;

export const Logo = styled.h1``;

export const Plus = styled.div``;

export const Ex = styled.div``;

export const MenuButton = styled.button``;
