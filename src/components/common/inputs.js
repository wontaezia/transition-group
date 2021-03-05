import React from 'react';
import styled from 'styled-components';

//  setValue
/*
    const [value, setValue] = useState('');
    ...
    <DefaultTextInput setValue={setValue} limit={10}>
    <searchTextInput setValue={setValue}>
*/

export function DefaultTextInput({ setValue, limit }) {
    const handleValue = (e) => {
        const { value } = e.target;
        const isMax = limit && limit <= value.length
        if(isMax) return;
        
        setValue(value);
    }

    return (
        <Container>
            <input onChange={handleValue}/>
        </Container>
    );
}

export function SearchTextInput({ setValue, limit }) {
    return (
        <Container>
            <input onChange={handleValue}></input>
        </Container>
    );
}

const Container = styled.div``;
