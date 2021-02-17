import React, { useState } from 'react';
import styled from 'styled-components';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const postMessage = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setDescription('');

        return;
    };

    return (
        <Container onSubmit={postMessage}>
            <input
                type="text"
                placeholder="name"
                onChange={({ target }) => setName(target.value)}
                value={name}
                required
            />
            <input
                type="email"
                placeholder="e-mail"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                required
            />
            <textarea
                placeholder="est non lacinia dignissim"
                onChange={({ target }) => setDescription(target.value)}
                value={description}
                required
            />
            <button type="submit">SUBMIT</button>
        </Container>
    );
}

export default Form;

const Container = styled.form`
    ${({ theme }) => theme.flex('center', 'center', 'column')};
    width: 100%;
    margin: 100px auto 0;
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
        width: 500px;
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
        width: 500px;
        padding: 15px 30px 15px 30px;
        margin-top: 30px;
        border: 1px solid ${({ theme }) => theme.$black};
        background-color: transparent;
        font-weight: 400;
        letter-spacing: 1em;
        overflow: hidden;
    }
`;
