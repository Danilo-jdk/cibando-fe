import React, { useState, useEffect, useContext} from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Login =  () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(email, password);
            if(response && response.success === true) {
                navigate('/')
            } else {
                console.log('errore')
            }
        } catch (error) {
            console.log('errore: ', error)
        }
    }

    return (
        <Contenitore>
            <form onSubmit={onSubmit} className="contenitore">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">LOGIN</button>
                </div>
            </form>

        </Contenitore>
    )
}

const Contenitore = styled.div `
    .contenitore {
        border-radius: 25px;
        width: 50%;
        margin: 20px auto;
        border: 2px solid #8e210b;
        padding: 20px !important;
    }
`
export default Login;