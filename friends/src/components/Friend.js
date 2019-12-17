import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-flow: column;
    border: 2px solid black;
    padding: 2% 2%;
    margin: auto;
    width: 50%;
    * {
        text-align: center;
        
    }
    h1 {
        font-weight: bold;
        font-size: 100%;
        text-decoration: underline;
    }
    p {
        margin-top: 3%;
    }
`;

const Friend = (props) => {

    return (
        <Container>
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </Container>
    )
}

export default Friend; 