import React from 'react';
import styled from 'styled-components';

function Title({ title, sub }) {
    return (
        <Container className="section__title">
            <h3>{title}</h3>
            {sub ? <p>{sub}</p> : ''}
            <span />
        </Container>
    );
}

export default Title;

const Container = styled.div`
    ${({ theme }) => theme.flex(null, 'center', 'column')};
    text-align: center;
    transform: translateY(40px);
    opacity: 0;

    h3 {
        font-size: 28px;
        font-weight: 300;
        text-align: center;
    }

    p {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 300;
    }

    span {
        display: inline-block;
        width: 100px;
        height: 2px;
        margin-top: 20px;
        background-color: #000;
    }
`;
