import { createRoot } from 'react-dom/client'
import App from './app'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const root = createRoot(document.getElementById('app'));
root.render(
    <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </>
    );