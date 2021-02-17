import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Title from 'shared/Title';
import { rightArrow as Arrow } from 'shared/Icons';

function Detail() {
    const [portfolioInfo, setPortfolioInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();

    /* path에 따른 동적 라우팅
    const getPortfolioInfo = async () => {
        try {
            const options = {
                method: 'get',
                url: `${API}/portfolio?id=${id}`,
            };

            const { data } = await axios(options);
            setPortfolioInfo(data);
        } catch (error) {
            console.error(error);
        }
    };
    */

    // MockData 활용..
    const getPortfolioInfo = async () => {
        try {
            const options = {
                method: 'get',
                url: `/data/portfolio.json`,
            };

            const {
                data: { portfolio },
            } = await axios(options);

            setPortfolioInfo(portfolio[id - 1]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPortfolioInfo();
    }, []);

    const { url, category, title, description } = portfolioInfo;

    return (
        <Container>
            <IconContainer className="icon" onClick={() => history.push('/portfolio')}>
                <Arrow />
            </IconContainer>
            <Title title={title} sub={category} />
            <ImageContainer className="image">
                <img src={url} alt={title} />
            </ImageContainer>
            <Description>{description}</Description>
        </Container>
    );
}

export default Detail;

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 160px 100px 100px;
    margin: 0 auto;
    ${({ theme }) => theme.flex(null, 'center', 'column')};
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
    padding: 30px 0;
    font-size: 22px;
    letter-spacing: 0.8px;
    line-height: 1.8;
`;
