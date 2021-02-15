import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

function Cursor() {
  const setDefaultCursor = ({ clientX: x, clientY: y }) => {
    gsap.set('.cursor span', {
      x,
      y,
      stagger: -0.1,
    });
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', setDefaultCursor);
    return () =>
      document.body.removeEventListener('mousemove', setDefaultCursor);
  }, []);

  return (
    <Container className="cursor">
      <Shape color="#f1e3d3" size="60" />
      <Shape color="#ffa095" size="40" />
      <Shape color="#ff7b6b" size="20" />
    </Container>
  );
}

export default Cursor;

const Container = styled.div`
  pointer-events: none;

  span:first-child {
    &::before,
    &::after {
      content: '';
      @include absolute($t: 50%, $l: 50%);
      width: 1px;
      height: 10px;
      background: $red;
      transform-origin: center;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    &::after {
      transform: translate(-50%, -50%);
    }
  }
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
  will-change: transform;
  pointer-events: none;
  user-select: none;
  z-index: 9999;
`;
