import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export function TextInput({ guide, type, value, setValue, limit }) {
    const [state, setState] = useState('');
    const handleValue = (e) => {
        const { value } = e.target;
        const isMax = limit && limit < value.length;

        if (isMax) return;

        setState(value.length);
        setValue(value);
    };

    switch (type) {
        case 'default':
            return (
                <Container>
                    <input placeholder={guide} onChange={handleValue} value={value} />
                    {limit ? <Limit>{`${state ? state : 0}/${limit}`}</Limit> : null}
                </Container>
            );
        case 'search':
            return (
                <Container withIcon>
                    <SearchIcon>🔍</SearchIcon>
                    <input placeholder={guide} onChange={handleValue} value={value} />
                    {limit ? <Limit>{`${state ? state : 0}/${limit}`}</Limit> : null}
                    {value ? <ResetIcon>✂️</ResetIcon> : null}
                </Container>
            );
        default:
            return;
    }
}

export default function Test() {
    const [limitValue, setLimitValue] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {}, [value]);

    return (
        <TestContainer>
            <TextInput
                type={'default'}
                value={limitValue}
                setValue={setLimitValue}
                guide={'ID'}
                limit={10}
            />
            <TextInput type={'search'} value={value} setValue={setValue} />
            <TextContainer>
                <span>
                    <CircleBadge color={'pink'} />
                    lorem
                </span>
                <span>
                    <CircleBadge color={'red'} />
                    test
                </span>
                <span>
                    <CircleBadge color={'beige'} />
                    he
                </span>
                <span>
                    <NumberBadge number={'19'} />
                    dfdsff
                </span>
            </TextContainer>
        </TestContainer>
    );
}

const Container = styled.div`
    position: relative;
    width: 300px;
    height: 50px;
    margin: 10px 0;

    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        padding: ${({ withIcon }) => (withIcon ? '0 50px' : '0 20px')};
        z-index: 1;
    }

    span {
        z-index: 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Limit = styled.span`
    right: 20px;
    color: #aaa;
`;

const SearchIcon = styled.span`
    left: 18px;
    color: #000;
`;

const ResetIcon = styled.span`
    right: 20px;
    color: #000;
`;

const TestContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Badge = styled.span`
    position: relative;

    &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const CircleBadge = styled(Badge)`
    &::before {
        content: '';
        left: -20px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme, color }) => theme[`$${color}`]};
    }
`;

const NumberBadge = styled(Badge)`
    &::before {
        content: '19';
        display: flex;
        justify-content: center;
        align-items: center;
        left: -20px;
        padding: 2px;
        border-radius: 2px;
        color: #ddd;
        background-color: #444;
        font-size: 5px;
    }
`;

const TextContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    > span {
        padding: 10px 0;
    }
`;
