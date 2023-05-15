import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';

import UsersContext from '../../contexts/UsersContext';

const Login = () => {
    const {users, setCurrentUser, currentUser} = useContext(UsersContext)
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const logedInUser = users.find(user => username === user.email && password === user.password)
        if (logedInUser) {
            setCurrentUser(logedInUser)
            navigate('/')

            setUsername('');
            setPassword('');
        } else {
            setPassword('');
            alert('Login unsuccessful!');
        }
    };
    
    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Email:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        </form>
        <a href="/register">
        Don't have account?
        </a>
        </div>
        );
    };
    
    export default Login;
    