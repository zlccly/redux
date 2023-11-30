import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// react和redux建立关联
import { store } from "./redux/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
// react和redux建立关联

root.render(
    <App store={store} />
);
