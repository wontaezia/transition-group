import React from 'react';
import styled from 'styled-components';

function Intro() {
    return (
        <Container>
            <Inner className="intro">
                <Texts>
                    <Cover>
                        <span>non volutpat metus convallis</span>
                    </Cover>
                    <Cover>
                        <span>Integer porttitor ac</span>
                    </Cover>
                </Texts>
            </Inner>
            <Slider className="intro__slider" />
        </Container>
    );
}

export default Intro;

const Container = styled.div`
    & > div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
`;

const Inner = styled.div`
    ${({ theme }) => theme.flex('center', 'center')}
    background-color: ${({ theme }) => theme.$white};
    z-index: 999;
`;

const Texts = styled.div`
    color: ${({ theme }) => theme.$black};
    font-size: 80px;
    font-weight: 700;

    span {
        display: inline-block;
        transform: translateY(100%);
    }
`;

const Cover = styled.div`
    overflow: hidden;
`;

const Slider = styled.div`
    background-color: ${({ theme }) => theme.$red};
    transform: translateY(100%);
    z-index: 1000;
`;
