import React from 'react';
import styled, { css } from 'styled-components';

function Main() {
    return (
        <Container>
            <Shapes>
                {lines.map(({ id, x, y, width }) => (
                    <Line className="line" key={id} x={x} y={y} width={width}>
                        <span />
                    </Line>
                ))}
            </Shapes>
            <Photo className="photo" />
            <Title className="title">
                <h2>
                    <strong>V</strong>IVAWUS
                </h2>
                <p>non volutpat metus convallis Integer porttitor ac</p>
                <span />
            </Title>
        </Container>
    );
}

export default Main;

const lines = [
    {
        id: 1,
        x: 77,
        y: 49,
        width: 120,
    },
    {
        id: 2,
        x: 37,
        y: 3,
        width: 299,
    },
    {
        id: 3,
        x: 94,
        y: 72,
        width: 277,
    },
    {
        id: 4,
        x: 28,
        y: 92,
        width: 207,
    },
    {
        id: 5,
        x: 66,
        y: 4,
        width: 330,
    },
    {
        id: 6,
        x: 12,
        y: 51,
        width: 145,
    },
    {
        id: 7,
        x: 98,
        y: 88,
        width: 308,
    },
    {
        id: 8,
        x: 84,
        y: 88,
        width: 94,
    },
];

const Container = styled.div`
    opacity: 0;
`;

const Shapes = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 3;
    pointer-events: none;
`;

const Line = styled.div`
    display: inline-block;
    position: absolute;
    ${({ x, y, width }) => css`
        top: ${y}%;
        left: ${x}%;
        width: ${width}px;
    `};
    transform: rotate(135deg);

    span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.$black};
    }
`;

const Photo = styled.div`
    position: absolute;
    top: calc(50% - 30vh);
    left: 0;
    width: 100%;
    height: 60vh;
    transform: translateY(60px);
    background: url(/images/main-photo.png) left no-repeat;
    background-size: contain;
    opacity: 0;
`;

const Title = styled.div`
    ${({ theme }) => theme.flex('center', 'center', 'column')};
    position: relative;
    width: 100%;
    height: 100vh;
    opacity: 0.85;
    z-index: 2;
    mix-blend-mode: multiply;

    h2,
    p,
    span {
        transform: translateY(40px);
        opacity: 0;
    }

    h2 {
        font-size: 100px;
        font-weight: 300;
        font-family: 'Jost', sans-serif;
        letter-spacing: 0.2em;
    }

    p {
        font-size: 18px;
        font-weight: normal;
    }

    strong {
        font-weight: 700;
    }

    span {
        display: inline-block;
        position: relative;
        width: 180px;
        height: 3px;
        margin-top: 50px;
        background-color: ${({ theme }) => theme.$black};
    }
`;
