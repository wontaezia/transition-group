import styled from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => theme.flex('center', 'center')}

  .nav--active {
    color: #f00;
  }

  font-size: 40px;
  font-weight: 700;
`;

export const Logo = styled.h1``;

export const Plus = styled.div``;

export const Ex = styled.div``;

export const MenuButton = styled.button``;
