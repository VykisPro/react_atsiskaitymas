import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Posts } from './contexts/PostsContext';
import { UsersProvider } from './contexts/UsersContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UsersProvider>
    <Posts>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Posts>
</UsersProvider>
);