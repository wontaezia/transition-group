import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/common/Title';
import { rightArrow as Arrow } from 'components/common/icons';
import { device } from 'styles/device';

function Detail({ portfolio }) {
    const { id } = useParams();
    const history = useHistory();
    const { url, category, title, description } = portfolio?.[id - 1] || {};

    return (
        <Container>
            <IconContainer className="prev-page-button" onClick={() => history.push('/portfolio')}>
                <Arrow color={'#121212'} />
            </IconContainer>
            <Title title={title} sub={category} />
            <ImageContainer className="image">
                <img src={url} alt={title} />
            </ImageContainer>
            <Description>{description}</Description>
        </Container>
    );
}

export default React.memo(Detail);

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 160px 30px 100px;
    margin: 0 auto;
    ${({ theme }) => theme.flex(null, 'center', 'column')};

    @media ${device.tablet} {
        padding: 160px 100px 100px;
    }
`;

const IconContainer = styled.div`
    transform: rotate(180deg) translateY(-40px);
    position: absolute;
    left: 100px;
    cursor: pointer;
    opacity: 0;
`;

const ImageContainer = styled.div`
    margin-top: 100px;
    background-color: ${({ theme }) => theme.$beige};
    opacity: 0;
    transform: translateY(40px);

    img {
        width: 100%;
        max-height: 600px;
        object-fit: contain;
    }
`;

const Description = styled.p`
    padding: 60px 0;
    font-size: 22px;
    letter-spacing: 0.8px;
    line-height: 1.8;
    opacity: 0;
    transform: translateY(40px);
`;
