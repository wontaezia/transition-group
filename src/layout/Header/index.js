import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    const history = useHistory();
    const [activeMenu, setActiveMenu] = useState('');

    const goToPage = (path) => {
        const {
            location: { pathname },
        } = window;

        if (path === pathname) return;
        setActiveMenu(path);
        history.push(path);
    };

    const handleActiveMenu = () => {
        const {
            location: { pathname },
        } = window;

        setActiveMenu(pathname);
    };

    useEffect(() => {
        handleActiveMenu();
    }, []);

    return (
        <Container>
            <Logo onClick={() => goToPage('/')}>HARRY</Logo>
            <Menus>
                {routes.map(({ id, path, label }) => (
                    <li key={id}>
                        <button
                            className={
                                activeMenu === path
                                    ? 'header__partners is-active'
                                    : 'header__partners'
                            }
                            onClick={() => {
                                goToPage(path);
                            }}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </Menus>
        </Container>
    );
}

export default Header;

const routes = [
    {
        id: 1,
        path: '/',
        label: 'HOME',
    },
    {
        id: 2,
        path: '/about',
        label: 'ABOUT ME',
    },
    {
        id: 3,
        path: '/portfolio',
        label: 'PORTFOLIO',
    },
    {
        id: 4,
        path: '/contact',
        label: 'CONTACT',
    },
];

const Container = styled.header`
    ${({ theme }) => theme.flex('space-between', 'center')}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 50px;
    color: ${({ theme }) => theme.$darkGray};
    z-index: 20;
    pointer-events: none;
`;

const Logo = styled.h1`
    font-family: 'Jost', sans-serif;
    font-weight: bold;
    font-size: 16px;
    pointer-events: initial;
`;

const Menus = styled.ul`
    ${({ theme }) => theme.flex('space-between', 'center')}

    li {
        pointer-events: initial;
    }

    button {
        margin-left: 50px;
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.$darkGray};
        transform: all 0.3s;
    }

    button.is-active {
        color: #ff7b6b;
    }
`;
