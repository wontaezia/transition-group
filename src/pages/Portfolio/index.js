import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Title from 'components/common/Title';
import { device } from 'styles/device';

gsap.registerPlugin(ScrollTrigger);

function Portfolio({ isPlayedOnce, portfolio }) {
    const history = useHistory();
    const location = useLocation();

    const setCardTrigger = () => {
        const cards = gsap.utils.toArray('.portfolio li');

        cards.forEach((card, i) => {
            ScrollTrigger.create({
                trigger: card,
                start: '10% 90%',
                onEnter: () => {
                    gsap.to(card, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'Power1.easeInOut',
                        delay: (i, { dataset: { stagger } }) => stagger * 0.1,
                    });
                },
            });
        });
    };

    // 지금 방식대로 페이지 이동없이 컴포넌트만 띄우는 거라면
    // 쿼리문과 react-router-dom 라이브러리에 있는 useLocation 이용해서 가능할 것 같습니다.

    const now = location.search;

    const goToDetailPage = (id) => {
        history.push(`?name=${id}`);
    };

    useEffect(() => {
        const delay = isPlayedOnce ? 600 : 2600;

        if (!portfolio?.length) return;

        setTimeout(() => {
            setCardTrigger();
        }, delay);
    }, [portfolio]);

    useEffect(() => {
        console.log(now);
    }, [now]);

    return (
        <Container className="portfolio">
            <Title title="PORTFOLIO" />
            <List>
                {portfolio?.map(({ id, url, category, title, stagger }) => (
                    <li onClick={() => goToDetailPage(id)} className="button" key={id} data-stagger={stagger}>
                        <Background url={url} />
                        <Text>
                            <p>{category}</p>
                            <p>{title}</p>
                        </Text>
                    </li>
                ))}
            </List>
        </Container>
    );
}

export default React.memo(Portfolio);

const Container = styled.div`
    width: 100%;
    padding: 160px 0 100px;
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 360px;
    gap: 50px;
    width: 100%;
    max-width: 800px;
    padding: 0 30px;
    margin: 100px auto;

    li.button {
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        opacity: 0;
        transform: translateY(60px);
    }

    @media ${device.laptopL} {
        grid-template-columns: repeat(3, 360px);
        grid-auto-rows: 360px;
        gap: 30px;
        max-width: 1140px;
        padding: 0;

        li:first-child {
            grid-area: 1 / 1 / 2 / 3;
        }

        li:nth-child(7) {
            grid-area: 3 / 2 / 4 / 4;
        }
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 1;
    cursor: pointer;

    ${({ url }) => css`
        background: url(${url}) no-repeat center;
        background-size: contain;
        background-color: ${({ theme }) => theme.$beige};
    `};
`;

const Text = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 25px 40px 0;
    color: ${({ theme }) => theme.$white};
    text-align: right;
    z-index: 5;
    pointer-events: none;

    p {
        line-height: 1.7em;
        font-size: 25px;
    }

    p:nth-child(2) {
        font-weight: 700;
    }
`;
