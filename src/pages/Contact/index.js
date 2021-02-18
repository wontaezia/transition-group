import React from 'react';
import styled, { css } from 'styled-components';
import Form from 'pages/Contact/Form';
import Title from 'components/common/Title';

function Contact() {
    return (
        <Container>
            <Inner>
                <Title title="GET IN TOUCH" />
                <Form />
            </Inner>
            <Shapes>
                {circles.map(({ id, diameter, color, right, bottom, left, y }) => (
                    <Circle className="circle" key={id} diameter={diameter} color={color} right={right} bottom={bottom} left={left} y={y} />
                ))}
            </Shapes>
        </Container>
    );
}

export default Contact;

const circles = [
    {
        id: 1,
        diameter: 1000,
        color: '#ffa095',
        right: -280,
        bottom: -430,
        y: 100,
    },
    {
        id: 2,
        diameter: 700,
        color: '#f1e3d3',
        left: 100,
        bottom: 400,
        y: -100,
    },
    {
        id: 3,
        diameter: 400,
        color: '#ff7b6b',
        right: 650,
        bottom: -250,
        y: 100,
    },
];

const Container = styled.div``;

const Inner = styled.div`
    ${({ theme }) => theme.flex('center', 'center', 'column')}
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 5;
`;

const Shapes = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Circle = styled.span`
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    opacity: 0;
    ${({ diameter, color, right, bottom, left, y }) => css`
        right: ${right ? right + 'px' : null};
        left: ${left ? left + 'px' : null};
        bottom: ${bottom}px;
        width: ${diameter}px;
        height: ${diameter}px;
        background-color: ${color};
        transform: translateY(${y}%);
    `}
`;
