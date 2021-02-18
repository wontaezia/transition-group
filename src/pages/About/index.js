import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';

function About() {
    return (
        <Container>
            <Contents>
                <Title title="METUS CONVALLIS" />
                <Introduce>
                    <p>Nam dapibus risus in mi maximus, at auctor leo convallis. Etiam sit amet nunc porttitor, eleifend nunc in, egestas dolor. Nam sodales, est id vulputate pellentesque, justo mi sollicitudin arcu, eu ultrices tortor lacus a leo. Praesent et magna ex. Nam fringilla ex et nunc hendrerit semper. Sed commodo consectetur risus, eget varius lacus egestas ut. Donec laoreet vitae metus sed elementum. Proin in leo augue. Morbi ornare eros sit amet erat tincidunt, non volutpat metus convallis. Nulla pretium est vitae velit sollicitudin finibus. Quisque vel eros aliquet, lacinia arcu at, ullamcorper sapien.</p>
                </Introduce>
            </Contents>
            <Contents>
                <Background className="photo" />
            </Contents>
        </Container>
    );
}

export default About;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 200px 100px 0;
    overflow: hidden;
`;

const Contents = styled.div`
    ${({ theme }) => theme.flex('flex-start', 'center', 'column')};
    position: relative;

    &:nth-of-type(1) {
        transform: translateX(100px);
    }

    &:nth-of-type(2) {
        min-width: 800px;
        transform: translateX(-60px);
    }
`;

const Introduce = styled.div`
    margin-top: 80px;
    padding: 50px 50px 50px 100px;
    overflow: scroll;

    p {
        font-size: 20px;
        line-height: 1.6em;
        transform: translateY(40px);
        opacity: 0;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: url(/images/about-me.png) center bottom no-repeat;
    background-size: contain;
    transform: translateY(40px);
    opacity: 0;
`;
