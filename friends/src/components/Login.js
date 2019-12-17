import React, {useState} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from '../axiosAuth';

const Container = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    padding: 5%;
    border: 1px solid black;
    
    form {
        display: flex;
        flex-flow: column;
        input {
            margin-bottom: 2%;
        }
        button {
            background: blue;
            color: white;
            padding: 3%;
            margin-top: 3%;
        }
    }
`;



const Login = (props) => {

    const [credentials, setCredentials] = useState({username: 'Lambda School', password: 'i<3Lambd4'});

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/FriendsList');
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
            name="Username"
            placeholder="Enter Username"></input>
            <input onChange={handleChange}
            name="password"
            placeholder="Enter Password"></input>
            <button type="submit">Login</button>
        </form>
        </Container>
    )
}
export default Login;