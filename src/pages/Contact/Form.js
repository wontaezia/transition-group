import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from 'styles/device';

function Form() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        description: '',
    });
    const { username, email, description } = inputs;

    const handleInputValue = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const postMessage = (e) => {
        e.preventDefault();

        setInputs({
            username: '',
            email: '',
            description: '',
        });
    };

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    return (
        <Container onSubmit={postMessage}>
            <input onChange={handleInputValue} name="username" type="text" placeholder="name" value={username} required />
            <input onChange={handleInputValue} name="email" type="email" placeholder="email" value={email} required />
            <textarea onChange={handleInputValue} name="description" placeholder="est non lacinia dignissim" value={description} required />
            <button type="submit">SUBMIT</button>
        </Container>
    );
}

export default Form;

const Container = styled.form`
    ${({ theme }) => theme.flex('center', 'center', 'column')};
    width: 500px;
    max-width: 100%;
    margin: 100px auto 0;
    padding: 0 30px;
    text-align: center;

    input[type='text'],
    input[type='email'],
    textarea,
    button {
        transform: translateY(40px);
        opacity: 0;
    }

    input[type='text'],
    input[type='email'],
    textarea {
        width: 100%;
        padding: 20px 40px;
        margin-bottom: 30px;
        background-color: ${({ theme }) => theme.$lightGray};
        font-size: 16px;
        font-weight: 300;

        &::placeholder {
            color: ${({ theme }) => theme.$placeholder};
        }
    }

    textarea {
        height: 160px;
        resize: none;
    }

    button {
        position: relative;
        width: 100%;
        padding: 15px 30px 15px 30px;
        margin-top: 30px;
        border: 1px solid ${({ theme }) => theme.$black};
        background-color: transparent;
        font-weight: 400;
        letter-spacing: 1em;
        overflow: hidden;
    }

    @media ${device.tablet} {
        padding: 0;
    }
`;
