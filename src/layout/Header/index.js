import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Nav from 'layout/Header/styles';
import Menu from 'layout/Header/Menu';

function Header() {
  const history = useHistory();

  const goToPage = (path) => {
    const {
      location: { pathname },
    } = window;
    if (path === pathname) return;
    history.push(path);
  };

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
      {partners.map(({ id, path, label }) => (
        <button
          className="header__partners"
          onClick={() => goToPage(path)}
          key={id}
        >
          {label}
        </button>
      ))}
      <Nav.MenuButton>
        <span className="line1" />
        <span className="line2" />
      </Nav.MenuButton>
      <Menu partners={partners} />
    </Nav.Container>
  );
}

export default Header;

const partners = [
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
  {
    id: 6,
    path: '/',
    label: 'Home',
  },
  {
    id: 7,
    path: '/about',
    label: 'About',
  },
];
