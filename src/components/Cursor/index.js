import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

function Cursor() {
    const onMouseMove = ({ clientX: x, clientY: y }) => {
        gsap.set('.cursor span', {
            x,
            y,
            stagger: -0.1,
        });
    };

    const onMouseEnter = () => {
        gsap.killTweensOf('.cursor span');
        gsap.to('.cursor span', {
            opacity: 0.6,
            duration: 0.3,
            ease: 'Power3.easeInOut',
        });
    };

    const onMouseLeave = () => {
        gsap.to('.cursor span', {
            opacity: 0,
            duration: 0.6,
            ease: 'Power3.easeInOut',
        });
    };

    const onMouseDown = () => {
        const tl = gsap.timeline();
        tl.to('.cursor span', {
            scale: 1.2,
            backgroundColor: '#ff7b6b',
            duration: 0.1,
            ease: 'Power3.easeOut',
        }).to('.cursor span', {
            scale: 1,
            duration: 0.12,
            ease: 'Power2.easeOut',
        });

        return tl;
    };

    const onMouseUp = () => {
        gsap.to('.cursor span', {
            backgroundColor: (index) => cursorShapes[index].color,
            opacity: 0.6,
            duration: 0.6,
            ease: 'Power3.easeOut',
        });
    };

    const onMouseHover = () => {
        gsap.killTweensOf('.cursor span');
        gsap.to('.cursor span', {
            backgroundColor: 'rgb(244,200,200)',
            opacity: 0.3,
            duration: 0.3,
            ease: 'Power3.easeInOut',
        });
    };

    useEffect(() => {
        const targets = document.querySelectorAll('button');

        targets.forEach((target) => {
            target.addEventListener('mouseenter', onMouseHover);
            target.addEventListener('mouseleave', onMouseUp);
        });

        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseenter', onMouseEnter);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mousedown', onMouseDown);
        document.body.addEventListener('mouseup', onMouseUp);
        return () => {
            document.body.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseenter', onMouseMove);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mousedown', onMouseDown);
            document.body.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <Container className="cursor">
            {cursorShapes.map(({ id, color, size }) => (
                <Shape key={id} color={color} size={size} />
            ))}
        </Container>
    );
}

export default Cursor;

const cursorShapes = [
    {
        id: 1,
        color: '#f1e3d3',
        size: 60,
    },
    {
        id: 2,
        color: '#ffa096',
        size: 40,
    },
    {
        id: 3,
        color: '#ff7b6b',
        size: 20,
    },
];

const Container = styled.div`
    pointer-events: none;
`;

const Shape = styled.span`
    display: block;
    position: fixed;
    ${({ size, color }) => css`
        width: ${size}px;
        height: ${size}px;
        margin: ${-size / 2}px 0 0 ${-size / 2}px;
        background-color: ${color};
    `}
    border-radius: 50%;
    opacity: 0;
    will-change: transform;
    pointer-events: none;
    user-select: none;
    z-index: 9999;
`;
