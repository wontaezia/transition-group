import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Menu({ routes }) {
    return (
        <div class="menu">
            <ul class="menu__left">
                <li>
                    <span class="menu__bubble">96</span>
                    <h3>eXperience</h3>
                </li>
                <li>
                    <h3>About</h3>
                </li>
                <li>
                    <h3>Contact</h3>
                </li>
                <li>
                    <span class="menu__bubble">6</span>
                    <h3>Hiring</h3>
                </li>
            </ul>
            <div class="menu__right">
                <div class="menu__news">
                    <a href="#">
                        <h3>News</h3>
                    </a>
                </div>
                {routes.map(({ id, path, label }) => (
                    <NavLink className="header__partners" strict exact to={path} key={id} activeClassName="nav--active">
                        {label}
                    </NavLink>
                ))}
                <div class="menu__object">
                    <a href="#">
                        <h3>Plus X Object</h3>
                        <span>Plus inspiration for your creative,</span>
                        <span>Plus object for your life.</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;
