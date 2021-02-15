import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Menu({ partners }) {
    return (
        <Container>
            <Left>
                {categories.map(({ id, path, label, bubble }) => (
                    <li key={id}>
                        {bubble ? <Bubble>{bubble}</Bubble> : ''}
                        <h3>{label}</h3>
                    </li>
                ))}
            </Left>
            <Right>
                <div className="menu__news">
                    <a href="#">
                        <h3>News</h3>
                    </a>
                </div>
                {partners.map(({ id, path, label }) => (
                    <NavLink className="header__partners" strict exact to={path} key={id} activeClassName="nav--active">
                        {label}
                    </NavLink>
                ))}
                <div className="menu__object">
                    <a href="#">
                        <h3>Plus X Object</h3>
                        <span>Plus inspiration for your creative,</span>
                        <span>Plus object for your life.</span>
                    </a>
                </div>
            </Right>
        </Container>
    );
}

export default Menu;

const categories = [
    {
        id: 1,
        path: '/',
        label: 'eXperience',
        bubble: '96',
    },
    {
        id: 2,
        path: '/',
        label: 'About',
    },
    {
        id: 3,
        path: '/',
        label: 'Contact',
    },
    {
        id: 4,
        path: '/',
        label: 'Hiring',
        bubble: '6',
    },
];

const Container = styled.div``;

const Left = styled.ul``;

const Bubble = styled.span``;

const Right = styled.div``;
